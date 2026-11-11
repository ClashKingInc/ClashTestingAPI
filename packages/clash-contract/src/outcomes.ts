import { Schema } from 'effect';

// HTTP status alone is not a business outcome. Only a known reason on the
// matching route may turn a failure into a private-log or no-current-event state.
export const ClashOutcome = Schema.Struct({
  kind: Schema.Literals([
    'success',
    'privateWarLog',
    'noCurrentEvent',
    'notFound',
    'maintenance',
    'rateLimited',
    'forbidden',
    'unauthenticated',
    'notImplemented',
    'invalidRequest',
    'unavailable',
    'unexpected',
  ]),
  status: Schema.Int,
  retryable: Schema.Boolean,
  retryAfterSeconds: Schema.optionalKey(Schema.Number),
  reason: Schema.optionalKey(Schema.String),
});
export type ClashOutcome = typeof ClashOutcome.Type;
export const ClashErrorStatuses = [400, 403, 404, 429, 500, 501, 503] as const;

export function classifyClashResponse(input: {
  path: string;
  status: number;
  body: unknown;
  retryAfter?: string | null;
  now?: number;
}): ClashOutcome {
  const path = input.path.split('?')[0].replace(/\/$/, '');
  const body =
    input.body && typeof input.body === 'object'
      ? (input.body as Record<string, unknown>)
      : {};
  const reason = typeof body.reason === 'string' ? body.reason : undefined;
  let kind: ClashOutcome['kind'] = 'unexpected';
  if (input.status >= 200 && input.status < 300) kind = 'success';
  else if (
    input.status === 503 &&
    ['maintenance', 'inmaintenance'].includes(
      reason?.trim().toLowerCase() ?? '',
    )
  )
    kind = 'maintenance';
  else if (input.status === 403)
    kind =
      (reason === 'accessDenied.privateWarLog' ||
        (reason === 'accessDenied' &&
          typeof body.message === 'string' &&
          /private/i.test(body.message) &&
          /war\s*log/i.test(body.message))) &&
      /\/clans\/[^/]+\/(warlog|currentwar)$/.test(path)
        ? 'privateWarLog'
        : 'forbidden';
  else if (input.status === 404)
    kind =
      reason === 'notFound' &&
      /\/clans\/[^/]+\/currentwar\/leaguegroup$/.test(path)
        ? 'noCurrentEvent'
        : 'notFound';
  else if (input.status === 429) kind = 'rateLimited';
  else if (input.status === 401) kind = 'unauthenticated';
  else if (input.status === 501) kind = 'notImplemented';
  else if (input.status === 400) kind = 'invalidRequest';
  else if (input.status >= 500) kind = 'unavailable';
  const value = input.retryAfter?.trim();
  const seconds = value
    ? /^\d+$/.test(value)
      ? Number(value)
      : Math.ceil((Date.parse(value) - (input.now ?? Date.now())) / 1000)
    : undefined;
  return Schema.decodeUnknownSync(ClashOutcome)({
    kind,
    status: input.status,
    retryable: ['rateLimited', 'unavailable'].includes(kind),
    ...(reason === undefined ? {} : { reason }),
    ...(seconds !== undefined && Number.isFinite(seconds)
      ? { retryAfterSeconds: Math.max(0, seconds) }
      : {}),
  });
}

// Mock-only controls make the same failure reproducible on every operation.
// These headers are not sent to Supercell and do not change its wire protocol.
export const MockResponseScenario = Schema.Literals([
  'maintenance',
  'unavailable',
  'rateLimited',
  'notFound',
  'forbidden',
  'privateWarLog',
  'invalidIp',
  'invalidRequest',
  'internalError',
  'notImplemented',
]);
export const mockResponses = {
  maintenance: { status: 503, reason: 'inMaintenance' },
  unavailable: { status: 503, reason: 'upstreamUnavailable' },
  rateLimited: { status: 429, reason: 'tooManyRequests' },
  notFound: { status: 404, reason: 'notFound' },
  forbidden: { status: 403, reason: 'accessDenied' },
  privateWarLog: { status: 403, reason: 'accessDenied.privateWarLog' },
  invalidIp: { status: 403, reason: 'accessDenied.invalidIp' },
  invalidRequest: { status: 400, reason: 'badRequest' },
  internalError: { status: 500, reason: 'unknownException' },
  notImplemented: { status: 501, reason: 'notImplemented' },
} as const satisfies Record<
  typeof MockResponseScenario.Type,
  { status: number; reason: string }
>;
