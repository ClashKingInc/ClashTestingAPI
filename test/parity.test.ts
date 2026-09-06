import { exports } from 'cloudflare:workers';
import { expect, it } from 'vitest';
import baseline from './baseline/python-responses.json';

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
it.each(baseline)('preserves $method $url ($status)', async (entry) => {
  const response = await exports.default.fetch(
    `https://mock.test${entry.url}`,
    {
      method: entry.method,
      ...(entry.requestBody
        ? {
            body: JSON.stringify(entry.requestBody),
            headers: { 'content-type': 'application/json' },
          }
        : {}),
    },
  );
  expect(response.status).toBe(entry.status);
  for (const [key, value] of Object.entries(entry.headers))
    expect(response.headers.get(key)).toBe(value);
  const body = await response.json();
  const digest = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(JSON.stringify(canonical(body))),
  );
  expect(
    Array.from(new Uint8Array(digest), (n) =>
      n.toString(16).padStart(2, '0'),
    ).join(''),
  ).toBe(entry.bodySha256);
});
