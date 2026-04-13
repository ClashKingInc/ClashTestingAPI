# MockAPI

Fixture-backed Clash of Clans mock API for local development, demos, and integration testing. It mirrors common Clash of Clans endpoints with deterministic responses and serves interactive docs from the app itself.

Public instance: [api.clashapi.dev](https://api.clashapi.dev)

## Features

- FastAPI app with interactive Scalar docs at `/`
- OpenAPI schema at `/openapi.json`
- Stable JSON fixtures for clan, player, league, location, label, and gold pass endpoints
- Variant-based mock responses using `#2PP` and additional trailing `P`s where supported
- Pagination support on list endpoints via `limit`, `after`, and `before`

## Quick Start

Requirements:

- Python `3.13.7+`
- [`uv`](https://docs.astral.sh/uv/)

Install dependencies and run the API:

```bash
uv sync
uv run python main.py
```

The app starts on [http://localhost:3000](http://localhost:3000).

## Usage

Interactive docs:

- Local: [http://localhost:3000](http://localhost:3000)
- Hosted: [https://api.clashapi.dev](https://api.clashapi.dev)

Example requests:

```bash
curl https://api.clashapi.dev/players/%232PP
curl "https://api.clashapi.dev/clans?name=mock&limit=5"
curl https://api.clashapi.dev/openapi.json
```

Mock tags are deterministic:

- `#2PP` returns the primary fixture
- Appending `P`s selects alternate variants when an endpoint supports them
- Tags outside the `#2PP...` pattern return a mock bad request response

Example:

```bash
curl https://api.clashapi.dev/players/%232PP
curl https://api.clashapi.dev/players/%232PPP
```

## Supported Areas

- `clans`
- `players`
- `leagues`
- `locations` and `rankings`
- `labels`
- `goldpass`

## License

Apache 2.0. See [LICENSE](/Users/matthewanderson/PycharmProjects/MockAPI/LICENSE).
