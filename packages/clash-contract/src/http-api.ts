import { Schema } from 'effect';
import {
  HttpApi,
  HttpApiEndpoint as E,
  HttpApiGroup as G,
  OpenApi,
} from 'effect/http-api';
import * as W from './effect.js';
import { contractVersion } from './version.js';
import {
  errors,
  Paging,
  Search,
  SeasonPaging,
  success,
} from './http-common.js';
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
    description:
      'Identifier of the location. Unknown IDs return HTTP 400 (badRequest).',
    examples: ['32000249'],
  }),
};
const rankingLocation = {
  locationId: Schema.String.annotate({
    description:
      'Identifier of the location. Use "global" for worldwide rankings, or a numeric country/region ID (e.g. 32000249).',
    examples: ['global'],
  }),
};
const league = {
  leagueId: Schema.String.annotate({
    description: 'Identifier of the league.',
    examples: ['29000022'],
  }),
};
const capitalLeague = {
  leagueId: Schema.String.annotate({
    description: 'Identifier of the Clan Capital league.',
    examples: ['85000022'],
  }),
};
const builderBaseLeague = {
  leagueId: Schema.String.annotate({
    description: 'Identifier of the Builder Base league.',
    examples: ['44000041'],
  }),
};
const warLeague = {
  leagueId: Schema.String.annotate({
    description: 'Identifier of the Clan War League.',
    examples: ['48000018'],
  }),
};

export const Clans = G.make('clans')
  .annotate(
    OpenApi.Description,
    'Clan search, profiles, member lists, classic wars, Clan War Leagues (CWL), war logs, and Clan Capital raid seasons.',
  )
  .add(
    E.get('search', '/clans', {
      query: Search,
      success: success(W.ClanSearchResponse),
      error: errors,
    })
      .annotate(OpenApi.Summary, 'Search clans')
      .annotate(
        OpenApi.Description,
        'Search clans by name and/or filtering parameters. At least one filtering parameter is required (`name`, `warFrequency`, `locationId`, `minMembers`, `maxMembers`, `minClanPoints`, `minClanLevel`, or `labelIds`).',
      ),
    E.get('profile', '/clans/:clanTag', {
      params: clan,
      success: success(W.Clan),
      error: errors,
    })
      .annotate(OpenApi.Summary, 'Get clan information')
      .annotate(
        OpenApi.Description,
        'Get information about a single clan by clan tag. Mock variants: `#2PP` (full clan with Capital districts), `#2PPP` (no-Capital clan with private war log).',
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
        "Retrieve information about a clan's current clan war. Mock variants: `#2PP` (inWar), `#2PPP` (preparation), `#2PPPP` (warEnded), `#2PPPPP` (notInWar), `#2PPPPPP` (403 private war log).",
      ),
    E.get('warlog', '/clans/:clanTag/warlog', {
      params: clan,
      query: Paging,
      success: success(W.ClanWarLogResponse),
      error: errors,
    })
      .annotate(OpenApi.Summary, 'Retrieve clan war log')
      .annotate(
        OpenApi.Description,
        "Retrieve a clan's clan war log (includes both classic wars and CWL season summary rows). Mock variants: `#2PP` (war log), `#2PPP` (403 private war log).",
      ),
    E.get('cwl', '/clans/:clanTag/currentwar/leaguegroup', {
      params: clan,
      success: success(W.ClanWarLeagueGroup),
      error: errors,
    })
      .annotate(OpenApi.Summary, 'Retrieve current CWL group')
      .annotate(
        OpenApi.Description,
        "Retrieve information about a clan's current Clan War League group. Mock variants: `#2PP` (inWar), `#2PPP` (ended), `#2PPPP` (404 not found).",
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
        'Retrieve information about an individual Clan War League war. Mock variants: `#2PP` (inWar), `#2PPP` (preparation), `#2PPPP` (warEnded).',
      ),
    E.get('raids', '/clans/:clanTag/capitalraidseasons', {
      params: clan,
      query: Paging,
      success: success(W.CapitalRaidSeasonsResponse),
      error: errors,
    })
      .annotate(OpenApi.Summary, 'Retrieve clan capital raid seasons')
      .annotate(
        OpenApi.Description,
        "Retrieve a clan's capital raid seasons. Ongoing seasons include `members` and district `attacks`; ended seasons omit both.",
      ),
  );

export const Players = G.make('players')
  .annotate(
    OpenApi.Description,
    'Player profiles, battle logs, ranked league history, and in-game API token verification.',
  )
  .add(
    E.get('profile', '/players/:playerTag', {
      params: player,
      success: success(W.Player),
      error: errors,
    })
      .annotate(OpenApi.Summary, 'Get player information')
      .annotate(
        OpenApi.Description,
        'Get information about a single player by player tag. Mock variants: `#2PP` (found), `#2PPP` (404 not found).',
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
        'Verify an in-game API token for a player account. Mock behavior: `#2PP` with `{"token":"TOKEN"}` returns `ok` (other tokens return `invalid`); `#2PPP` returns 404.',
      ),
  );

export const Leagues = G.make('leagues')
  .annotate(
    OpenApi.Description,
    'Ranked league tiers, Clan Capital leagues, Builder Base leagues, Clan War Leagues, Legend League seasons, ranked league groups, and deprecated legacy leagues.',
  )
  .add(
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
      params: capitalLeague,
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
      params: builderBaseLeague,
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
      params: warLeague,
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
        'Get available seasons for a league (e.g. Legend League `29000022`).',
      ),
    E.get('season', '/leagues/:leagueId/seasons/:seasonId', {
      params: {
        ...league,
        seasonId: Schema.String.annotate({
          description:
            'Identifier of the season: YYYY-MM (2015-07 to 2025-08), YYYY-MM-DD (2025-10-06 to 2026-04-20), or URL-encoded v2-YYYY-MM-DDTHH:MM:SSZ (2026-05-11 onward).',
          examples: ['2026-02-23'],
        }),
      },
      query: SeasonPaging,
      success: success(W.PlayerSeasonRankingListResponse),
      error: errors,
    })
      .annotate(OpenApi.Summary, 'Get league season rankings')
      .annotate(
        OpenApi.Description,
        'Get player rankings for a specific league season. On the live Supercell API, `limit` must be between 100 and 25,000 when specified.',
      ),
    E.get('group', '/leaguegroup/:leagueGroupTag/:leagueSeasonId', {
      params: {
        leagueGroupTag: Schema.String.annotate({
          description:
            'Tag of the ranked league group (URL-encoded). Placeholder "#0" returns 404.',
          examples: ['#2YYCYCC'],
        }),
        leagueSeasonId: Schema.String.annotate({
          description: 'Unix epoch timestamp (seconds) of the ranked season.',
          examples: ['1773032400'],
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
        'Get members and battle logs for a ranked league group. Mock variants (with `playerTag=#2PP`): `#2YYCYCC`/`1773032400` (current), `#2PGCG0J`/`1772427600` (previous). Note: upstream intermittently returns HTTP 500 `unknownException` for older groups.',
      ),
    E.get('legacyList', '/leagues', {
      query: Paging,
      success: success(W.LeagueListResponse),
      error: errors,
    })
      .annotate(OpenApi.Deprecated, true)
      .annotate(OpenApi.Summary, 'List legacy leagues')
      .annotate(
        OpenApi.Description,
        'Deprecated: Supercell replaced Home Village trophy leagues with ranked league tiers (`/leaguetiers`), though this endpoint still returns HTTP 200 with the 23 legacy leagues on live servers.',
      ),
    E.get('legacy', '/leagues/:leagueId', {
      params: league,
      success: success(W.League),
      error: errors,
    })
      .annotate(OpenApi.Deprecated, true)
      .annotate(OpenApi.Summary, 'Get legacy league information')
      .annotate(
        OpenApi.Description,
        'Deprecated: Supercell replaced Home Village trophy leagues with ranked league tiers (`/leaguetiers/{leagueTierId}`), though this endpoint still returns HTTP 200 on live servers (e.g. `29000022` for Legend League).',
      ),
  );

export const Locations = G.make('locations')
  .annotate(
    OpenApi.Description,
    'Leaderboard locations and global or country rankings for clans, players, Builder Base, and Clan Capital.',
  )
  .add(
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
        'Get information about a specific location. Unknown location IDs return HTTP 400 (`badRequest`).',
      ),
    E.get('clans', '/locations/:locationId/rankings/clans', {
      params: rankingLocation,
      query: Paging,
      success: success(W.ClanRankingListResponse),
      error: errors,
    })
      .annotate(OpenApi.Summary, 'Get clan rankings for a location')
      .annotate(
        OpenApi.Description,
        'Get Home Village clan rankings for a specific location or `"global"`. Non-country region IDs return an empty list.',
      ),
    E.get('players', '/locations/:locationId/rankings/players', {
      params: rankingLocation,
      query: Paging,
      success: success(W.PlayerRankingListResponse),
      error: errors,
    })
      .annotate(OpenApi.Summary, 'Get player rankings for a location')
      .annotate(
        OpenApi.Description,
        'Get Home Village player rankings for a specific location or `"global"`. Non-country region IDs return an empty list.',
      ),
    E.get('builders', '/locations/:locationId/rankings/players-builder-base', {
      params: rankingLocation,
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
        'Get Builder Base player rankings for a specific location or `"global"`. Non-country region IDs return an empty list.',
      ),
    E.get(
      'builderClans',
      '/locations/:locationId/rankings/clans-builder-base',
      {
        params: rankingLocation,
        query: Paging,
        success: success(W.ClanBuilderBaseRankingListResponse),
        error: errors,
      },
    )
      .annotate(
        OpenApi.Summary,
        'Get Builder Base clan rankings for a location',
      )
      .annotate(
        OpenApi.Description,
        'Get Builder Base clan rankings for a specific location or `"global"`. Non-country region IDs return an empty list.',
      ),
    E.get('capitals', '/locations/:locationId/rankings/capitals', {
      params: rankingLocation,
      query: Paging,
      success: success(W.ClanCapitalRankingListResponse),
      error: errors,
    })
      .annotate(OpenApi.Summary, 'Get clan capital rankings for a location')
      .annotate(
        OpenApi.Description,
        'Get Clan Capital rankings for a specific location or `"global"`. Non-country region IDs return an empty list.',
      ),
  );

export const Labels = G.make('labels')
  .annotate(
    OpenApi.Description,
    'Official player and clan profile label catalogs.',
  )
  .add(
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

export const Goldpass = G.make('goldpass')
  .annotate(
    OpenApi.Description,
    'Current Gold Pass season start and end times.',
  )
  .add(
    E.get('current', '/goldpass/seasons/current', {
      success: success(W.GoldPassSeason),
      error: errors,
    })
      .annotate(OpenApi.Summary, 'Get current Gold Pass season')
      .annotate(
        OpenApi.Description,
        'Get start and end times for the current Gold Pass season.',
      ),
  );

const API_DESCRIPTION = [
  'Community-maintained Clash of Clans API wire specification and mock server (not affiliated with Supercell).',
  '',
  '### Using the mock server (`mock.clashk.ing`)',
  '- **Deterministic variants:** Use `#2PP` for the primary fixture, `#2PPP` for the second variant, and add trailing `P`s for additional variants (see individual endpoint descriptions). Unsupported tags return `400`.',
  '- **Simulate HTTP failures:** Pass header `x-clash-mock-response` with `maintenance`, `unavailable`, `rateLimited`, `notFound`, `forbidden`, `privateWarLog`, `invalidIp`, `invalidRequest`, `internalError`, or `notImplemented` to force that failure response on any route.',
].join('\n');

const BaseApi = HttpApi.make('ClashMockAPI')
  .add(Clans, Players, Leagues, Locations, Labels, Goldpass)
  .annotate(OpenApi.Title, 'Clash of Clans API (Wire Spec & Mock)')
  .annotate(OpenApi.Version, contractVersion)
  .annotate(OpenApi.Servers, [{ url: '/' }])
  .annotate(OpenApi.Description, API_DESCRIPTION)
  .annotate(OpenApi.Override, {
    externalDocs: {
      description: 'Official Supercell Clash of Clans Developer Portal',
      url: 'https://developer.clashofclans.com',
    },
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
