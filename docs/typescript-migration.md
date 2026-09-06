# Effect / Cloudflare migration

## Ownership and runtime

Effect schemas in `packages/clash-contract/src/effect.ts` are the editable contract. `HttpApi` declarations own methods, paths, request decoding, response encoding, and OpenAPI. JSON fixtures provide values that must pass those schemas; they do not generate schema rules. The real Clash API remains the authority for upstream behavior.

The Worker uses `HttpRouter.toWebHandler` and the portable HTTP service layer. There is no listening Node server, runtime filesystem, outbound API call, database, or storage binding. Scalar uses Effect's bundled integration, so its version follows Effect and the docs need no runtime CDN script fetch. Schema decoding stays synchronous and service-free; the HTTP runtime manages requests and cancellation.

The Python application, models, tests, exporter, uv files, Dockerfile, unused Python fixture stubs, AJV implementation, and Python-driven generation scripts are removed. Python SDK examples remain as TypeScript documentation annotations for clients that use Python.

## Deliberate differences

- All 35 endpoint registrations remain, including two legacy 501 routes hidden from OpenAPI. The 33 documented endpoints use unchanged fixture data. Bodies, statuses, and cache headers are covered by the historical baseline.
- Clan search previously ignored filters. It now filters the fixture before paging, with case-insensitive substring names and AND matching for requested labels. These are documented mock rules, not newly verified Supercell search semantics.
- Invalid typed query parameters and token payloads now return `400` with a Clash-style error, replacing FastAPI's `422` body. Unknown routes and method errors also use this envelope. Known paths retain `405`/`Allow`; trailing slashes redirect with `307`, preserving the query. Effect supports `HEAD` for GET routes.
- Paging rejects simultaneous `after` and `before` even if one is empty. Cursors accept nonnegative safe integer decimal offsets (optionally whitespace or `+`), rejecting Python-specific syntax such as underscores and numbers JavaScript cannot safely represent. Other baseline paging cases are unchanged.
- Invalid fixture data causes a safe `500`. Python's `JSONResponse` bypassed Pydantic response validation. Fixtures and transformed successful responses now pass Effect decoding/encoding, and cached data is frozen.
- OpenAPI uses relative server `/` instead of `MOCK_PROXY_URL`. Scalar retains the theme, layout, and SDK extensions; its built-in client selector replaces the hand-maintained client-hiding configuration. Operation IDs follow Effect naming. OpenAPI explicitly allows extra object properties, matching runtime preservation. Numeric query parameters derive their published integer type and constraints from the decoded Effect schema, including `limit >= 1`; URL serialization does not change them into string types in generated clients.

## Evidence and limitations

Before deleting Python, 446 HTTP responses were captured from the pre-rewrite working tree based on `a252bee`, including the contract corrections already discussed. `test/baseline/python-responses.json` stores request details, status, relevant headers, and a SHA-256 of canonical response JSON. Object keys are recursively sorted; array order matters. This is a historical regression oracle, not proof that Python was correct. Do not regenerate it from the Worker.

| Contract decision                                                      | Evidence used                                                                                                                                                                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Required capital gold total, optional districts                        | Existing full-clan and no-district fixtures; JSON integer with int64 metadata.                                                                                                                                               |
| Optional error message and war identity                                | Existing fixtures omit these keys. Missing clan identity occurs in NOTINWAR and four war-log opponents; this preserves fixture behavior and does not establish that missing identity is valid for active upstream war clans. |
| Optional completed-season previous rank                                | Season-ranking fixture; live rankings keep a separate required field.                                                                                                                                                        |
| Optional player league tier, required nullable clanless group identity | Previously requested downstream cases, covered by synthetic variants. Current local client parsers tolerate the missing/null values; these are not new live API captures.                                                    |
| Individual war attack destruction                                      | Original integer constraint retained: all 160 fixture attack objects use integers. A proposed fractional relaxation based only on SDK types was withdrawn; clan-wide aggregate destruction still allows fractions.           |
| Other battle-log/capital percentages                                   | Existing integer constraints retained; the war decision is not extrapolated without evidence.                                                                                                                                |

No authenticated live Clash API request was made. Resolve a newly disputed field with a dated raw upstream response, endpoint, status, and relevant context alongside a regression test. SDK code and official documentation support that investigation but do not override a conflicting real response. No additional unproven changes are presented as upstream corrections.

## Downstream recommendations

`cocpy`/`clashy.py` needs no endpoint change for this migration. The published [v26.9.0 source](https://github.com/ClashKingInc/clashy.py/blob/v26.9.0/coc/clans.py) already uses `.get("districts", [])` and exposes `clan_gold_sink_total`. An earlier recommendation to fix these was based on a stale local checkout and has been withdrawn. Its floating-point attack annotation is not evidence that the upstream API returns fractional individual attacks.

`clashy.go` can consume these responses unchanged: omitted fields and null strings decode to zero values, and war destruction is already `float64`. Its `ClanCapital` exposes districts only; an `int64` gold-total field is recommended if consumers need it. Preserving exact null-versus-absent distinctions would require pointer/custom decoding if a consumer needs that behavior.

Neither sibling repository changes in this PR. ClashKing API can adopt the package separately; it consumes shared schemas and is not a service the mock depends on. Package 0.2.0 requires Effect for root validators, changes diagnostics and operation IDs, and removes FastAPI validation components.

## Review and release gates

CI installs the root workspace lockfile, checks formatting and generation, runs fixture/request/type tests, builds with `wrangler deploy --dry-run`, tests fresh workerd isolates, and installs a tarball into a temporary consumer. Cancellation tests verify that aborting a first request does not poison subsequent requests. Local timings are not production cold-start or CPU-limit measurements.

The deployment target is `mock.clashk.ing`. Cloudflare Workers Builds owns automatic main-branch deployment once its GitHub integration is configured using the README settings. Its build command runs the full validation sequence before deployment. GitHub Actions remains validation-only and requires no deployment secrets. No npm artifacts are published, and creating this configuration has not deployed the Worker or modified DNS.
