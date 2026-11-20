import { Schema } from 'effect';
import {
  HttpApi,
  HttpApiEndpoint as E,
  HttpApiGroup as G,
  OpenApi,
} from 'effect/http-api';
import * as W from './effect.js';
import { contractVersion } from './version.js';
import { errors, Paging, Search, success } from './http-common.js';
import { completeOpenApi } from './http-openapi.js';

const clan = {
  clanTag: Schema.String.annotate({
    description: 'Tag of the clan (URL-encoded, e.g. %232PP).',
    examples: ['#2PP'],
  }),
};
const player = {
  playerTag: Schema.String.annotate({
    description: 'Tag of the player (URL-encoded, e.g. %232PP).',
    examples: ['#2PP'],
  }),
};
const location = {
  locationId: Schema.String.annotate({
    description: 'Identifier of the location.',
    examples: ['32000249'],
  }),
};
const league = {
  leagueId: Schema.String.annotate({
    description: 'Identifier of the league.',
    examples: ['29000022'],
  }),
};

export const Clans = G.make('clans').add(
  E.get('search', '/clans', {
    query: Search,
    success: success(W.ClanSearchResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Search clans')
    .annotate(
      OpenApi.Description,
      'Search all clans by name and/or filtering parameters.',
    ),
  E.get('profile', '/clans/:clanTag', {
    params: clan,
    success: success(W.Clan),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Get clan information')
    .annotate(
      OpenApi.Description,
      'Get information about a single clan by clan tag.',
    ),
  E.get('members', '/clans/:clanTag/members', {
    params: clan,
    query: Paging,
    success: success(W.ClanMembersResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'List clan members')
    .annotate(OpenApi.Description, 'List members of a clan.'),
  E.get('war', '/clans/:clanTag/currentwar', {
    params: clan,
    success: success(W.ClanWar),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Retrieve current clan war')
    .annotate(
      OpenApi.Description,
      "Retrieve information about a clan's current clan war.",
    ),
  E.get('warlog', '/clans/:clanTag/warlog', {
    params: clan,
    query: Paging,
    success: success(W.ClanWarLogResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Retrieve clan war log')
    .annotate(OpenApi.Description, "Retrieve a clan's clan war log."),
  E.get('cwl', '/clans/:clanTag/currentwar/leaguegroup', {
    params: clan,
    success: success(W.ClanWarLeagueGroup),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Retrieve current CWL group')
    .annotate(
      OpenApi.Description,
      "Retrieve information about a clan's current Clan War League group.",
    ),
  E.get('leagueWar', '/clanwarleagues/wars/:warTag', {
    params: {
      warTag: Schema.String.annotate({
        description: 'Tag of the Clan War League war.',
        examples: ['#2PP'],
      }),
    },
    success: success(W.ClanWar),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Retrieve CWL war')
    .annotate(
      OpenApi.Description,
      'Retrieve information about an individual Clan War League war.',
    ),
  E.get('raids', '/clans/:clanTag/capitalraidseasons', {
    params: clan,
    query: Paging,
    success: success(W.CapitalRaidSeasonsResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Retrieve clan capital raid seasons')
    .annotate(OpenApi.Description, "Retrieve a clan's capital raid seasons."),
);
export const Players = G.make('players').add(
  E.get('profile', '/players/:playerTag', {
    params: player,
    success: success(W.Player),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Get player information')
    .annotate(
      OpenApi.Description,
      'Get information about a single player by player tag.',
    )
    .annotate(OpenApi.Override, {
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
  })
    .annotate(OpenApi.Summary, 'Get player battle log')
    .annotate(
      OpenApi.Description,
      'Get recent battle log entries for a player.',
    ),
  E.get('history', '/players/:playerTag/leaguehistory', {
    params: player,
    success: success(W.LeagueHistoryResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Get player league history')
    .annotate(
      OpenApi.Description,
      'Get historical ranked league season results for a player.',
    ),
  E.post('verify', '/players/:playerTag/verifytoken', {
    params: player,
    payload: W.VerifyTokenRequest,
    success: success(W.VerifyTokenResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Verify player API token')
    .annotate(
      OpenApi.Description,
      'Verify an in-game API token for a player account.',
    ),
);
export const Leagues = G.make('leagues').add(
  E.get('tiers', '/leaguetiers', {
    query: Paging,
    success: success(W.LeagueTierListResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'List league tiers')
    .annotate(OpenApi.Description, 'List ranked league tiers.'),
  E.get('tier', '/leaguetiers/:leagueTierId', {
    params: {
      leagueTierId: Schema.String.annotate({
        description: 'Identifier of the league tier.',
        examples: ['105000000'],
      }),
    },
    success: success(W.LeagueTier),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Get league tier information')
    .annotate(
      OpenApi.Description,
      'Get information about a specific league tier.',
    ),
  E.get('capitals', '/capitalleagues', {
    query: Paging,
    success: success(W.CapitalLeagueListResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'List capital leagues')
    .annotate(OpenApi.Description, 'List Clan Capital leagues.'),
  E.get('capital', '/capitalleagues/:leagueId', {
    params: league,
    success: success(W.CapitalLeague),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Get capital league information')
    .annotate(
      OpenApi.Description,
      'Get information about a specific Clan Capital league.',
    ),
  E.get('builders', '/builderbaseleagues', {
    query: Paging,
    success: success(W.BuilderBaseLeagueListResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'List Builder Base leagues')
    .annotate(OpenApi.Description, 'List Builder Base leagues.'),
  E.get('builder', '/builderbaseleagues/:leagueId', {
    params: league,
    success: success(W.BuilderBaseLeague),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Get Builder Base league information')
    .annotate(
      OpenApi.Description,
      'Get information about a specific Builder Base league.',
    ),
  E.get('wars', '/warleagues', {
    query: Paging,
    success: success(W.WarLeagueListResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'List war leagues')
    .annotate(OpenApi.Description, 'List Clan War Leagues.'),
  E.get('war', '/warleagues/:leagueId', {
    params: league,
    success: success(W.WarLeague),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Get war league information')
    .annotate(
      OpenApi.Description,
      'Get information about a specific Clan War League.',
    ),
  E.get('seasons', '/leagues/:leagueId/seasons', {
    params: league,
    query: Paging,
    success: success(W.LeagueSeasonListResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Get league seasons')
    .annotate(
      OpenApi.Description,
      'Get available seasons for a league (e.g. Legend League).',
    ),
  E.get('season', '/leagues/:leagueId/seasons/:seasonId', {
    params: {
      ...league,
      seasonId: Schema.String.annotate({
        description: 'Identifier of the season (YYYY-MM).',
        examples: ['2025-10'],
      }),
    },
    query: Paging,
    success: success(W.PlayerSeasonRankingListResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Get league season rankings')
    .annotate(
      OpenApi.Description,
      'Get player rankings for a specific league season.',
    ),
  E.get('group', '/leaguegroup/:leagueGroupTag/:leagueSeasonId', {
    params: {
      leagueGroupTag: Schema.String.annotate({
        description: 'Tag of the ranked league group.',
        examples: ['#2PP'],
      }),
      leagueSeasonId: Schema.String.annotate({
        description: 'Identifier of the ranked league season.',
        examples: ['1'],
      }),
    },
    query: {
      playerTag: Schema.String.annotate({
        description: 'Player tag used to resolve the league group.',
        examples: ['#2PP'],
      }),
    },
    success: success(W.LeagueGroup),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Get ranked league group')
    .annotate(
      OpenApi.Description,
      'Get members and battle logs for a ranked league group.',
    ),
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
  })
    .annotate(OpenApi.Summary, 'List locations')
    .annotate(OpenApi.Description, 'List available leaderboard locations.'),
  E.get('item', '/locations/:locationId', {
    params: location,
    success: success(W.Location),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Get location information')
    .annotate(
      OpenApi.Description,
      'Get information about a specific location.',
    ),
  E.get('clans', '/locations/:locationId/rankings/clans', {
    params: location,
    query: Paging,
    success: success(W.ClanRankingListResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Get clan rankings for a location')
    .annotate(
      OpenApi.Description,
      'Get Home Village clan rankings for a specific location.',
    ),
  E.get('players', '/locations/:locationId/rankings/players', {
    params: location,
    query: Paging,
    success: success(W.PlayerRankingListResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Get player rankings for a location')
    .annotate(
      OpenApi.Description,
      'Get Home Village player rankings for a specific location.',
    ),
  E.get('builders', '/locations/:locationId/rankings/players-builder-base', {
    params: location,
    query: Paging,
    success: success(W.PlayerBuilderBaseRankingListResponse),
    error: errors,
  })
    .annotate(
      OpenApi.Summary,
      'Get Builder Base player rankings for a location',
    )
    .annotate(
      OpenApi.Description,
      'Get Builder Base player rankings for a specific location.',
    ),
  E.get('builderClans', '/locations/:locationId/rankings/clans-builder-base', {
    params: location,
    query: Paging,
    success: success(W.ClanBuilderBaseRankingListResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Get Builder Base clan rankings for a location')
    .annotate(
      OpenApi.Description,
      'Get Builder Base clan rankings for a specific location.',
    ),
  E.get('capitals', '/locations/:locationId/rankings/capitals', {
    params: location,
    query: Paging,
    success: success(W.ClanCapitalRankingListResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Get clan capital rankings for a location')
    .annotate(
      OpenApi.Description,
      'Get Clan Capital rankings for a specific location.',
    ),
);
export const Labels = G.make('labels').add(
  E.get('players', '/labels/players', {
    query: Paging,
    success: success(W.LabelListResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'List player labels')
    .annotate(OpenApi.Description, 'List available player labels.'),
  E.get('clans', '/labels/clans', {
    query: Paging,
    success: success(W.LabelListResponse),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'List clan labels')
    .annotate(OpenApi.Description, 'List available clan labels.'),
);
export const Goldpass = G.make('goldpass').add(
  E.get('current', '/goldpass/seasons/current', {
    success: success(W.GoldPassSeason),
    error: errors,
  })
    .annotate(OpenApi.Summary, 'Get current Gold Pass season')
    .annotate(
      OpenApi.Description,
      'Get information about the current Gold Pass season.',
    ),
);
const BaseApi = HttpApi.make('ClashMockAPI')
  .add(Clans, Players, Leagues, Locations, Labels, Goldpass)
  .annotate(OpenApi.Title, 'Clash of Clans example API')
  .annotate(OpenApi.Version, contractVersion)
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

export const Api = BaseApi.annotate(OpenApi.Transform, (spec) =>
  completeOpenApi(spec as OpenApi.OpenAPISpec, BaseApi),
);
