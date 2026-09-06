import { HttpApiBuilder } from 'effect/unstable/httpapi';
import * as W from '../../packages/clash-contract/src/effect.js';
import { Api } from '../api/api.js';
import {
  checkPaging,
  fail,
  reply,
  run,
  variant,
} from '../fixtures/repository.js';

export const ClansLive = HttpApiBuilder.group(Api, 'clans', (handlers) =>
  handlers
    .handle('search', ({ query }) =>
      run(() => {
        if (
          query.minMembers !== undefined &&
          query.maxMembers !== undefined &&
          query.minMembers > query.maxMembers
        )
          fail(400, 'badRequest', 'minMembers must not exceed maxMembers.');
        const labels = query.labelIds
          ?.split(',')
          .map((x) => x.trim())
          .filter(Boolean);
        if (labels?.some((x) => !/^\d+$/.test(x)))
          fail(
            400,
            'badRequest',
            'labelIds must be comma-separated numeric IDs.',
          );
        return reply(
          'clans/search/CLANS_FOUND.json',
          W.ClanSearchResponse,
          query,
          (body) => ({
            ...body,
            items: body.items.filter(
              (c) =>
                (query.name === undefined ||
                  c.name
                    .toLocaleLowerCase()
                    .includes(query.name.toLocaleLowerCase())) &&
                (!query.warFrequency ||
                  query.warFrequency === 'any' ||
                  c.warFrequency === query.warFrequency) &&
                (query.locationId === undefined ||
                  c.location?.id === query.locationId) &&
                (query.minMembers === undefined ||
                  c.members >= query.minMembers) &&
                (query.maxMembers === undefined ||
                  c.members <= query.maxMembers) &&
                (query.minClanPoints === undefined ||
                  c.clanPoints >= query.minClanPoints) &&
                (query.minClanLevel === undefined ||
                  c.clanLevel >= query.minClanLevel) &&
                (!labels?.length ||
                  labels.every((id) =>
                    c.labels?.some((label) => String(label.id) === id),
                  )),
            ),
          }),
        );
      }),
    )
    .handle('profile', ({ params }) =>
      run(() =>
        reply(
          `clans/clans/${variant(params.clanTag, ['CLAN', 'CLAN_NO_CAPITAL_DISTRICTS'])}.json`,
          W.Clan,
        ),
      ),
    )
    .handle('members', ({ params, query }) =>
      run(() => {
        checkPaging(query);
        variant(params.clanTag, ['MEMBERS']);
        return reply(
          'clans/members/MEMBERS.json',
          W.ClanMembersResponse,
          query,
        );
      }),
    )
    .handle('war', ({ params }) =>
      run(() =>
        reply(
          `clans/currentwar/${variant(params.clanTag, ['INWAR', 'PREPARATION', 'ENDED', 'NOTINWAR', 'ACCESSDENIED'])}.json`,
          W.ClanWar,
        ),
      ),
    )
    .handle('warlog', ({ params, query }) =>
      run(() => {
        checkPaging(query);
        return reply(
          `clans/warlog/${variant(params.clanTag, ['WARLOG', 'ACCESSDENIED'])}.json`,
          W.ClanWarLogResponse,
          query,
        );
      }),
    )
    .handle('cwl', ({ params }) =>
      run(() =>
        reply(
          `clans/leaguegroup/${variant(params.clanTag, ['INWAR', 'ENDED', 'NOTFOUND'])}.json`,
          W.ClanWarLeagueGroup,
        ),
      ),
    )
    .handle('leagueWar', ({ params }) =>
      run(() =>
        reply(
          `clans/clanwarleagues/${variant(params.warTag, ['INWAR', 'PREPARATION', 'ENDED'])}.json`,
          W.ClanWar,
        ),
      ),
    )
    .handle('raids', ({ params, query }) =>
      run(() => {
        checkPaging(query);
        variant(params.clanTag, ['RAIDS']);
        return reply(
          'clans/capitalraidseasons/CAPITALRAIDSEASON.json',
          W.CapitalRaidSeasonsResponse,
          query,
        );
      }),
    ),
);
