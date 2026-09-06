import fs from 'node:fs/promises';
import path from 'node:path';
import { OpenApi } from 'effect/unstable/httpapi';
import openapiTS, { astToString } from 'openapi-typescript';
import { Api } from '../src/api/api.js';

const check = process.argv.includes('--check');
async function output(file: string, content: string) {
  if (check) {
    if ((await fs.readFile(file, 'utf8').catch(() => '')) !== content)
      throw new Error(`Stale generated file: ${file}. Run npm run generate.`);
  } else {
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, content);
  }
}
const spec = OpenApi.fromApi(Api);
function canonical(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === 'object')
    return Object.fromEntries(
      Object.entries(value)
        .sort(([a], [b]) => a.localeCompare(b, 'en'))
        .map(([key, v]) => [key, canonical(v)]),
    );
  return value;
}
await output(
  'packages/clash-contract/openapi.json',
  JSON.stringify(canonical(spec), null, 2) + '\n',
);
await output(
  'packages/clash-contract/src/schema.ts',
  astToString(
    await openapiTS(JSON.stringify(spec), { defaultNonNullable: false }),
  ),
);
const files = (await fs.readdir('data', { recursive: true }))
  .filter((file) => file.endsWith('.json'))
  .sort();
const imports = files.map(
  (file, i) =>
    `import fixture${i} from '../../data/${file.replaceAll('\\', '/')}';`,
);
const entries = files.map(
  (file, i) => `${JSON.stringify(file.replaceAll('\\', '/'))}: fixture${i}`,
);
await output(
  'src/fixtures/data.ts',
  `// Generated fixture imports. Run npm run generate after adding fixture files.\nimport type { Wrapped } from './repository.js';\n${imports.join('\n')}\nexport const fixtures: Readonly<Record<string,Wrapped>> = {${entries.join(',\n')}};\n`,
);
console.log(
  check
    ? 'Generated artifacts are current.'
    : 'Generated OpenAPI, wire types, and fixture imports from TypeScript sources.',
);
