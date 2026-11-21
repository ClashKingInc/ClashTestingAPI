import { Schema } from 'effect';
import { parse } from '@clashking/clash-contract';
import type { paths } from '@clashking/clash-contract';
import { Clan, WarClan } from '@clashking/clash-contract/effect';

const Summary = Schema.Struct({
  gold: Clan.fields.clanCapital.fields.clanGoldSinkTotal,
  name: WarClan.fields.name,
});
const summary = Schema.decodeUnknownSync(Summary)({
  gold: 9876543210,
  name: 'Clash',
});
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
  name: 'Giant Gauntlet',
  level: 27,
  maxLevel: 27,
  village: 'home',
});
const hero = Schema.decodeUnknownSync(Wire.PlayerHero)({
  name: 'Barbarian King',
  level: 100,
  maxLevel: 100,
  village: 'home',
  equipment: [item],
});
const equippedLevel: number | undefined = hero.equipment?.[0]?.level;
// @ts-expect-error Hero equipment items are flat PlayerItemLevel (non-recursive).
const nestedEquipment = hero.equipment?.[0]?.equipment;
// @ts-expect-error PlayerItemLevel.village is home | builderBase only (not clanCapital).
const invalidItemVillage: typeof item.village = 'clanCapital';
const troop = Schema.decodeUnknownSync(Wire.PlayerTroop)({
  name: 'Super Goblin',
  level: 9,
  maxLevel: 9,
  village: 'home',
  superTroopIsActive: true,
});
const superActive: boolean | undefined = troop.superTroopIsActive;

type SearchQuery = NonNullable<paths['/clans']['get']['parameters']['query']>;
const searchQuery: SearchQuery = {
  limit: 1,
  warFrequency: 'any',
  minMembers: 10,
  maxMembers: 50,
  locationId: 32000249,
  minClanPoints: 100,
  minClanLevel: 2,
};
// @ts-expect-error Numeric query parameters must be numbers in generated clients.
const invalidQuery: SearchQuery = { limit: '1' };
// @ts-expect-error Enum query parameters must reject Supercell Swagger ALL_CAPS values.
const invalidWarFrequency: SearchQuery = { warFrequency: 'ALWAYS' };

const houseElement = Schema.decodeUnknownSync(Wire.PlayerHouseElement)({
  id: 82000000,
  type: 'walls',
});
const houseElementType: 'ground' | 'walls' | 'roof' | 'decoration' =
  houseElement.type;
// @ts-expect-error Wire enum uses "walls", not Supercell Swagger's "FOOT".
const invalidHouseElementType: typeof houseElement.type = 'FOOT';

type PlayerWire = typeof Wire.Player.Type;
const weaponLevel: number | undefined = ({} as PlayerWire).townHallWeaponLevel;
const playerRole: 'member' | 'admin' | 'coLeader' | 'leader' | undefined = (
  {} as PlayerWire
).role;
const warPref: 'in' | 'out' | undefined = ({} as PlayerWire).warPreference;
const playerLeagueTier: typeof Wire.LeagueTier.Type = ({} as PlayerWire)
  .leagueTier;
// @ts-expect-error Non-nullable optional wire fields must not accept null.
const nullRole: typeof playerRole = null;

type ClanWire = typeof Wire.Clan.Type;
const clanWarFreq: Exclude<SearchQuery['warFrequency'], 'any' | undefined> = (
  {} as ClanWire
).warFrequency;
// @ts-expect-error "any" is query-only and not returned on Clan.warFrequency.
const invalidResponseFreq: typeof clanWarFreq = 'any';

type ClanMemberWire = typeof Wire.ClanMember.Type;
const memberLeagueTier: typeof Wire.LeagueTier.Type = ({} as ClanMemberWire)
  .leagueTier;
const requiredTier: typeof Wire.LeagueTier.Type | undefined = ({} as ClanWire)
  .requiredLeagueTier;

const battleEntry = {} as typeof Wire.BattleLogEntry.Type;
const battleTs: string = battleEntry.battleTimestamp;
const battleTime: number = battleEntry.battleTime;
const opponentName: string = battleEntry.opponentName;
const opponentTownHallLevel: number = battleEntry.opponentTownHallLevel;
const shareCode: string | null = battleEntry.armyShareCode;

const seasonResult = {} as typeof Wire.LeagueSeasonResult.Type;
const seasonId: number = seasonResult.leagueSeasonId;
// @ts-expect-error LeagueSeasonResult.leagueSeasonId is int64 only, not string.
const invalidSeasonId: typeof seasonResult.leagueSeasonId = '2026-06-02';

const tierIcon: string = ({} as typeof Wire.LeagueTierIconUrls.Type).large;
const labelIcon: string = ({} as typeof Wire.LabelIconUrls.Type).medium;
const leagueIcon: string | undefined = ({} as typeof Wire.LeagueIconUrls.Type)
  .medium;

const warLogOppName: string | undefined = (
  {} as typeof Wire.WarLogOpponent.Type
).name;
const warLogResult: 'win' | 'lose' | 'tie' | null = (
  {} as typeof Wire.ClanWarLogEntry.Type
).result;
const completionInfo: string | null = (
  {} as typeof Wire.PlayerAchievementProgress.Type
).completionInfo;

void [
  playerEnvelope,
  allWireSchemas,
  groupContract,
  equippedLevel,
  nestedEquipment,
  superActive,
  searchQuery,
  houseElementType,
  weaponLevel,
  playerRole,
  warPref,
  playerLeagueTier,
  clanWarFreq,
  memberLeagueTier,
  requiredTier,
  battleTs,
  battleTime,
  opponentName,
  opponentTownHallLevel,
  shareCode,
  seasonId,
  tierIcon,
  labelIcon,
  leagueIcon,
  warLogOppName,
  warLogResult,
  completionInfo,
];
