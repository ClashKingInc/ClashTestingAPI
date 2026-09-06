import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { Schema } from 'effect';
import { Miniflare } from 'miniflare';
import { parse } from 'jsonc-parser';
const config = Schema.decodeUnknownSync(
  Schema.Struct({ compatibility_date: Schema.String }),
)(parse(readFileSync('wrangler.jsonc', 'utf8')));

// Start independent workerd isolates against the actual deployment bundle,
// rather than Vite's transformed modules or an already initialized test Worker.
for (const abortFirst of [false, true]) {
  const runtime = new Miniflare({
    workers: [
      {
        config: {
          type: 'worker',
          name: 'mock-smoke',
          compatibilityDate: config.compatibility_date,
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
  try {
    await runtime.ready;
    const started = performance.now();
    const controller = new AbortController();
    const first = runtime.dispatchFetch('https://mock.test/clans/%232PP', {
      signal: controller.signal,
    });
    const firstOutcome = first.then(
      async (response) => ({
        status: response.status,
        body: await response.json(),
      }),
      (error) => ({ error }),
    );
    const requests = Promise.all(
      ['/players/%232PP', '/locations?limit=2', '/openapi.json'].map(
        async (path) => {
          const response = await runtime.dispatchFetch(
            `https://mock.test${path}`,
            { signal: AbortSignal.timeout(15000) },
          );
          assert.equal(response.status, 200, path);
          await response.json();
        },
      ),
    );
    if (abortFirst) controller.abort();
    await requests;
    const result = await firstOutcome;
    if (!abortFirst) assert.ok('status' in result && result.status === 200);
    const warm = await runtime.dispatchFetch('https://mock.test/clans/%232PP', {
      signal: AbortSignal.timeout(15000),
    });
    assert.equal(warm.status, 200);
    assert.equal(((await warm.json()) as { tag: string }).tag, '#2PP');
    console.log(
      `Fresh Worker ${abortFirst ? 'with first request aborted' : 'with concurrent first requests'}: passed (${Math.round(performance.now() - started)} ms locally)`,
    );
  } finally {
    await runtime.dispose();
  }
}
