import { Schema } from 'effect';
import { HttpApiBuilder } from 'effect/unstable/httpapi';
import * as W from '../../packages/clash-contract/src/effect.js';
import { Api } from '../api/api.js';
import {
  badFixture,
  checkPaging,
  isObject,
  item,
  load,
  reply,
  run,
  type Page,
} from '../fixtures/repository.js';
function rewrite(value: unknown, location: typeof W.Location.Type): unknown {
  if (Array.isArray(value)) return value.map((x) => rewrite(x, location));
  if (isObject(value))
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [
        k,
        k === 'location' && isObject(v) ? location : rewrite(v, location),
      ]),
    );
  return value;
}
function ranking<S extends Schema.Codec<unknown, unknown, never, never>>(
  kind: string,
  schema: S,
  id: string,
  page: Page,
  replace = false,
) {
  checkPaging(page);
  if (id === 'global')
    return reply(`locations/rankings/${kind}/COUNTRY.json`, schema, page);
  const location = load(
    'locations/LISTLOCATIONS.json',
    W.LocationListResponse,
  ).body.items.find((x) => String(x.id) === id);
  if (!location)
    return badFixture(`locations/rankings/${kind}/BADREQUEST.json`);
  const variant = location.isCountry ? 'COUNTRY' : 'REGION';
  return reply(
    `locations/rankings/${kind}/${variant}.json`,
    schema,
    page,
    (body) =>
      replace && location.isCountry
        ? Schema.decodeUnknownSync(schema)(rewrite(body, location))
        : body,
  );
}
export const LocationsLive = HttpApiBuilder.group(Api, 'locations', (h) =>
  h
    .handle('list', ({ query }) =>
      run(() =>
        reply('locations/LISTLOCATIONS.json', W.LocationListResponse, query),
      ),
    )
    .handle('item', ({ params }) =>
      run(() =>
        item(
          'locations/LISTLOCATIONS.json',
          W.LocationListResponse,
          params.locationId,
          'locations/location/BADREQUEST.json',
        ),
      ),
    )
    .handle('clans', ({ params, query }) =>
      run(() =>
        ranking(
          'clans',
          W.ClanRankingListResponse,
          params.locationId,
          query,
          true,
        ),
      ),
    )
    .handle('players', ({ params, query }) =>
      run(() =>
        ranking(
          'players',
          W.PlayerRankingListResponse,
          params.locationId,
          query,
        ),
      ),
    )
    .handle('builders', ({ params, query }) =>
      run(() =>
        ranking(
          'players-builder-base',
          W.PlayerBuilderBaseRankingListResponse,
          params.locationId,
          query,
        ),
      ),
    )
    .handle('builderClans', ({ params, query }) =>
      run(() =>
        ranking(
          'clans-builder-base',
          W.ClanBuilderBaseRankingListResponse,
          params.locationId,
          query,
          true,
        ),
      ),
    )
    .handle('capitals', ({ params, query }) =>
      run(() =>
        ranking(
          'capitals',
          W.ClanCapitalRankingListResponse,
          params.locationId,
          query,
          true,
        ),
      ),
    ),
);
