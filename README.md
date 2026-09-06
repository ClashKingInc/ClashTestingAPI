# Clash of Clans Mock API

Build and test Clash of Clans integrations with sample API responses, or use the included Effect schemas to validate JSON in your own TypeScript project.

The mock API returns saved examples of players, clans, wars, and rankings. It doesn't fetch live game data or require a Supercell API key. This community project is not affiliated with Supercell.

## Run the mock API

Install Node.js 24 or newer, then run:

```bash
npm ci
npm run dev
```

Open **[localhost:8787](http://localhost:8787)** for interactive Scalar documentation, where you can browse endpoints and try requests. The OpenAPI document is available at [`/openapi.json`](http://localhost:8787/openapi.json).

```bash
# Get a sample player
curl http://localhost:8787/players/%232PP

# Search sample clans
curl 'http://localhost:8787/clans?name=test&limit=1'
```

Point your application's API base URL at `http://localhost:8787` to use these responses during development.

## Try different responses

Use `#2PP` for the first example, `#2PPP` for the second, and add another `P` for each additional example. In a URL, write `#` as `%23`.

| Request                                   | Examples, starting with `#2PP`                        |
| ----------------------------------------- | ----------------------------------------------------- |
| `/players/{playerTag}`                    | Player, player not found                              |
| `/clans/{clanTag}`                        | Full clan, clan without capital districts             |
| `/clans/{clanTag}/currentwar`             | In war, preparation, ended, not in war, access denied |
| `/clans/{clanTag}/warlog`                 | War log, access denied                                |
| `/clans/{clanTag}/currentwar/leaguegroup` | In war, ended, not found                              |
| `/clanwarleagues/wars/{warTag}`           | In war, preparation, ended                            |

For example, `/clans/%232PPP/currentwar` returns a war in preparation. Other tag-based endpoints generally use `#2PP`; unsupported tags return `400`.

Lists support `limit` and either `after` or `before`, using numeric offsets. Clan search supports filters such as name, location, member count, and labels; see the interactive docs for the full list. Results come from the saved examples, so they won't match a live game search.

To try player token verification, send `POST /players/%232PP/verifytoken` with `{"token":"TOKEN"}`. The literal `TOKEN` succeeds; other strings return the invalid-token example.

## Use the Effect schemas

The `@clashking/clash-contract` package provides schemas and TypeScript types for Clash of Clans responses. Use it independently of the mock server to validate JSON from an API, a file, or your own test data.

Download a package `.tgz` from [GitHub Releases](https://github.com/ClashKingInc/ClashTestingAPI/releases), then install it alongside the required Effect version:

```bash
npm install effect@4.0.0-rc.112 /path/to/clashking-clash-contract-VERSION.tgz
```

You can also pass the release asset's download URL directly to `npm install`. If no release is available yet, run `npm run pack:contract` in this repository to build the archive locally. Commit the dependency and lockfile together; update them when you choose to adopt a newer release.

```ts
import { Schema } from 'effect';
import { Player } from '@clashking/clash-contract/effect';

type PlayerData = typeof Player.Type;

const response = await fetch('http://localhost:8787/players/%232PP');
if (!response.ok) throw new Error(`Request failed: ${response.status}`);

const player: PlayerData = Schema.decodeUnknownSync(Player)(
  await response.json(),
);
console.log(player.name, player.townHallLevel);
```

Decoding checks that the JSON matches the schema and throws if it doesn't. It preserves extra fields and doesn't convert values or fill in missing ones.

### Validate inside an Effect program

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

### Reuse schema fields

Nested schemas are exported separately. Use `.fields` to select fields or extend a schema with your own data:

```ts
import { Schema } from 'effect';
import { ClanCapital } from '@clashking/clash-contract/effect';

const CapitalSummary = Schema.Struct({
  gold: ClanCapital.fields.clanGoldSinkTotal,
});

const SavedCapital = Schema.Struct({
  ...ClanCapital.fields,
  savedAt: Schema.String,
});

type SavedCapitalData = typeof SavedCapital.Type;
```

For an array of nested objects, use `Schema.Array` with the exported item schema. Inferred properties are readonly. `Schema.optionalKey` allows a missing field; allowing `null` is a separate choice in the schema.

JSON numbers remain JavaScript numbers, including fields marked `int64`. Values above `Number.MAX_SAFE_INTEGER` cannot be represented exactly.

### Simple validation helpers

If you just want a throwing validator or a type guard:

```ts
import { parse, validators } from '@clashking/clash-contract';

const capital = parse('ClanCapital', { clanGoldSinkTotal: 9876543210 });

const getClanName = (json: unknown) => {
  if (validators.Clan(json)) return json.name;
  return undefined;
};
```

`parse` returns the original value or throws `TypeError`. Type guards return a boolean and expose validation details through their `errors` property. These helpers also require Effect.

### Types and OpenAPI

```ts
import type { Schemas } from '@clashking/clash-contract';

type ClanData = Schemas['Clan'];
```

The package also exports `paths`, `operations`, and `components` types generated from OpenAPI. The document itself is available at `@clashking/clash-contract/openapi.json` for documentation and client tooling.

## Contributing

Sample responses live in [`data`](data), schemas in [`packages/clash-contract/src/effect.ts`](packages/clash-contract/src/effect.ts), and endpoints in [`src/api`](src/api).

After making changes, run `npm run generate` and `npm run check`. See the [migration notes](docs/typescript-migration.md) for differences from the Python version.

## License

[Apache 2.0](LICENSE).
