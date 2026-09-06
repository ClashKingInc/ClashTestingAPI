import { HttpApiBuilder } from 'effect/unstable/httpapi';
import * as W from '../../packages/clash-contract/src/effect.js';
import { Api } from '../api/api.js';
import {
  badFixture,
  checkPaging,
  fail,
  item,
  load,
  normalizeTag,
  reply,
  run,
  variant,
} from '../fixtures/repository.js';
export const LeaguesLive = HttpApiBuilder.group(Api, 'leagues', (h) =>
  h
    .handle('tiers', ({ query }) =>
      run(() =>
        reply('leagues/LISTLEAGUETIERS.json', W.LeagueTierListResponse, query),
      ),
    )
    .handle('tier', ({ params }) =>
      run(() =>
        item(
          'leagues/LISTLEAGUETIERS.json',
          W.LeagueTierListResponse,
          params.leagueTierId,
          'leagues/leaguetier/BADREQUEST.json',
        ),
      ),
    )
    .handle('capitals', ({ query }) =>
      run(() =>
        reply(
          'leagues/LISTCAPITALLEAGUES.json',
          W.CapitalLeagueListResponse,
          query,
        ),
      ),
    )
    .handle('capital', ({ params }) =>
      run(() =>
        item(
          'leagues/LISTCAPITALLEAGUES.json',
          W.CapitalLeagueListResponse,
          params.leagueId,
          'leagues/capital-league/BADREQUEST.json',
        ),
      ),
    )
    .handle('builders', ({ query }) =>
      run(() =>
        reply(
          'leagues/LISTBUILDERLEAGUES.json',
          W.BuilderBaseLeagueListResponse,
          query,
        ),
      ),
    )
    .handle('builder', ({ params }) =>
      run(() =>
        item(
          'leagues/LISTBUILDERLEAGUES.json',
          W.BuilderBaseLeagueListResponse,
          params.leagueId,
          'leagues/builderbaseleague/BADREQUEST.json',
        ),
      ),
    )
    .handle('wars', ({ query }) =>
      run(() =>
        reply('leagues/LISTWARELEAGUES.json', W.WarLeagueListResponse, query),
      ),
    )
    .handle('war', ({ params }) =>
      run(() =>
        item(
          'leagues/LISTWARELEAGUES.json',
          W.WarLeagueListResponse,
          params.leagueId,
          'leagues/war-league/BADREQUEST.json',
        ),
      ),
    )
    .handle('seasons', ({ params, query }) =>
      run(() => {
        checkPaging(query);
        if (params.leagueId !== '29000022')
          return badFixture('leagues/league-season/BADREQUEST.json');
        return reply(
          'leagues/LISTLEAGUESEASONS.json',
          W.LeagueSeasonListResponse,
          query,
        );
      }),
    )
    .handle('season', ({ params, query }) =>
      run(() => {
        checkPaging(query);
        if (params.leagueId !== '29000022')
          return badFixture('leagues/league-season/BADREQUEST.json');
        if (
          !load(
            'leagues/LISTLEAGUESEASONS.json',
            W.LeagueSeasonListResponse,
          ).body.items.some((s) => s.id === params.seasonId)
        )
          fail(404, 'notFound', `Season '${params.seasonId}' was not found.`);
        return reply(
          'leagues/league-season/LEAGUESEASON.json',
          W.PlayerSeasonRankingListResponse,
          query,
        );
      }),
    )
    .handle('group', ({ params, query }) =>
      run(() => {
        variant(query.playerTag, ['FOUND']);
        const player = load('players/player/FOUND.json', W.Player).body;
        const tag = normalizeTag(params.leagueGroupTag);
        if (
          tag === normalizeTag(player.currentLeagueGroupTag ?? '') &&
          params.leagueSeasonId === String(player.currentLeagueSeasonId)
        )
          return reply('leagues/leaguegroup/CURRENT.json', W.LeagueGroup);
        if (
          tag === normalizeTag(player.previousLeagueGroupTag ?? '') &&
          params.leagueSeasonId === String(player.previousLeagueSeasonId)
        )
          return reply('leagues/leaguegroup/PREVIOUS.json', W.LeagueGroup);
        return fail(404, 'notFound', 'League group was not found.');
      }),
    )
    .handle('legacyList', ({ query }) =>
      run(() => {
        checkPaging(query);
        return badFixture('errors/MISSING_MOCK.json');
      }),
    )
    .handle('legacy', () => run(() => badFixture('errors/MISSING_MOCK.json'))),
);
