import { Effect, Schema } from 'effect';
import { HttpServerResponse } from 'effect/unstable/http';
import { HttpApiSchema } from 'effect/unstable/httpapi';
import * as W from '../../packages/clash-contract/src/effect.js';
import { fixtures } from './data.js';

export interface Wrapped {
  readonly body: unknown;
  readonly response_code?: number;
  readonly headers?: Readonly<Record<string, string>>;
}
export interface Page {
  readonly limit?: number;
  readonly after?: string;
  readonly before?: string;
}
export class MockFailure extends Error {
  constructor(
    readonly status: number,
    readonly body: typeof W.ClientErrorResponse.Type,
    readonly headers: Readonly<Record<string, string>> = {},
  ) {
    super(body.message ?? body.reason);
  }
}
export function fail(status: number, reason: string, message: string): never {
  throw new MockFailure(status, { reason, message });
}
export function normalizeTag(tag: string): string {
  try {
    return decodeURIComponent(tag).toUpperCase();
  } catch {
    return tag.toUpperCase();
  }
}
export function variant(tag: string, names: readonly string[]): string {
  const normalized = normalizeTag(tag);
  if (!/^#2PP+$/.test(normalized))
    fail(
      400,
      'badRequest',
      'Only mock tags in the form #2PP with optional trailing P variants are supported.',
    );
  const name = names[normalized.length - 4];
  if (!name)
    fail(
      400,
      'badRequest',
      `No mock response variant exists for tag '${normalized}'.`,
    );
  return name;
}
export function checkPaging(page: Page = {}): void {
  if (page.after !== undefined && page.before !== undefined)
    fail(
      400,
      'badRequest',
      "Only one of 'after' or 'before' can be specified.",
    );
}
export function paginate<T>(body: T, page: Page = {}): T {
  checkPaging(page);
  if (!isObject(body) || !Array.isArray(body.items)) return body;
  const items = body.items;
  const limit = page.limit ?? items.length;
  let start = 0;
  const cursor = page.after ?? page.before;
  if (cursor !== undefined) {
    if (!/^\s*\+?\d+\s*$/.test(cursor) || !Number.isSafeInteger(Number(cursor)))
      fail(400, 'badRequest', 'Paging cursors must be numeric offsets.');
    start =
      page.after !== undefined
        ? Number(cursor)
        : Math.max(0, Number(cursor) - limit);
  }
  const end = Math.min(items.length, start + limit);
  const cursors: Record<string, string> = {};
  if (start > 0) cursors.before = String(start);
  if (end < items.length) cursors.after = String(end);
  return { ...body, items: items.slice(start, end), paging: { cursors } };
}
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
const cache = new Map<
  string,
  { readonly schema: object; readonly body: unknown }
>();
function freeze(value: unknown): void {
  if (typeof value !== 'object' || value === null || Object.isFrozen(value))
    return;
  Object.freeze(value);
  for (const child of Object.values(value)) freeze(child);
}
export function load<S extends Schema.Codec<unknown, unknown, never, never>>(
  path: string,
  schema: S,
): { body: S['Type']; headers: Record<string, string> } {
  const fixture = fixtures[path] ?? fixtures['errors/MISSING_MOCK.json'];
  const headers = { ...fixture.headers };
  // FastAPI discarded fixture content-type and supplied application/json.
  delete headers['content-type'];
  if ((fixture.response_code ?? 200) >= 400)
    throw new MockFailure(
      fixture.response_code!,
      Schema.decodeUnknownSync(W.ClientErrorResponse)(fixture.body),
      headers,
    );
  const cached = cache.get(path);
  if (cached && cached.schema !== schema)
    throw new Error(`Fixture ${path} was associated with two schemas`);
  const body = cached
    ? (cached.body as S['Type'])
    : Schema.decodeUnknownSync(schema)(fixture.body);
  if (!cached) {
    freeze(body);
    cache.set(path, { schema, body });
  }
  return { body, headers };
}
export function run<A>(
  f: () => A,
): Effect.Effect<A | HttpServerResponse.HttpServerResponse> {
  return Effect.sync(() => {
    try {
      return f();
    } catch (error) {
      if (!(error instanceof MockFailure)) throw error;
      const body = Schema.decodeUnknownSync(W.ClientErrorResponse)(error.body);
      return HttpServerResponse.jsonUnsafe(body, {
        status: error.status,
        headers: error.headers,
      });
    }
  });
}
export function reply<S extends Schema.Codec<unknown, unknown, never, never>>(
  path: string,
  schema: S,
  page: Page = {},
  transform?: (body: S['Type']) => S['Type'],
) {
  checkPaging(page);
  const value = load(path, schema);
  const body = paginate(transform ? transform(value.body) : value.body, page);
  return HttpApiSchema.withHeaders({ body, headers: value.headers });
}
export function badFixture(path: string): never {
  load(path, W.ClientErrorResponse);
  throw new Error(`Expected error fixture: ${path}`);
}
export function item<
  S extends Schema.Codec<
    { readonly items: ReadonlyArray<{ readonly id: string | number }> },
    unknown,
    never,
    never
  >,
>(
  path: string,
  schema: S,
  id: string,
  bad: string,
): HttpApiSchema.withHeaders<
  S['Type']['items'][number],
  Record<string, string>
> {
  if (!/^\d+$/.test(id)) return badFixture(bad);
  const found: S['Type']['items'][number] | undefined = load(
    path,
    schema,
  ).body.items.find((value) => String(value.id) === id);
  if (!found) return badFixture(bad);
  return HttpApiSchema.withHeaders({
    body: found,
    headers: { 'cache-control': 'max-age=600' },
  });
}
