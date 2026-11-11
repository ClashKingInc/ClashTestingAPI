// Exercise every declared operation against the actual deployment bundle.
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { Schema } from 'effect';
import { Miniflare } from 'miniflare';
import { Api } from '../packages/clash-contract/src/http-api.js';
import {
  ClanWar,
  ClientErrorResponse,
} from '../packages/clash-contract/src/effect.js';
import {
  mockResponses,
  classifyClashResponse,
} from '../packages/clash-contract/src/outcomes.js';
const fixture = (p: string) =>
  JSON.parse(readFileSync('data/' + p + '.json', 'utf8')).body;
const player = fixture('players/player/FOUND');
const ids: Record<string, string> = {
  locationId: String(fixture('locations/LISTLOCATIONS').items[0].id),
  leagueTierId: String(fixture('leagues/LISTLEAGUETIERS').items[0].id),
  seasonId: fixture('leagues/LISTLEAGUESEASONS').items[0].id,
  leagueGroupTag: player.currentLeagueGroupTag,
  leagueSeasonId: String(player.currentLeagueSeasonId),
};
const runtime = new Miniflare({
  workers: [
    {
      config: {
        type: 'worker',
        name: 'contract-verification',
        compatibilityDate: '2026-09-06',
        manifest: {
          mainModule: 'worker.js',
          modulesRoot: resolve('dist'),
          modules: {
            'worker.js': {
              type: 'esm',
              contents: readFileSync('dist/worker.js', 'utf8'),
            },
          },
        },
      },
    },
  ],
});
const results: unknown[] = [];
try {
  await runtime.ready;
  for (const group of Object.values(Api.groups))
    for (const endpoint of Object.values(group.endpoints)) {
      const path = endpoint.path.replace(
        /:(\w+)/g,
        (_: string, name: string) => {
          let value = ids[name] ?? '#2PP';
          if (name === 'leagueId')
            value = String(
              endpoint.path.startsWith('/builderbase')
                ? fixture('leagues/LISTBUILDERLEAGUES').items[0].id
                : endpoint.path.startsWith('/capital')
                  ? fixture('leagues/LISTCAPITALLEAGUES').items[0].id
                  : endpoint.path.startsWith('/war')
                    ? fixture('leagues/LISTWARELEAGUES').items[0].id
                    : 29000022,
            );
          return encodeURIComponent(value);
        },
      );
      const url = new URL(path, 'https://mock.test');
      if (group.identifier === 'leagues' && endpoint.identifier === 'group')
        url.searchParams.set('playerTag', '#2PP');
      const response = await runtime.dispatchFetch(url.href, {
        method: endpoint.method,
        ...(endpoint.method === 'POST'
          ? {
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify({ token: 'TOKEN' }),
            }
          : {}),
      });
      const body = await response.json();
      const legacy = endpoint.identifier.startsWith('legacy');
      assert.equal(
        response.status,
        legacy ? 501 : 200,
        `${endpoint.method} ${path}: ${JSON.stringify(body)}`,
      );
      if (response.ok) {
        const success = [...endpoint.success][0] as unknown as {
          schema: Schema.Codec<unknown>;
        };
        Schema.decodeUnknownSync(success.schema)(body);
      } else Schema.decodeUnknownSync(ClientErrorResponse)(body);
      results.push({
        operation: group.identifier + '.' + endpoint.identifier,
        path,
        status: response.status,
      });
      for (const [scenario, expected] of Object.entries(mockResponses)) {
        const reply = await runtime.dispatchFetch(url.href, {
          method: endpoint.method,
          headers: { 'x-clash-mock-response': scenario },
        });
        const error = await reply.json();
        assert.equal(reply.status, expected.status, scenario);
        Schema.decodeUnknownSync(ClientErrorResponse)(error);
        const outcome = classifyClashResponse({
          path,
          status: reply.status,
          body: error,
          retryAfter: reply.headers.get('retry-after'),
        });
        if (scenario === 'maintenance')
          assert.equal(outcome.kind, 'maintenance');
        if (scenario === 'unavailable')
          assert.equal(outcome.kind, 'unavailable');
        if (scenario === 'rateLimited')
          assert.equal(outcome.retryAfterSeconds, 3);
        if (scenario === 'invalidIp') assert.equal(outcome.kind, 'forbidden');
        results.push({
          operation: group.identifier + '.' + endpoint.identifier,
          scenario,
          status: reply.status,
          outcome,
        });
      }
    }
  for (const [path, status, kind] of [
    ['/clans/%232PPPPPP/currentwar', 403, 'privateWarLog'],
    ['/clans/%232PPP/warlog', 403, 'privateWarLog'],
    ['/clans/%232PPPP/currentwar/leaguegroup', 404, 'noCurrentEvent'],
    ['/players/%232PPP', 404, 'notFound'],
  ] as const) {
    const r = await runtime.dispatchFetch('https://mock.test' + path);
    const body = await r.json();
    assert.equal(r.status, status, path);
    Schema.decodeUnknownSync(ClientErrorResponse)(body);
    assert.equal(
      classifyClashResponse({ path, status: r.status, body }).kind,
      kind,
    );
    results.push({ path, status, kind });
  }
  for (const [tag, state] of [
    ['#2PPP', 'preparation'],
    ['#2PPPP', 'warEnded'],
    ['#2PPPPP', 'notInWar'],
  ] as const) {
    const response = await runtime.dispatchFetch(
      'https://mock.test/clans/' + encodeURIComponent(tag) + '/currentwar',
    );
    assert.equal(response.status, 200);
    const body = Schema.decodeUnknownSync(ClanWar)(await response.json());
    assert.equal(body.state, state);
    results.push({ state, status: 200 });
  }
  writeFileSync(
    '/tmp/ck-contract-http-verification.json',
    JSON.stringify(results, null, 2),
  );
  console.log(
    `PASS: ${results.length} real Worker HTTP paths, including all declared operations and privacy/no-current-event outcomes.`,
  );
} finally {
  await runtime.dispose();
}
