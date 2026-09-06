import { Schema } from 'effect';
import {
  HttpApi,
  HttpApiEndpoint as E,
  HttpApiGroup as G,
  OpenApi,
} from 'effect/unstable/httpapi';
import * as W from '../../packages/clash-contract/src/effect.js';
import packageInfo from '../../packages/clash-contract/package.json';
import { errors, Paging, Search, success } from './common.js';
import { completeOpenApi } from './openapi.js';

const clan = { clanTag: Schema.String };
const player = { playerTag: Schema.String };
const location = { locationId: Schema.String };
const league = { leagueId: Schema.String };

export const Clans = G.make('clans').add(
  E.get('search', '/clans', {
    query: Search,
    success: success(W.ClanSearchResponse),
    error: errors,
  }),
  E.get('profile', '/clans/:clanTag', {
    params: clan,
    success: success(W.Clan),
    error: errors,
  }),
  E.get('members', '/clans/:clanTag/members', {
    params: clan,
    query: Paging,
    success: success(W.ClanMembersResponse),
    error: errors,
  }),
  E.get('war', '/clans/:clanTag/currentwar', {
    params: clan,
    success: success(W.ClanWar),
    error: errors,
  }),
  E.get('warlog', '/clans/:clanTag/warlog', {
    params: clan,
    query: Paging,
    success: success(W.ClanWarLogResponse),
    error: errors,
  }),
  E.get('cwl', '/clans/:clanTag/currentwar/leaguegroup', {
    params: clan,
    success: success(W.ClanWarLeagueGroup),
    error: errors,
  }),
  E.get('leagueWar', '/clanwarleagues/wars/:warTag', {
    params: { warTag: Schema.String },
    success: success(W.ClanWar),
    error: errors,
  }),
  E.get('raids', '/clans/:clanTag/capitalraidseasons', {
    params: clan,
    query: Paging,
    success: success(W.CapitalRaidSeasonsResponse),
    error: errors,
  }),
);
export const Players = G.make('players').add(
  E.get('profile', '/players/:playerTag', {
    params: player,
    success: success(W.Player),
    error: errors,
  }).annotate(OpenApi.Override, {
    'x-codeSamples': [
      {
        lang: 'Python',
        label: 'clashy.py',
        source:
          'player = await coc_client.get_player("#2PP")\nprint(player.name)',
      },
    ],
  }),
  E.get('battles', '/players/:playerTag/battlelog', {
    params: player,
    success: success(W.BattleLogResponse),
    error: errors,
  }),
  E.get('history', '/players/:playerTag/leaguehistory', {
    params: player,
    success: success(W.LeagueHistoryResponse),
    error: errors,
  }),
  E.post('verify', '/players/:playerTag/verifytoken', {
    params: player,
    payload: W.VerifyTokenRequest,
    success: success(W.VerifyTokenResponse),
    error: errors,
  }),
);
export const Leagues = G.make('leagues').add(
  E.get('tiers', '/leaguetiers', {
    query: Paging,
    success: success(W.LeagueTierListResponse),
    error: errors,
  }),
  E.get('tier', '/leaguetiers/:leagueTierId', {
    params: { leagueTierId: Schema.String },
    success: success(W.LeagueTier),
    error: errors,
  }),
  E.get('capitals', '/capitalleagues', {
    query: Paging,
    success: success(W.CapitalLeagueListResponse),
    error: errors,
  }),
  E.get('capital', '/capitalleagues/:leagueId', {
    params: league,
    success: success(W.CapitalLeague),
    error: errors,
  }),
  E.get('builders', '/builderbaseleagues', {
    query: Paging,
    success: success(W.BuilderBaseLeagueListResponse),
    error: errors,
  }),
  E.get('builder', '/builderbaseleagues/:leagueId', {
    params: league,
    success: success(W.BuilderBaseLeague),
    error: errors,
  }),
  E.get('wars', '/warleagues', {
    query: Paging,
    success: success(W.WarLeagueListResponse),
    error: errors,
  }),
  E.get('war', '/warleagues/:leagueId', {
    params: league,
    success: success(W.WarLeague),
    error: errors,
  }),
  E.get('seasons', '/leagues/:leagueId/seasons', {
    params: league,
    query: Paging,
    success: success(W.LeagueSeasonListResponse),
    error: errors,
  }),
  E.get('season', '/leagues/:leagueId/seasons/:seasonId', {
    params: { ...league, seasonId: Schema.String },
    query: Paging,
    success: success(W.PlayerSeasonRankingListResponse),
    error: errors,
  }),
  E.get('group', '/leaguegroup/:leagueGroupTag/:leagueSeasonId', {
    params: { leagueGroupTag: Schema.String, leagueSeasonId: Schema.String },
    query: { playerTag: Schema.String },
    success: success(W.LeagueGroup),
    error: errors,
  }),
  E.get('legacyList', '/leagues', { query: Paging, error: errors }).annotate(
    OpenApi.Exclude,
    true,
  ),
  E.get('legacy', '/leagues/:leagueId', {
    params: league,
    error: errors,
  }).annotate(OpenApi.Exclude, true),
);
export const Locations = G.make('locations').add(
  E.get('list', '/locations', {
    query: Paging,
    success: success(W.LocationListResponse),
    error: errors,
  }),
  E.get('item', '/locations/:locationId', {
    params: location,
    success: success(W.Location),
    error: errors,
  }),
  E.get('clans', '/locations/:locationId/rankings/clans', {
    params: location,
    query: Paging,
    success: success(W.ClanRankingListResponse),
    error: errors,
  }),
  E.get('players', '/locations/:locationId/rankings/players', {
    params: location,
    query: Paging,
    success: success(W.PlayerRankingListResponse),
    error: errors,
  }),
  E.get('builders', '/locations/:locationId/rankings/players-builder-base', {
    params: location,
    query: Paging,
    success: success(W.PlayerBuilderBaseRankingListResponse),
    error: errors,
  }),
  E.get('builderClans', '/locations/:locationId/rankings/clans-builder-base', {
    params: location,
    query: Paging,
    success: success(W.ClanBuilderBaseRankingListResponse),
    error: errors,
  }),
  E.get('capitals', '/locations/:locationId/rankings/capitals', {
    params: location,
    query: Paging,
    success: success(W.ClanCapitalRankingListResponse),
    error: errors,
  }),
);
export const Labels = G.make('labels').add(
  E.get('players', '/labels/players', {
    query: Paging,
    success: success(W.LabelListResponse),
    error: errors,
  }),
  E.get('clans', '/labels/clans', {
    query: Paging,
    success: success(W.LabelListResponse),
    error: errors,
  }),
);
export const Goldpass = G.make('goldpass').add(
  E.get('current', '/goldpass/seasons/current', {
    success: success(W.GoldPassSeason),
    error: errors,
  }),
);
export const Api = HttpApi.make('ClashMockAPI')
  .add(Clans, Players, Leagues, Locations, Labels, Goldpass)
  .annotate(OpenApi.Transform, (spec) =>
    completeOpenApi(spec as OpenApi.OpenAPISpec),
  )
  .annotate(OpenApi.Title, 'Clash of Clans example API')
  .annotate(OpenApi.Version, packageInfo.version)
  .annotate(OpenApi.Servers, [{ url: '/' }])
  .annotate(
    OpenApi.Description,
    'Community-maintained mock Clash of Clans API. Not affiliated with Supercell. Use #2PP and additional trailing Ps to select deterministic fixture variants. All models and OpenAPI are derived from the Effect contract.',
  )
  .annotate(OpenApi.Override, {
    'x-scalar-sdk-installation': [
      {
        lang: 'Python',
        description: 'Install the Python SDK:',
        source: 'pip install clashy.py',
      },
    ],
  });
