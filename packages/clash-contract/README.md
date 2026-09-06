# @clashking/clash-contract

Effect schemas and TypeScript types for Clash of Clans API responses. Validate player, clan, war, and other JSON data without writing the same models yourself. The package works independently of the mock API.

## Install

Download the package `.tgz` from [GitHub Releases](https://github.com/ClashKingInc/ClashTestingAPI/releases) and install it, or use the asset's download URL directly:

```bash
npm install effect@4.0.0-rc.112 /path/to/clashking-clash-contract-VERSION.tgz
```

The package currently requires exactly `effect@4.0.0-rc.112`. It is distributed through GitHub Releases rather than the npm registry. To build a local archive, run `npm run pack:contract` from the MockAPI repository root.

Commit the dependency and lockfile together. Updates are manual: choose a newer release, install its archive, and run your application's checks.

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
const readClan = (json: unknown): ClanWire =>
  Schema.decodeUnknownSync(Clan)(json);
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

Nested schemas are exported separately. Use their `.fields` to build smaller schemas or extend them with your own fields. For an array of nested objects, import the named item schema to build your own array schema.

Schemas preserve extra fields. They do not convert values or fill in missing ones. `Schema.optionalKey` allows an absent key; a union with `Schema.Null` separately permits a present null. Effect-inferred types are readonly.

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
const getClanName = (json: unknown) => {
  if (validators.Clan(json)) return json.name;
  return undefined;
};
```

`parse(name, value)` validates and returns the original value, throwing `TypeError` on failure. Validators are type guards with an `errors` diagnostic property; it contains validation details. Prefer direct decoding when already using Effect. `Schemas` provides response types such as `Schemas['Clan']`; `paths`, `operations`, and `components` derive from OpenAPI. The document is exported at `@clashking/clash-contract/openapi.json`.

## Validate inside an Effect program

Use `Schema.decodeUnknownEffect` to handle validation failures through Effect:

```ts
import { Effect, Schema } from 'effect';
import { Clan } from '@clashking/clash-contract/effect';

const clanName = (json: unknown) =>
  Effect.gen(function* () {
    const clan = yield* Schema.decodeUnknownEffect(Clan)(json);
    return clan.name;
  });
```
