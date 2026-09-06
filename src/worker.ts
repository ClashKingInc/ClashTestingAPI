import { Layer } from 'effect';
import { HttpRouter, HttpServer } from 'effect/unstable/http';
import { HttpApiBuilder, HttpApiScalar } from 'effect/unstable/httpapi';
import { Api } from './api/api.js';
import { errorBoundary } from './api/errors.js';
import { ClansLive } from './handlers/clans.js';
import { PlayersLive } from './handlers/players.js';
import { LeaguesLive } from './handlers/leagues.js';
import { LocationsLive } from './handlers/locations.js';
import { LabelsLive, GoldpassLive } from './handlers/misc.js';

const routes = Layer.mergeAll(
  errorBoundary,
  HttpApiBuilder.layer(Api, { openapiPath: '/openapi.json' }).pipe(
    Layer.provide(
      Layer.mergeAll(
        ClansLive,
        PlayersLive,
        LeaguesLive,
        LocationsLive,
        LabelsLive,
        GoldpassLive,
      ),
    ),
  ),
  HttpApiScalar.layer(Api, {
    path: '/',
    scalar: { theme: 'deepSpace', layout: 'modern' },
  }),
).pipe(Layer.provide(HttpServer.layerServices));
const { handler } = HttpRouter.toWebHandler(routes, {
  disableLogger: true,
  routerConfig: { ignoreTrailingSlash: false },
});
export default {
  async fetch(request: Request): Promise<Response> {
    try {
      return await handler(request);
    } catch (error) {
      console.error(
        JSON.stringify({ event: 'request_failed', message: String(error) }),
      );
      return Response.json(
        {
          reason: 'unknownException',
          message: 'Mock API could not produce a valid response.',
        },
        { status: 500 },
      );
    }
  },
} satisfies ExportedHandler<Env>;
