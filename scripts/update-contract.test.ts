import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { test } from 'node:test';

const script = resolve('scripts/update-contract.ts');
const url =
  'https://github.com/ClashKingInc/ClashTestingAPI/releases/download/v0.2.0/clashking-clash-contract-0.2.0.tgz';
const release = {
  tag_name: 'v0.2.0',
  draft: false,
  prerelease: false,
  assets: [
    {
      name: 'clashking-clash-contract-0.2.0.tgz',
      state: 'uploaded',
      browser_download_url: url,
    },
  ],
};

for (const scenario of [
  'ready',
  'pending',
  'absent',
  'invalid-url',
  'unchanged',
]) {
  test(`contract updater: ${scenario}`, () => {
    const dir = mkdtempSync(join(tmpdir(), 'contract-updater-'));
    try {
      mkdirSync(join(dir, 'packages/consumer'), { recursive: true });
      mkdirSync(join(dir, 'bin'));
      const initial = scenario === 'unchanged' ? url : 'file:vendor/old.tgz';
      const manifest = {
        dependencies: {
          '@clashking/clash-contract': initial,
          effect: '4.0.0-rc.112',
        },
      };
      for (const file of ['package.json', 'packages/consumer/package.json']) {
        writeFileSync(join(dir, file), JSON.stringify(manifest));
      }
      execFileSync('git', ['init', '-q'], { cwd: dir });
      execFileSync('git', ['add', '.'], { cwd: dir });
      // Avoid network and package lifecycle execution; verify the exact npm invocation.
      writeFileSync(
        join(dir, 'bin/npm'),
        '#!/bin/sh\nprintf "%s\\n" "$@" > npm-arguments\n',
        { mode: 0o755 },
      );
      const body = structuredClone(release);
      if (scenario === 'pending') body.assets = [];
      if (scenario === 'invalid-url')
        body.assets[0].browser_download_url = 'https://example.com/wrong.tgz';
      writeFileSync(
        join(dir, 'fetch.mjs'),
        `globalThis.fetch = async () => new Response(${JSON.stringify(JSON.stringify(body))}, {status: ${scenario === 'absent' ? 404 : 200}});`,
      );
      const result = spawnSync(
        process.execPath,
        ['--import', join(dir, 'fetch.mjs'), script],
        {
          cwd: dir,
          env: {
            ...process.env,
            PATH: `${join(dir, 'bin')}:${process.env.PATH}`,
            GITHUB_OUTPUT: join(dir, 'output'),
          },
          encoding: 'utf8',
        },
      );
      assert.equal(
        result.status,
        scenario === 'invalid-url' ? 1 : 0,
        result.stderr,
      );
      for (const file of ['package.json', 'packages/consumer/package.json']) {
        const updated = JSON.parse(readFileSync(join(dir, file), 'utf8'));
        assert.equal(
          updated.dependencies['@clashking/clash-contract'],
          scenario === 'ready' ? url : initial,
        );
        assert.equal(updated.dependencies.effect, '4.0.0-rc.112');
      }
      if (scenario === 'ready') {
        assert.equal(
          readFileSync(join(dir, 'output'), 'utf8'),
          'changed=true\n',
        );
        assert.equal(
          readFileSync(join(dir, 'npm-arguments'), 'utf8'),
          'install\n--package-lock-only\n--ignore-scripts\n--no-audit\n--no-fund\n',
        );
      }
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
}
