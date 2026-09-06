import { HttpApiBuilder } from 'effect/unstable/httpapi';
import * as W from '../../packages/clash-contract/src/effect.js';
import { Api } from '../api/api.js';
import { reply, run, variant } from '../fixtures/repository.js';
export const PlayersLive = HttpApiBuilder.group(Api, 'players', (handlers) =>
  handlers
    .handle('profile', ({ params }) =>
      run(() =>
        reply(
          `players/player/${variant(params.playerTag, ['FOUND', 'NOTFOUND'])}.json`,
          W.Player,
        ),
      ),
    )
    .handle('battles', ({ params }) =>
      run(() => {
        variant(params.playerTag, ['LOG']);
        return reply('players/battlelog/LOG.json', W.BattleLogResponse);
      }),
    )
    .handle('history', ({ params }) =>
      run(() => {
        variant(params.playerTag, ['LOG']);
        return reply('players/leaguehistory/LOG.json', W.LeagueHistoryResponse);
      }),
    )
    .handle('verify', ({ params, payload }) =>
      run(() => {
        const selected = variant(params.playerTag, ['VALID', 'NOTFOUND']);
        const name =
          selected === 'NOTFOUND'
            ? selected
            : payload.token === 'TOKEN'
              ? 'VALID'
              : 'INVALID';
        return reply(`players/verifytoken/${name}.json`, W.VerifyTokenResponse);
      }),
    ),
);
