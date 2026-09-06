import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import contract from '../packages/clash-contract/package.json';

const root = process.cwd();
const directory = mkdtempSync(join(tmpdir(), 'mockapi-package-'));
try {
  execFileSync(
    'npm',
    [
      'pack',
      '-w',
      '@clashking/clash-contract',
      '--pack-destination',
      directory,
    ],
    { stdio: 'pipe' },
  );
  writeFileSync(
    join(directory, 'package.json'),
    JSON.stringify({
      name: 'clash-contract-smoke',
      private: true,
      type: 'module',
    }),
  );
  execFileSync(
    'npm',
    [
      'install',
      '--ignore-scripts',
      '--no-audit',
      '--no-fund',
      '--prefer-offline',
      join(directory, `clashking-clash-contract-${contract.version}.tgz`),
      `effect@${contract.peerDependencies.effect}`,
    ],
    { cwd: directory, stdio: 'pipe' },
  );
  const installed = JSON.parse(
    readFileSync(
      join(directory, 'node_modules/@clashking/clash-contract/package.json'),
      'utf8',
    ),
  );
  assert.equal(installed.version, contract.version);
  writeFileSync(
    join(directory, 'consumer.ts'),
    readFileSync('packages/clash-contract/test/types.ts'),
  );
  execFileSync(
    process.execPath,
    [
      resolve(root, 'node_modules/typescript/bin/tsc'),
      '--noEmit',
      '--strict',
      '--skipLibCheck',
      '--target',
      'ES2022',
      '--module',
      'NodeNext',
      '--moduleResolution',
      'NodeNext',
      'consumer.ts',
    ],
    { cwd: directory, stdio: 'pipe' },
  );
  writeFileSync(
    join(directory, 'clan.json'),
    readFileSync('data/clans/clans/CLAN.json'),
  );
  writeFileSync(
    join(directory, 'consumer.mjs'),
    `
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { Schema } from 'effect';
import { parse } from '@clashking/clash-contract';
import { Clan, ClanCapital } from '@clashking/clash-contract/effect';
const body=JSON.parse(fs.readFileSync(new URL('./clan.json',import.meta.url))).body;
body.extra={nested:true};
assert.equal(parse('Clan',body),body);
assert.deepEqual(Schema.decodeUnknownSync(Clan)(body),body);
assert.equal(Schema.decodeUnknownSync(ClanCapital.fields.clanGoldSinkTotal)(9876543210),9876543210);
assert.throws(()=>parse('ClanCapital',{clanGoldSinkTotal:'wrong'}));
const files=fs.readdirSync(new URL('./node_modules/@clashking/clash-contract/dist/',import.meta.url));
assert.ok(!files.includes('validators.js'));
console.log('Installed package exports, runtime validation, composition, and recursive declarations: passed');
`,
  );
  execFileSync(process.execPath, ['consumer.mjs'], {
    cwd: directory,
    stdio: 'inherit',
  });
} finally {
  rmSync(directory, { recursive: true, force: true });
}
