import { exports } from 'cloudflare:workers';
import { describe, expect, it } from 'vitest';
import spec from '../packages/clash-contract/openapi.json';
import player from '../data/players/player/FOUND.json';
import clans from '../data/clans/search/CLANS_FOUND.json';
import currentGroup from '../data/leagues/leaguegroup/CURRENT.json';
import previousGroup from '../data/leagues/leaguegroup/PREVIOUS.json';
import { Schema } from 'effect';
import * as W from '../packages/clash-contract/src/effect.js';
import { fixtures } from '../src/fixtures/data.js';

const request = (path: string, options?: RequestInit) =>
  exports.default.fetch(`https://mock.test${path}`, options);
async function json(path: string) {
  const response = await request(path);
  expect(response.status).toBe(200);
  return response.json();
}

describe('Cloudflare Worker', () => {
  it('serves a validated fixture', async () => {
    const response = await exports.default.fetch(
      'https://mock.test/clans/%232PP',
    );
    expect(response.status).toBe(200);
    expect(
      (
        (await response.json()) as {
          clanCapital: { clanGoldSinkTotal: number };
        }
      ).clanCapital.clanGoldSinkTotal,
    ).toBeTypeOf('number');
  });
  it('serves the exact generated OpenAPI', async () => {
    const response = await exports.default.fetch(
      'https://mock.test/openapi.json',
    );
    expect(await response.json()).toEqual(spec);
  });
  it.each([
    'limit=0',
    'limit=-1',
    'limit=1.5',
    'limit=abc',
    'after=-1',
    'after=bad',
    'after=1_0',
    'after=1&before=',
    'after=&before=2',
    'after=9007199254740992',
  ])('rejects invalid paging: %s', async (query) => {
    const response = await request(`/clans?${query}`);
    expect(response.status).toBe(400);
    expect(await response.json()).toMatchObject({ reason: 'badRequest' });
  });
  it.each(['{}', '{"token":null}', '{"token":123}', '{"token":', ''])(
    'rejects invalid verify payload %s',
    async (body) => {
      const response = await request('/players/%232PP/verifytoken', {
        method: 'POST',
        body,
        headers: { 'content-type': 'application/json' },
      });
      expect(response.status).toBe(400);
      expect(await response.json()).toMatchObject({ reason: 'badRequest' });
    },
  );
  it('requires the league group player query', async () => {
    const response = await request('/leaguegroup/%232PP/123');
    expect(response.status).toBe(400);
    expect(await response.json()).toMatchObject({ reason: 'badRequest' });
  });
  it('handles missing routes, unsupported methods, and trailing slashes', async () => {
    const missing = await request('/not-a-real-route');
    expect(missing.status).toBe(404);
    expect(await missing.json()).toMatchObject({ reason: 'notFound' });
    const method = await request('/clans', { method: 'POST' });
    expect(method.status).toBe(405);
    expect(method.headers.get('allow')).toBe('GET');
    const redirect = await request('/clans/?limit=1', { redirect: 'manual' });
    expect(redirect.status).toBe(307);
    expect(redirect.headers.get('location')).toBe('/clans?limit=1');
  });
  it.each([
    [
      player.body.currentLeagueGroupTag,
      player.body.currentLeagueSeasonId,
      currentGroup.body,
    ],
    [
      player.body.previousLeagueGroupTag,
      player.body.previousLeagueSeasonId,
      previousGroup.body,
    ],
  ])(
    'serves league group %s for the correct season',
    async (tag, season, body) => {
      expect(
        await json(
          `/leaguegroup/${encodeURIComponent(String(tag))}/${season}?playerTag=%232PP`,
        ),
      ).toEqual(body);
    },
  );
  it('filters clans before pagination and leaves the fixture intact', async () => {
    const source = clans.body.items;
    const first = source[1];
    const query = new URLSearchParams({
      name: first.name.toLowerCase(),
      minClanLevel: String(first.clanLevel),
      minMembers: String(first.members),
      maxMembers: String(first.members),
      minClanPoints: String(first.clanPoints),
      locationId: String(first.location.id),
      warFrequency: first.warFrequency,
      labelIds: String(first.labels[0].id),
    });
    const all = Schema.decodeUnknownSync(W.ClanSearchResponse)(
      await json(`/clans?${query}`),
    );
    expect(all.items).toContainEqual(first);
    expect(
      all.items.every(
        (c) =>
          c.name.toLowerCase().includes(first.name.toLowerCase()) &&
          c.members === first.members,
      ),
    ).toBe(true);
    const limited = Schema.decodeUnknownSync(W.ClanSearchResponse)(
      await json(`/clans?${query}&limit=1`),
    );
    expect(limited.items).toEqual(all.items.slice(0, 1));
    expect(await json('/clans?name=__no_matching_mock_clan__')).toMatchObject({
      items: [],
      paging: { cursors: {} },
    });
    const full = Schema.decodeUnknownSync(W.ClanSearchResponse)(
      await json('/clans'),
    );
    expect(full.items).toEqual(source);
  });
  it.each(['minMembers=40&maxMembers=10', 'labelIds=abc', 'locationId=oops'])(
    'rejects invalid clan search %s',
    async (query) => {
      const response = await request(`/clans?${query}`);
      expect(response.status).toBe(400);
      expect(await response.json()).toMatchObject({ reason: 'badRequest' });
    },
  );
  it('keeps country rewriting and concurrent pagination request-local', async () => {
    const original = await json('/locations/global/rankings/clans');
    const [country, full, paged] = await Promise.all([
      json('/locations/32000249/rankings/clans'),
      json('/locations/global/rankings/clans'),
      json('/locations/global/rankings/clans?limit=1'),
    ]);
    expect(full).toEqual(original);
    const decoded = Schema.decodeUnknownSync(W.ClanRankingListResponse)(
      country,
    );
    expect(decoded.items.every((c) => c.location?.id === 32000249)).toBe(true);
    expect(
      Schema.decodeUnknownSync(W.ClanRankingListResponse)(paged).items,
    ).toEqual(
      Schema.decodeUnknownSync(W.ClanRankingListResponse)(full).items.slice(
        0,
        1,
      ),
    );
    expect(await json('/locations/global/rankings/clans')).toEqual(original);
  });
  it('serves docs with a same-origin API and preserves the SDK extension', async () => {
    const response = await request('/');
    expect(response.headers.get('content-type')).toContain('text/html');
    expect(await response.text()).toContain('Scalar');
    expect(spec.servers).toEqual([{ url: '/' }]);
    expect(Object.keys(spec.paths)).toHaveLength(33);
    expect(
      spec.paths['/players/{playerTag}'].get['x-codeSamples'],
    ).toHaveLength(1);
  });
  it('publishes required, nullable, open-object and int64 semantics', () => {
    const schemas = spec.components.schemas;
    expect(schemas.Clan.required).toContain('clanCapital');
    expect(schemas.ClanCapital.required).toEqual(['clanGoldSinkTotal']);
    expect(schemas.ClanCapital.properties.clanGoldSinkTotal).toMatchObject({
      type: 'integer',
      allOf: [{ format: 'int64' }],
    });
    expect(schemas.Clan.additionalProperties).toBe(true);
    expect(schemas.Player.required).not.toContain('leagueTier');
    expect(schemas.LeagueGroupMember.required).toEqual(
      expect.arrayContaining(['clanTag', 'clanName']),
    );
  });
  it('returns a safe 500 for an invalid fixture', async () => {
    // Goldpass is deliberately not loaded before this test in this module.
    const fixture = fixtures['goldpass/GOLDPASS.json'];
    expect(fixture).toBeDefined();
    const original = fixture.body;
    Reflect.set(fixture, 'body', { startTime: 123, endTime: 'invalid' });
    try {
      const response = await request('/goldpass/seasons/current');
      expect(response.status).toBe(500);
      expect(await response.json()).toEqual({
        reason: 'unknownException',
        message: 'Mock API could not produce a valid response.',
      });
    } finally {
      Reflect.set(fixture, 'body', original);
    }
  });
});
