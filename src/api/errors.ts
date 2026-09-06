import { Cause, Effect } from 'effect';
import {
  HttpRouter,
  HttpServerError,
  HttpServerRequest,
  HttpServerResponse,
} from 'effect/unstable/http';
import { HttpApiError } from 'effect/unstable/httpapi';
import { Api } from './api.js';

// Retain method errors and trailing-slash redirects using the same endpoint
// definitions as the router, so this never becomes a second route inventory.
const routes: Array<{ method: string; path: string }> = Object.values(
  Api.groups,
).flatMap((group) =>
  Object.values(group.endpoints).map((endpoint) => ({
    method: endpoint.method,
    path: endpoint.path,
  })),
);
routes.push(
  { method: 'GET', path: '/' },
  { method: 'GET', path: '/openapi.json' },
);
const patterns = routes.map((route) => ({
  ...route,
  pattern: new RegExp(
    `^${route.path
      .split('/')
      .map((segment) =>
        segment.startsWith(':')
          ? '[^/]+'
          : segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
      )
      .join('/')}$`,
  ),
}));
function missingRoute(error: HttpServerError.HttpServerError) {
  const url = new URL(error.request.url, 'https://mock.invalid');
  const matches = patterns.filter((route) => route.pattern.test(url.pathname));
  if (matches.length)
    return HttpServerResponse.jsonUnsafe(
      { reason: 'badRequest', message: 'Method not allowed.' },
      {
        status: 405,
        headers: {
          allow: [...new Set(matches.map((route) => route.method))].join(', '),
        },
      },
    );
  const alternate = url.pathname.endsWith('/')
    ? url.pathname.slice(0, -1)
    : `${url.pathname}/`;
  if (alternate && patterns.some((route) => route.pattern.test(alternate)))
    return HttpServerResponse.redirect(`${alternate}${url.search}`, {
      status: 307,
    });
  return HttpServerResponse.jsonUnsafe(
    { reason: 'notFound', message: 'Route was not found.' },
    { status: 404 },
  );
}

export const errorBoundary = HttpRouter.middleware(
  (effect) =>
    Effect.flatMap(HttpServerRequest.HttpServerRequest, (request) => {
      // The router can otherwise interpret /clans/ as an empty clanTag.
      const url = new URL(request.url, 'https://mock.invalid');
      const trimmed = url.pathname.replace(/\/+$/, '');
      if (
        trimmed &&
        trimmed !== url.pathname &&
        patterns.some((route) => route.pattern.test(trimmed))
      ) {
        return Effect.succeed(
          HttpServerResponse.redirect(`${trimmed}${url.search}`, {
            status: 307,
          }),
        );
      }
      return Effect.catchCause(effect, (cause) => {
        // Let the HTTP runtime retain request cancellation semantics.
        if (Cause.hasInterruptsOnly(cause)) return Effect.failCause(cause);
        const error = Cause.squash(cause);
        if (
          HttpApiError.HttpApiSchemaError.is(error) &&
          ['Params', 'Headers', 'Query', 'Payload'].includes(error.kind)
        ) {
          return Effect.succeed(
            HttpServerResponse.jsonUnsafe(
              {
                reason: 'badRequest',
                message: `Invalid request ${error.kind.toLowerCase()}.`,
              },
              { status: 400 },
            ),
          );
        }
        if (HttpServerError.isHttpServerError(error)) {
          if (error.reason._tag === 'RouteNotFound')
            return Effect.succeed(missingRoute(error));
          if (error.reason._tag === 'RequestParseError')
            return Effect.succeed(
              HttpServerResponse.jsonUnsafe(
                { reason: 'badRequest', message: 'Invalid request body.' },
                { status: 400 },
              ),
            );
        }
        return Effect.logError(
          'Mock API failed to validate or produce a response',
          cause,
        ).pipe(
          Effect.as(
            HttpServerResponse.jsonUnsafe(
              {
                reason: 'unknownException',
                message: 'Mock API could not produce a valid response.',
              },
              { status: 500 },
            ),
          ),
        );
      });
    }),
  { global: true },
);
