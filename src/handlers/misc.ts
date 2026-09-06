import { HttpApiBuilder } from 'effect/unstable/httpapi';
import * as W from '../../packages/clash-contract/src/effect.js';
import { Api } from '../api/api.js';
import { reply, run } from '../fixtures/repository.js';
export const LabelsLive = HttpApiBuilder.group(Api, 'labels', (h) =>
  h
    .handle('players', ({ query }) =>
      run(() =>
        reply('labels/players/PLAYERLABELS.json', W.LabelListResponse, query),
      ),
    )
    .handle('clans', ({ query }) =>
      run(() =>
        reply('labels/clans/CLANLABELS.json', W.LabelListResponse, query),
      ),
    ),
);
export const GoldpassLive = HttpApiBuilder.group(Api, 'goldpass', (h) =>
  h.handle('current', () =>
    run(() => reply('goldpass/GOLDPASS.json', W.GoldPassSeason)),
  ),
);
