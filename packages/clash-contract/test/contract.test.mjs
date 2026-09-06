import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';
import { Schema } from 'effect';
import { validators, parse } from '../dist/index.js';
import * as effect from '../dist/effect.js';

const root = new URL('../../../', import.meta.url);
const mapping = JSON.parse(
  fs.readFileSync(new URL('scripts/fixture_contracts.json', root)),
);
const fixtureRoot = new URL('data/', root);
for (const relative of fs
  .readdirSync(fixtureRoot, { recursive: true })
  .filter((p) => p.endsWith('.json'))) {
  test(`fixture: ${relative}`, () => {
    const fixture = JSON.parse(fs.readFileSync(new URL(relative, fixtureRoot)));
    const name =
      fixture.response_code >= 400
        ? 'ClientErrorResponse'
        : (mapping[relative] ?? mapping[path.dirname(relative)]);
    assert.ok(name, `Unmapped fixture ${relative}`);
    assert.ok(
      validators[name](fixture.body),
      JSON.stringify(validators[name].errors),
    );
    assert.doesNotThrow(() =>
      Schema.decodeUnknownSync(effect[name])(fixture.body),
    );
  });
}
const clan = () =>
  JSON.parse(fs.readFileSync(new URL('clans/clans/CLAN.json', fixtureRoot)))
    .body;
test('rejects nested wrong types, missing required fields, invalid enums and null', () => {
  for (const mutate of [
    (c) => (c.clanCapital.clanGoldSinkTotal = '9876543210'),
    (c) => delete c.clanCapital,
    (c) => (c.type = 'invalid'),
    (c) => (c.clanCapital = null),
  ]) {
    const body = clan();
    mutate(body);
    assert.throws(() => parse('Clan', body), TypeError);
    assert.throws(() => Schema.decodeUnknownSync(effect.Clan)(body));
  }
});
test('does not coerce, strip unknown properties, or insert defaults', () => {
  const body = clan();
  delete body.memberList;
  body.futureField = { value: true };
  const before = structuredClone(body);
  assert.equal(parse('Clan', body), body);
  assert.deepEqual(body, before);
  const decoded = Schema.decodeUnknownSync(effect.Clan)(body, {
    onExcessProperty: 'preserve',
  });
  assert.deepEqual(decoded, before);
  assert.deepEqual(Schema.encodeSync(effect.Clan)(decoded), before);
});
test('Effect fields support composition and preserve validation', () => {
  const Composed = Schema.Struct({
    ...effect.Clan.fields,
    localId: Schema.String,
  });
  const body = { ...clan(), localId: '123' };
  assert.doesNotThrow(() => Schema.decodeUnknownSync(Composed)(body));
  body.clanCapital.clanGoldSinkTotal = 'wrong';
  assert.throws(() => Schema.decodeUnknownSync(Composed)(body));
});
test('optional, nullable, recursive and integer schemas retain wire semantics', () => {
  assert.ok(
    validators.PlayerItemLevel({
      name: 'a',
      level: 1,
      maxLevel: 2,
      village: 'home',
      equipment: [{ name: 'b', level: 1, maxLevel: 2, village: 'home' }],
    }),
  );
  assert.ok(validators.ClanCapital({ clanGoldSinkTotal: 9876543210 }));
  assert.ok(
    validators.ClanCapital({ clanGoldSinkTotal: 1, capitalHallLevel: null }),
  );
  assert.equal(validators.ClanCapital({ clanGoldSinkTotal: 1.5 }), false);
  assert.equal(
    validators.ClanCapital({ clanGoldSinkTotal: 1, districts: null }),
    false,
  );
  assert.equal(validators.PlayerRanking({}), false);
});

test('Player may omit leagueTier but rejects invalid present values', () => {
  const player = JSON.parse(
    fs.readFileSync(new URL('players/player/FOUND.json', fixtureRoot)),
  ).body;
  delete player.leagueTier;
  assert.equal(parse('Player', player), player);
  const decoded = Schema.decodeUnknownSync(effect.Player)(player);
  assert.equal('leagueTier' in decoded, false);
  for (const value of [null, 'Legend', { name: 'Legend' }]) {
    const invalid = { ...player, leagueTier: value };
    assert.equal(validators.Player(invalid), false);
    assert.throws(() => Schema.decodeUnknownSync(effect.Player)(invalid));
  }
});

test('clanless LeagueGroup members have required nullable clan identity keys', () => {
  const group = JSON.parse(
    fs.readFileSync(new URL('leagues/leaguegroup/CURRENT.json', fixtureRoot)),
  ).body;
  group.members[0].clanTag = null;
  group.members[0].clanName = null;
  assert.equal(parse('LeagueGroup', group), group);
  const decoded = Schema.decodeUnknownSync(effect.LeagueGroup)(group);
  assert.equal(decoded.members[0].clanTag, null);
  assert.equal(decoded.members[0].clanName, null);
  for (const field of ['clanTag', 'clanName']) {
    const missing = { ...group.members[0] };
    delete missing[field];
    assert.equal(validators.LeagueGroupMember(missing), false);
    assert.throws(() =>
      Schema.decodeUnknownSync(effect.LeagueGroupMember)(missing),
    );
    const invalid = { ...group.members[0], [field]: 123 };
    assert.equal(validators.LeagueGroupMember(invalid), false);
    assert.throws(() =>
      Schema.decodeUnknownSync(effect.LeagueGroupMember)(invalid),
    );
  }
});

test('individual war attacks require integers while clan aggregates allow fractions', () => {
  const attack = {
    attackerTag: '#2PP',
    defenderTag: '#2PPP',
    stars: 2,
    destructionPercentage: 99,
    order: 1,
  };
  assert.equal(parse('ClanWarAttack', attack).destructionPercentage, 99);
  assert.equal(
    Schema.decodeUnknownSync(effect.ClanWarAttack)(attack)
      .destructionPercentage,
    99,
  );
  const warClan = { clanLevel: 1, destructionPercentage: 99.5 };
  assert.throws(() =>
    parse('ClanWarAttack', { ...attack, destructionPercentage: 99.5 }),
  );
  assert.throws(() =>
    Schema.decodeUnknownSync(effect.ClanWarAttack)({
      ...attack,
      destructionPercentage: 99.5,
    }),
  );
  assert.equal(parse('WarClan', warClan).destructionPercentage, 99.5);
  assert.equal(
    Schema.decodeUnknownSync(effect.WarClan)(warClan).destructionPercentage,
    99.5,
  );
  assert.equal(
    validators.ClanWarAttack({ ...attack, destructionPercentage: '99.5' }),
    false,
  );
  assert.throws(() =>
    Schema.decodeUnknownSync(effect.ClanWarAttack)({
      ...attack,
      destructionPercentage: '99.5',
    }),
  );
});
