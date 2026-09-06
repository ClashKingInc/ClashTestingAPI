# MockAPI

A deterministic Clash of Clans mock API built with TypeScript and Effect 4, running on Cloudflare Workers. JSON fixtures supply the data; Effect schemas validate it and define the published contract. Scalar documentation is served at `/`, and OpenAPI 3.1 at `/openapi.json`.

The existing public instance is [api.clashapi.dev](https://api.clashapi.dev). This change does not deploy or replace that instance. This community project is not affiliated with Supercell.

## Run locally

Use Node 24 or newer. No Python, database, API key, or Cloudflare login is needed locally.

```bash
npm ci
npm run dev
```

Wrangler serves the Worker at `http://localhost:8787`. Documentation requests follow the current origin.

```bash
curl http://localhost:8787/players/%232PP
curl 'http://localhost:8787/clans?name=test&limit=1'
curl http://localhost:8787/openapi.json
```

## Mock behavior

Encode `#` as `%23` in URLs. Tags accept lowercase input; `#2PP` selects the primary fixture, and each additional `P` selects the next variant. Other tags and unsupported variants return `400`.

| Endpoint                                    | Variants in order, starting with `#2PP`               |
| ------------------------------------------- | ----------------------------------------------------- |
| `/clans/{clanTag}`                          | Full clan, clan without capital districts             |
| `/clans/{clanTag}/currentwar`               | In war, preparation, ended, not in war, access denied |
| `/clans/{clanTag}/warlog`                   | War log, access denied                                |
| `/clans/{clanTag}/currentwar/leaguegroup`   | In war, ended, not found                              |
| `/clanwarleagues/wars/{warTag}`             | In war, preparation, ended                            |
| `/players/{playerTag}`                      | Player, not found                                     |
| `/players/{playerTag}/verifytoken`          | Token check, player not found                         |
| Other endpoints taking a player or clan tag | Primary fixture only                                  |

Token verification accepts `{"token":"TOKEN"}`. The literal `TOKEN` succeeds; other strings return the invalid-token fixture. No real token is verified.

Lists support a positive integer `limit` and either `after` or `before`, using numeric offsets. Clan search filters on `name` (case-insensitive substring), `warFrequency` (`any` disables this filter), `locationId`, `minMembers`, `maxMembers`, `minClanPoints`, `minClanLevel`, and comma-separated `labelIds`. Every requested label must match. Filtering happens before pagination. These are deterministic mock rules, not a claim that Supercell uses identical matching logic.

Locations include country and region fixtures plus `global` rankings. League groups use the player's current or previous group and season identifiers. Legacy `/leagues` and `/leagues/{leagueId}` retain their `501` missing-mock response and stay excluded from OpenAPI.

## Change the API

- [`packages/clash-contract/src/effect.ts`](packages/clash-contract/src/effect.ts) owns named wire schemas, inferred types, validation, and metadata.
- [`src/api`](src/api) owns Effect endpoint declarations, request schemas, responses, and documentation annotations.
- [`src/handlers`](src/handlers) contains typed Effect handlers that select and filter fixtures.
- [`data`](data) contains wrapped JSON fixtures with `body`, `response_code`, and `headers`.

After changing schemas, endpoints, or the fixture inventory:

```bash
npm run generate
npm test
npm run test:bundle
```

Generation derives OpenAPI and interoperability types from Effect and refreshes static fixture imports. Map new fixture categories in [`scripts/fixture_contracts.json`](scripts/fixture_contracts.json), so the contract suite validates them. Do not edit `src/fixtures/data.ts`, `packages/clash-contract/openapi.json`, or `packages/clash-contract/src/schema.ts` directly. Fixtures are bundled, so no runtime filesystem or storage bindings are needed.

Fixture decoding is lazy and cached per isolate. Decoded fixtures are deeply frozen; filtering, paging, and location rewriting produce separate responses. Validation does not coerce values, insert missing keys, or discard extra fields. Invalid fixture data fails with a safe `500`.

## Validation and packaging

```bash
npm run format:check
npm run check:generated
npm test
npm run test:bundle
npm run test:package
npm run pack:contract
```

Tests validate all 61 fixtures, emitted package declarations and schema composition, 446 captured Python responses, request errors, filtering, request isolation, and served/exported OpenAPI equality. Bundle tests start fresh workerd isolates and cover concurrent first requests and cancellation. Package tests install a tarball in a temporary consumer. CI runs these checks without Cloudflare credentials; it does not deploy or publish.

The shared [`@clashking/clash-contract`](packages/clash-contract/README.md) package is version `0.2.0`. Applications can import these schemas; MockAPI never calls ClashKing API. See the [migration notes](docs/typescript-migration.md) for intentional differences, evidence limits, and downstream recommendations.

## Deployment

[`wrangler.jsonc`](wrangler.jsonc) defines the main Worker and a separate staging environment. No Node compatibility flag or storage binding is required. Deployment is separate from building:

```bash
npm run build          # Dry run only; writes dist/worker.js
npm run deploy:staging # Publishes staging with your Cloudflare credentials
npm run deploy         # Publishes the main Worker with your Cloudflare credentials
```

Account selection, custom domains, and production cutover must be configured for the intended Cloudflare account. They are not inferred from the existing public URL.

## License

Apache 2.0. See [LICENSE](LICENSE).
