# @clashking/clash-contract

Version **0.2.0**. Hand-authored Effect 4 schemas define the Clash of Clans JSON wire contract. MockAPI's endpoints, OpenAPI, interoperability types, and validation helpers use these schemas. Python and OpenAPI-to-Effect generation are no longer involved.

## Install

The package requires exactly `effect@4.0.0-rc.112`, including for root validation helpers. This pins the prerelease API shared by the Worker and consumers.

```bash
npm install effect@4.0.0-rc.112 ./vendor/clashking-clash-contract-0.2.0.tgz
```

Build a tarball from the repository root with `npm run pack:contract`, copy it into the consumer's `vendor` directory, and commit its lockfile. A registry release can alternatively provide an exact `@clashking/clash-contract@0.2.0` dependency after publication. Creating this package or PR does not publish it. Never replace an already distributed version's contents; bump the version instead.

## Use Effect directly

```ts
import { Schema } from 'effect';
import {
  Clan,
  ClanCapital,
  ClanWarLeagueClan,
  ClanWarLeagueGroup,
} from '@clashking/clash-contract/effect';

type ClanWire = typeof Clan.Type;
const clan = Schema.decodeUnknownSync(Clan)(unknownJson);
const CapitalSummary = Schema.Struct({
  gold: ClanCapital.fields.clanGoldSinkTotal,
});

const ExtendedClan = Schema.Struct({
  ...ClanWarLeagueClan.fields,
  localId: Schema.String,
});
const ExtendedGroup = Schema.Struct({
  ...ClanWarLeagueGroup.fields,
  clans: Schema.optionalKey(Schema.Array(ExtendedClan)),
});
```

Each named wire object is exported separately with `.fields`. For an optional array, import its named item schema instead of reaching through the wrapper with `.value`. All exported schemas require `never` decoding and encoding services. Recursive equipment uses `Schema.suspend` with an explicit wire interface, preventing emitted declarations from widening to `any`.

Wire schemas retain JSON primitives and preserve extra fields through decoding and encoding. They do not coerce values or insert defaults. `Schema.optionalKey` allows an absent key; a union with `Schema.Null` separately permits a present null. Effect-inferred types are readonly.

`clanGoldSinkTotal` is a JSON integer annotated as `int64`, represented as a JavaScript number. Values beyond `Number.MAX_SAFE_INTEGER` cannot be represented exactly; the fixture value `9_876_543_210` is exact. This field is not converted to a string or bigint.

## Convenience exports

```ts
import { parse, validators } from '@clashking/clash-contract';
import type {
  Schemas,
  paths,
  operations,
  components,
} from '@clashking/clash-contract';

const capital = parse('ClanCapital', { clanGoldSinkTotal: 9876543210 });
if (validators.Clan(unknownJson)) {
  console.log(unknownJson.name);
}
```

`parse(name, value)` validates and returns the original value, throwing `TypeError` on failure. Validators are type guards with an `errors` diagnostic property; its contents are Effect diagnostics, not AJV error objects. Prefer direct decoding when already using Effect. `Schemas` infers types from editable schemas; `paths`, `operations`, and `components` derive from OpenAPI. The document is exported at `@clashking/clash-contract/openapi.json`.

## Author and release

Edit `src/effect.ts` and the repository's `src/api` declarations, then run `npm run generate`, `npm test`, and `npm run test:package` from the root. Never edit `src/schema.ts`, `openapi.json`, or build output. `npm run check:generated` checks freshness without changing files.

Version 0.2.0 changes ownership and makes Effect required for root validators. Obsolete FastAPI `ValidationError`/`HTTPValidationError` models and 422 declarations are removed. Generated operation IDs follow Effect's group/endpoint names. Consumers relying on AJV diagnostics or old operation IDs must update; tested endpoint JSON and wire variants remain covered.

ClashKing API can import this package. It does not own the definitions, and MockAPI has no network dependency on it. Go/Python clients do not need endpoint changes for this runtime migration. The repository's `docs/typescript-migration.md` records existing downstream gaps and the evidence behind field corrections.
