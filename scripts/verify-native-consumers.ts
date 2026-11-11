import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { Miniflare } from 'miniflare';
const runtime = new Miniflare({
  workers: [
    {
      config: {
        type: 'worker',
        name: 'sdk-provider',
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
await runtime.ready;
const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url!, 'https://mock.test');
    const prefix = /^\/scenario\/([^/]+)(\/.*)$/.exec(url.pathname);
    const scenario = prefix?.[1] ?? url.searchParams.get('scenario');
    if (prefix) url.pathname = prefix[2];
    url.searchParams.delete('scenario');
    const response = await runtime.dispatchFetch(url.href, {
      headers: { 'x-clash-mock-response': scenario ?? 'unavailable' },
    });
    res.writeHead(response.status, Object.fromEntries(response.headers));
    res.end(Buffer.from(await response.arrayBuffer()));
  } catch {
    res.writeHead(500);
    res.end();
  }
});
await new Promise<void>((r) => server.listen(0, '127.0.0.1', r));
const address = server.address();
if (!address || typeof address === 'string') throw Error('No loopback port');
const env = {
  ...process.env,
  CLASH_CONTRACT_TEST_ORIGIN: `http://127.0.0.1:${address.port}`,
};
try {
  for (const [cmd, args, cwd] of [
    [
      process.env.CLASH_CONTRACT_GO_BINARY!,
      [],
      process.env.CLASH_CONTRACT_GO_REPO!,
    ],
    [
      process.env.CLASH_CONTRACT_PYTHON!,
      ['scripts/verify_contract_http.py'],
      process.env.CLASH_CONTRACT_PYTHON_REPO!,
    ],
  ] as const) {
    await new Promise<void>((yes, no) => {
      const child = spawn(cmd, [...args], {
        cwd,
        env: { ...env, PYTHONPATH: cwd },
        stdio: 'inherit',
      });
      child.on('error', no);
      child.on('exit', (code) =>
        code === 0 ? yes() : no(Error(`${cmd}: ${code}`)),
      );
    });
  }
} finally {
  await new Promise<void>((r) => server.close(() => r()));
  await runtime.dispose();
}
