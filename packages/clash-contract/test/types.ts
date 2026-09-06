import { Schema } from 'effect';
import { parse } from '@clashking/clash-contract';
import { Clan, WarClan } from '@clashking/clash-contract/effect';

const Summary = Schema.Struct({
  gold: Clan.fields.clanCapital.fields.clanGoldSinkTotal,
  name: WarClan.fields.name,
});
const summary = Schema.decodeUnknownSync(Summary)({ gold: 9876543210 });
const gold: number = summary.gold;
// @ts-expect-error The nested field must stay typed, not any.
const invalid: string = summary.gold;
const capital = parse('ClanCapital', { clanGoldSinkTotal: gold });
// @ts-expect-error Generated wire types must stay typed, not any.
const invalidCapital: string = capital.clanGoldSinkTotal;

import * as Wire from '@clashking/clash-contract/effect';
const playerEnvelope: Schema.Codec<unknown, unknown, never, never> =
  Schema.Struct({ player: Wire.Player });
const allWireSchemas: Record<
  string,
  Schema.Codec<unknown, unknown, never, never>
> = Wire;
const ClanEntry = Schema.Struct({
  ...Wire.ClanWarLeagueClan.fields,
  localId: Schema.String,
});
const Group = Schema.Struct({
  ...Wire.ClanWarLeagueGroup.fields,
  clans: Schema.optionalKey(Schema.Array(ClanEntry)),
});
const groupContract: Schema.Codec<unknown, unknown, never, never> = Group;

type Assert<T extends true> = T;
type IsNever<T> = [T] extends [never] ? true : false;
type EveryService = {
  [K in keyof typeof Wire]:
    | (typeof Wire)[K]['DecodingServices']
    | (typeof Wire)[K]['EncodingServices'];
}[keyof typeof Wire];
type AllServicesAreNever = Assert<IsNever<EveryService>>;
const item = Schema.decodeUnknownSync(Wire.PlayerItemLevel)({
  name: 'a',
  level: 1,
  maxLevel: 2,
  village: 'home',
});
const nestedLevel: number | undefined =
  item.equipment?.[0]?.equipment?.[0]?.level;
// @ts-expect-error Recursive declaration emit must not widen nested items to any.
const invalidNestedLevel: string = item.equipment?.[0]?.equipment?.[0]?.level;
