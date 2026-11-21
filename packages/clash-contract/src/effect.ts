// Authoritative wire schemas. Edit here; OpenAPI and types are derived outputs.
import { Schema } from 'effect';

// Explicit rest records preserve future API fields during decoding and encoding.
// Rebuilding the struct keeps its existing .fields and inferred known-field types.
function WireStruct<const Fields extends Schema.Struct.Fields>(fields: Fields) {
  const struct = Schema.Struct(fields);
  return struct.rebuild(
    Schema.StructWithRest(struct, [
      Schema.Record(Schema.String, Schema.Unknown),
    ]).ast,
  );
}
export interface PlayerItemLevelWire {
  readonly name: string;
  readonly level: number;
  readonly maxLevel: number;
  readonly village: 'home' | 'builderBase' | 'clanCapital';
  readonly superTroopIsActive?: boolean;
  readonly equipment?: readonly PlayerItemLevelWire[];
}

const BattleModifier = Schema.Literals([
  'none',
  'hardMode',
  'minusOne',
  'minusTwo',
  'minusThree',
]);
const BattleType = Schema.Literals(['ranked', 'legend', 'homeVillage']);
const ClanCapitalRaidSeasonState = Schema.Literals(['ongoing', 'ended']);
const ClanRole = Schema.Literals(['member', 'admin', 'coLeader', 'leader']);
const ClanType = Schema.Literals(['open', 'inviteOnly', 'closed']);
const ClanWarLeagueGroupState = Schema.Literals([
  'notInWar',
  'preparation',
  'inWar',
  'ended',
]);
const PlayerHouseElementType = Schema.Literals([
  'ground',
  'walls',
  'roof',
  'decoration',
]);
const VerifyTokenStatus = Schema.Literals(['ok', 'invalid']);
const VillageType = Schema.Literals(['home', 'builderBase', 'clanCapital']);
const WarFrequency = Schema.Literals([
  'unknown',
  'always',
  'moreThanOncePerWeek',
  'oncePerWeek',
  'lessThanOncePerWeek',
  'never',
  'any',
]);
const WarPreference = Schema.Literals(['in', 'out']);
const WarResult = Schema.Literals(['win', 'lose', 'tie']);

export const BadgeUrls = WireStruct({
  large: Schema.optionalKey(Schema.String),
  medium: Schema.optionalKey(Schema.String),
  small: Schema.optionalKey(Schema.String),
}).annotate({
  identifier: 'BadgeUrls',
});
export const Resource = WireStruct({
  amount: Schema.Number.check(Schema.isInt()).annotate({
    format: 'int64',
  }),
  name: Schema.String,
}).annotate({
  identifier: 'Resource',
});
export const BattleLogEntry = WireStruct({
  armyShareCode: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  attack: Schema.Boolean,
  availableLoot: Schema.optionalKey(Schema.Array(Resource)),
  battleTime: Schema.Number.check(Schema.isInt()),
  battleTimestamp: Schema.String,
  battleType: BattleType,
  destructionPercentage: Schema.Number.check(Schema.isInt()),
  extraLootedResources: Schema.optionalKey(Schema.Array(Resource)),
  lootedResources: Schema.optionalKey(Schema.Array(Resource)),
  opponentName: Schema.String,
  opponentPlayerTag: Schema.String,
  opponentTownHallLevel: Schema.Number.check(Schema.isInt()),
  stars: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'BattleLogEntry',
});
export const CursorPaging = WireStruct({
  after: Schema.optionalKey(Schema.String),
  before: Schema.optionalKey(Schema.String),
}).annotate({
  identifier: 'CursorPaging',
});
export const Paging = WireStruct({
  cursors: Schema.optionalKey(CursorPaging),
}).annotate({
  identifier: 'Paging',
});
export const BattleLogResponse = WireStruct({
  items: Schema.Array(BattleLogEntry),
}).annotate({
  identifier: 'BattleLogResponse',
});
export const BuilderBaseLeague = WireStruct({
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'BuilderBaseLeague',
});
export const BuilderBaseLeagueListResponse = WireStruct({
  items: Schema.Array(BuilderBaseLeague),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'BuilderBaseLeagueListResponse',
});
export const CapitalLeague = WireStruct({
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'CapitalLeague',
});
export const CapitalLeagueListResponse = WireStruct({
  items: Schema.Array(CapitalLeague),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'CapitalLeagueListResponse',
});
export const ClanCapitalRaidSeasonClanInfo = WireStruct({
  badgeUrls: Schema.optionalKey(BadgeUrls),
  level: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'ClanCapitalRaidSeasonClanInfo',
});
export const ClanCapitalRaidSeasonAttacker = WireStruct({
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'ClanCapitalRaidSeasonAttacker',
});
export const ClanCapitalRaidSeasonAttack = WireStruct({
  attacker: ClanCapitalRaidSeasonAttacker,
  destructionPercent: Schema.Number.check(Schema.isInt()),
  stars: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanCapitalRaidSeasonAttack',
});
export const ClanCapitalRaidSeasonDistrict = WireStruct({
  attackCount: Schema.Number.check(Schema.isInt()),
  attacks: Schema.optionalKey(Schema.Array(ClanCapitalRaidSeasonAttack)),
  destructionPercent: Schema.Number.check(Schema.isInt()),
  districtHallLevel: Schema.Number.check(Schema.isInt()),
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  stars: Schema.Number.check(Schema.isInt()),
  totalLooted: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanCapitalRaidSeasonDistrict',
});
export const ClanCapitalRaidSeasonAttackLogEntry = WireStruct({
  attackCount: Schema.Number.check(Schema.isInt()),
  defender: ClanCapitalRaidSeasonClanInfo,
  districtCount: Schema.Number.check(Schema.isInt()),
  districts: Schema.optionalKey(Schema.Array(ClanCapitalRaidSeasonDistrict)),
  districtsDestroyed: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanCapitalRaidSeasonAttackLogEntry',
});
export const ClanCapitalRaidSeasonDefenseLogEntry = WireStruct({
  attackCount: Schema.Number.check(Schema.isInt()),
  attacker: ClanCapitalRaidSeasonClanInfo,
  districtCount: Schema.Number.check(Schema.isInt()),
  districts: Schema.optionalKey(Schema.Array(ClanCapitalRaidSeasonDistrict)),
  districtsDestroyed: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanCapitalRaidSeasonDefenseLogEntry',
});
export const ClanCapitalRaidSeasonMember = WireStruct({
  attackLimit: Schema.Number.check(Schema.isInt()),
  attacks: Schema.Number.check(Schema.isInt()),
  bonusAttackLimit: Schema.Number.check(Schema.isInt()),
  capitalResourcesLooted: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'ClanCapitalRaidSeasonMember',
});
export const ClanCapitalRaidSeason = WireStruct({
  attackLog: Schema.optionalKey(
    Schema.Array(ClanCapitalRaidSeasonAttackLogEntry),
  ),
  capitalTotalLoot: Schema.Number.check(Schema.isInt()),
  defenseLog: Schema.optionalKey(
    Schema.Array(ClanCapitalRaidSeasonDefenseLogEntry),
  ),
  defensiveReward: Schema.Number.check(Schema.isInt()),
  endTime: Schema.String,
  enemyDistrictsDestroyed: Schema.Number.check(Schema.isInt()),
  members: Schema.optionalKey(Schema.Array(ClanCapitalRaidSeasonMember)),
  offensiveReward: Schema.Number.check(Schema.isInt()),
  raidsCompleted: Schema.Number.check(Schema.isInt()),
  startTime: Schema.String,
  state: ClanCapitalRaidSeasonState,
  totalAttacks: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanCapitalRaidSeason',
});
export const CapitalRaidSeasonsResponse = WireStruct({
  items: Schema.Array(ClanCapitalRaidSeason),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'CapitalRaidSeasonsResponse',
});
export const Language = WireStruct({
  id: Schema.Number.check(Schema.isInt()),
  languageCode: Schema.String,
  name: Schema.String,
}).annotate({
  identifier: 'Language',
});
export const ClanCapitalDistrict = WireStruct({
  districtHallLevel: Schema.Number.check(Schema.isInt()),
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'ClanCapitalDistrict',
});
export const ClanCapital = WireStruct({
  capitalHallLevel: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  clanGoldSinkTotal: Schema.Number.check(Schema.isInt()).annotate({
    format: 'int64',
  }),
  districts: Schema.optionalKey(Schema.Array(ClanCapitalDistrict)),
}).annotate({
  identifier: 'ClanCapital',
});
export const IconUrls = WireStruct({
  large: Schema.optionalKey(Schema.String),
  medium: Schema.optionalKey(Schema.String),
  small: Schema.optionalKey(Schema.String),
  tiny: Schema.optionalKey(Schema.String),
}).annotate({
  identifier: 'IconUrls',
});
export const Label = WireStruct({
  iconUrls: Schema.optionalKey(IconUrls),
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'Label',
});
export const Location = WireStruct({
  countryCode: Schema.optionalKey(Schema.String),
  id: Schema.Number.check(Schema.isInt()),
  isCountry: Schema.Boolean,
  name: Schema.String,
}).annotate({
  identifier: 'Location',
});
export const League = WireStruct({
  iconUrls: Schema.optionalKey(IconUrls),
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'League',
});
export const LeagueTier = WireStruct({
  iconUrls: Schema.optionalKey(IconUrls),
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'LeagueTier',
});
export const PlayerHouseElement = WireStruct({
  id: Schema.Number.check(Schema.isInt()),
  type: PlayerHouseElementType,
}).annotate({
  identifier: 'PlayerHouseElement',
});
export const PlayerHouse = WireStruct({
  elements: Schema.optionalKey(Schema.Array(PlayerHouseElement)),
}).annotate({
  identifier: 'PlayerHouse',
});
export const ClanMember = WireStruct({
  builderBaseLeague: Schema.optionalKey(BuilderBaseLeague),
  builderBaseTrophies: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  clanRank: Schema.Number.check(Schema.isInt()),
  donations: Schema.Number.check(Schema.isInt()),
  donationsReceived: Schema.Number.check(Schema.isInt()),
  expLevel: Schema.Number.check(Schema.isInt()),
  league: Schema.optionalKey(League),
  leagueTier: Schema.optionalKey(LeagueTier),
  name: Schema.String,
  playerHouse: Schema.optionalKey(PlayerHouse),
  previousClanRank: Schema.Number.check(Schema.isInt()),
  role: ClanRole,
  tag: Schema.String,
  townHallLevel: Schema.Number.check(Schema.isInt()),
  trophies: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanMember',
});
export const WarLeague = WireStruct({
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'WarLeague',
});
export const Clan = WireStruct({
  badgeUrls: Schema.optionalKey(BadgeUrls),
  capitalLeague: Schema.optionalKey(CapitalLeague),
  chatLanguage: Schema.optionalKey(Language),
  clanBuilderBasePoints: Schema.optionalKey(
    Schema.Number.check(Schema.isInt()),
  ),
  clanCapital: ClanCapital,
  clanCapitalPoints: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  clanLevel: Schema.Number.check(Schema.isInt()),
  clanPoints: Schema.Number.check(Schema.isInt()),
  description: Schema.optionalKey(Schema.String),
  isFamilyFriendly: Schema.optionalKey(Schema.Boolean),
  isWarLogPublic: Schema.optionalKey(Schema.Boolean),
  labels: Schema.optionalKey(Schema.Array(Label)),
  location: Schema.optionalKey(Location),
  memberList: Schema.optionalKey(Schema.Array(ClanMember)),
  members: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  requiredBuilderBaseTrophies: Schema.optionalKey(
    Schema.Number.check(Schema.isInt()),
  ),
  requiredLeagueTier: Schema.optionalKey(LeagueTier),
  requiredTownhallLevel: Schema.optionalKey(
    Schema.Number.check(Schema.isInt()),
  ),
  requiredTrophies: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  tag: Schema.String,
  type: ClanType,
  warFrequency: Schema.optionalKey(WarFrequency),
  warLeague: Schema.optionalKey(WarLeague),
  warLosses: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  warTies: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  warWinStreak: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  warWins: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
}).annotate({
  identifier: 'Clan',
});
export const ClanBuilderBaseRanking = WireStruct({
  badgeUrls: Schema.optionalKey(BadgeUrls),
  clanBuilderBasePoints: Schema.Number.check(Schema.isInt()),
  clanLevel: Schema.Number.check(Schema.isInt()),
  // Worldwide leaderboards include clans with no selected location.
  location: Schema.optionalKey(Location),
  members: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  previousRank: Schema.Number.check(Schema.isInt()),
  rank: Schema.Number.check(Schema.isInt()),
  tag: Schema.String,
}).annotate({
  identifier: 'ClanBuilderBaseRanking',
});
export const ClanBuilderBaseRankingListResponse = WireStruct({
  items: Schema.Array(ClanBuilderBaseRanking),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'ClanBuilderBaseRankingListResponse',
});
export const ClanCapitalRanking = WireStruct({
  badgeUrls: Schema.optionalKey(BadgeUrls),
  clanCapitalPoints: Schema.Number.check(Schema.isInt()),
  clanLevel: Schema.Number.check(Schema.isInt()),
  // Global Capital rankings include clans without a configured location.
  location: Schema.optionalKey(Location),
  members: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  previousRank: Schema.Number.check(Schema.isInt()),
  rank: Schema.Number.check(Schema.isInt()),
  tag: Schema.String,
}).annotate({
  identifier: 'ClanCapitalRanking',
});
export const ClanCapitalRankingListResponse = WireStruct({
  items: Schema.Array(ClanCapitalRanking),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'ClanCapitalRankingListResponse',
});
export const ClanMembersResponse = WireStruct({
  items: Schema.Array(ClanMember),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'ClanMembersResponse',
});
export const ClanRanking = WireStruct({
  badgeUrls: Schema.optionalKey(BadgeUrls),
  clanLevel: Schema.Number.check(Schema.isInt()),
  clanPoints: Schema.Number.check(Schema.isInt()),
  // Unset clan locations are omitted on worldwide rankings.
  location: Schema.optionalKey(Location),
  members: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  previousRank: Schema.Number.check(Schema.isInt()),
  rank: Schema.Number.check(Schema.isInt()),
  tag: Schema.String,
}).annotate({
  identifier: 'ClanRanking',
});
export const ClanRankingListResponse = WireStruct({
  items: Schema.Array(ClanRanking),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'ClanRankingListResponse',
});
export const ClanReference = WireStruct({
  badgeUrls: Schema.optionalKey(BadgeUrls),
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'ClanReference',
});
export const ClanSearchItem = WireStruct({
  badgeUrls: Schema.optionalKey(BadgeUrls),
  capitalLeague: Schema.optionalKey(CapitalLeague),
  chatLanguage: Schema.optionalKey(Language),
  clanBuilderBasePoints: Schema.optionalKey(
    Schema.Number.check(Schema.isInt()),
  ),
  clanCapitalPoints: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  clanLevel: Schema.Number.check(Schema.isInt()),
  clanPoints: Schema.Number.check(Schema.isInt()),
  isFamilyFriendly: Schema.optionalKey(Schema.Boolean),
  isWarLogPublic: Schema.optionalKey(Schema.Boolean),
  labels: Schema.optionalKey(Schema.Array(Label)),
  location: Schema.optionalKey(Location),
  members: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  requiredBuilderBaseTrophies: Schema.optionalKey(
    Schema.Number.check(Schema.isInt()),
  ),
  requiredLeagueTier: Schema.optionalKey(LeagueTier),
  requiredTownhallLevel: Schema.optionalKey(
    Schema.Number.check(Schema.isInt()),
  ),
  requiredTrophies: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  tag: Schema.String,
  type: ClanType,
  warFrequency: Schema.optionalKey(WarFrequency),
  warLeague: Schema.optionalKey(WarLeague),
  warLosses: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  warTies: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  warWinStreak: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  warWins: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
}).annotate({
  identifier: 'ClanSearchItem',
});
export const ClanSearchResponse = WireStruct({
  items: Schema.Array(ClanSearchItem),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'ClanSearchResponse',
});
export const ClanWarAttack = WireStruct({
  attackerTag: Schema.String,
  defenderTag: Schema.String,
  destructionPercentage: Schema.Number.check(Schema.isInt()),
  duration: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  order: Schema.Number.check(Schema.isInt()),
  stars: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanWarAttack',
});
export const ClanWarMember = WireStruct({
  attacks: Schema.optionalKey(Schema.Array(ClanWarAttack)),
  bestOpponentAttack: Schema.optionalKey(ClanWarAttack),
  mapPosition: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  opponentAttacks: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  tag: Schema.String,
  townhallLevel: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanWarMember',
});
export const WarClan = WireStruct({
  attacks: Schema.Number.check(Schema.isInt()),
  badgeUrls: BadgeUrls,
  clanLevel: Schema.Number.check(Schema.isInt()),
  destructionPercentage: Schema.Finite,
  members: Schema.optionalKey(Schema.Array(ClanWarMember)),
  name: Schema.String,
  stars: Schema.Number.check(Schema.isInt()),
  tag: Schema.String,
}).annotate({
  identifier: 'WarClan',
});
export const NotInWarClan = WireStruct({
  attacks: Schema.Number.check(Schema.isInt()),
  badgeUrls: BadgeUrls,
  clanLevel: Schema.Number.check(Schema.isInt()),
  destructionPercentage: Schema.Finite,
  stars: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'NotInWarClan',
});
export const NotInWar = WireStruct({
  clan: Schema.optionalKey(NotInWarClan),
  opponent: Schema.optionalKey(NotInWarClan),
  state: Schema.Literal('notInWar'),
}).annotate({
  identifier: 'NotInWar',
});
export const ActiveClanWar = WireStruct({
  attacksPerMember: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  battleModifier: Schema.optionalKey(BattleModifier),
  clan: WarClan,
  endTime: Schema.String,
  opponent: WarClan,
  preparationStartTime: Schema.String,
  startTime: Schema.String,
  state: Schema.Literals(['preparation', 'inWar', 'warEnded']),
  teamSize: Schema.Int.check(Schema.isGreaterThan(0)),
  warStartTime: Schema.optionalKey(Schema.String),
}).annotate({ identifier: 'ActiveClanWar' });
// List ActiveClanWar first so OpenAPI/Scalar docs default to active wars.
export const ClanWar = Schema.Union([ActiveClanWar, NotInWar]).annotate({
  identifier: 'ClanWar',
});
export const ClanWarLeagueClanMember = WireStruct({
  name: Schema.String,
  tag: Schema.String,
  townHallLevel: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanWarLeagueClanMember',
});
export const ClanWarLeagueClan = WireStruct({
  badgeUrls: Schema.optionalKey(BadgeUrls),
  clanLevel: Schema.Number.check(Schema.isInt()),
  members: Schema.optionalKey(Schema.Array(ClanWarLeagueClanMember)),
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'ClanWarLeagueClan',
});
export const ClanWarLeagueRound = WireStruct({
  warTags: Schema.optionalKey(Schema.Array(Schema.String)),
}).annotate({
  identifier: 'ClanWarLeagueRound',
});
export const ClanWarLeagueGroup = WireStruct({
  clans: Schema.optionalKey(Schema.Array(ClanWarLeagueClan)),
  rounds: Schema.optionalKey(Schema.Array(ClanWarLeagueRound)),
  season: Schema.optionalKey(Schema.String),
  state: ClanWarLeagueGroupState,
}).annotate({
  identifier: 'ClanWarLeagueGroup',
});
export const WarLogClan = WireStruct({
  attacks: Schema.Number.check(Schema.isInt()),
  badgeUrls: BadgeUrls,
  clanLevel: Schema.Number.check(Schema.isInt()),
  destructionPercentage: Schema.Finite,
  expEarned: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  stars: Schema.Number.check(Schema.isInt()),
  tag: Schema.String,
}).annotate({
  identifier: 'WarLogClan',
});
export const WarLogOpponent = WireStruct({
  badgeUrls: BadgeUrls,
  clanLevel: Schema.Number.check(Schema.isInt()),
  destructionPercentage: Schema.Finite,
  // Omitted on CWL season summary entries in the war log.
  name: Schema.optionalKey(Schema.String),
  stars: Schema.Number.check(Schema.isInt()),
  // Omitted on CWL season summary entries in the war log.
  tag: Schema.optionalKey(Schema.String),
}).annotate({
  identifier: 'WarLogOpponent',
});
export const ClanWarLogEntry = WireStruct({
  attacksPerMember: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  battleModifier: Schema.optionalKey(BattleModifier),
  clan: WarLogClan,
  endTime: Schema.String,
  opponent: WarLogOpponent,
  // Null on CWL season summary entries in the war log.
  result: Schema.optionalKey(Schema.Union([WarResult, Schema.Null])),
  teamSize: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanWarLogEntry',
});
export const ClanWarLogResponse = WireStruct({
  items: Schema.Array(ClanWarLogEntry),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'ClanWarLogResponse',
});
export const ClientErrorResponse = WireStruct({
  detail: Schema.optionalKey(
    Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
  ),
  message: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  reason: Schema.String,
  type: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
}).annotate({
  identifier: 'ClientErrorResponse',
});
export const GoldPassSeason = WireStruct({
  endTime: Schema.String,
  startTime: Schema.String,
}).annotate({
  identifier: 'GoldPassSeason',
});
export const LabelListResponse = WireStruct({
  items: Schema.Array(Label),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'LabelListResponse',
});
export const LeagueBattleLogEntry = WireStruct({
  creationTime: Schema.String,
  destructionPercentage: Schema.Number.check(Schema.isInt()),
  opponentName: Schema.String,
  opponentPlayerTag: Schema.String,
  stars: Schema.Number.check(Schema.isInt()),
  trophies: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'LeagueBattleLogEntry',
});
export const LeagueGroupMember = WireStruct({
  attackLoseCount: Schema.Number.check(Schema.isInt()),
  attackWinCount: Schema.Number.check(Schema.isInt()),
  clanName: Schema.Union([Schema.String, Schema.Null]),
  clanTag: Schema.Union([Schema.String, Schema.Null]),
  defenseLoseCount: Schema.Number.check(Schema.isInt()),
  defenseWinCount: Schema.Number.check(Schema.isInt()),
  leagueTrophies: Schema.Number.check(Schema.isInt()),
  playerName: Schema.String,
  playerTag: Schema.String,
}).annotate({
  identifier: 'LeagueGroupMember',
});
export const LeagueGroup = WireStruct({
  attackLogs: Schema.optionalKey(Schema.Array(LeagueBattleLogEntry)),
  defenseLogs: Schema.optionalKey(Schema.Array(LeagueBattleLogEntry)),
  members: Schema.optionalKey(Schema.Array(LeagueGroupMember)),
}).annotate({
  identifier: 'LeagueGroup',
});
export const LeagueSeasonResult = WireStruct({
  attackLosses: Schema.Number.check(Schema.isInt()),
  attackStars: Schema.Number.check(Schema.isInt()),
  attackWins: Schema.Number.check(Schema.isInt()),
  defenseLosses: Schema.Number.check(Schema.isInt()),
  defenseStars: Schema.Number.check(Schema.isInt()),
  defenseWins: Schema.Number.check(Schema.isInt()),
  leagueSeasonId: Schema.Union([
    Schema.Number.check(Schema.isInt()).annotate({ format: 'int64' }),
    Schema.String,
  ]),
  leagueTierId: Schema.Number.check(Schema.isInt()),
  leagueTrophies: Schema.Number.check(Schema.isInt()),
  maxBattles: Schema.Number.check(Schema.isInt()),
  placement: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'LeagueSeasonResult',
});
export const LeagueHistoryResponse = WireStruct({
  items: Schema.Array(LeagueSeasonResult),
}).annotate({
  identifier: 'LeagueHistoryResponse',
});
export const LeagueSeason = WireStruct({ id: Schema.String }).annotate({
  identifier: 'LeagueSeason',
});
export const LeagueSeasonListResponse = WireStruct({
  items: Schema.Array(LeagueSeason),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'LeagueSeasonListResponse',
});
export const LeagueTierListResponse = WireStruct({
  items: Schema.Array(LeagueTier),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'LeagueTierListResponse',
});
export const LegendLeagueTournamentSeasonResult = WireStruct({
  id: Schema.optionalKey(Schema.String),
  rank: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  trophies: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
}).annotate({
  identifier: 'LegendLeagueTournamentSeasonResult',
});
export const LocationListResponse = WireStruct({
  items: Schema.Array(Location),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'LocationListResponse',
});
export const PlayerAchievementProgress = WireStruct({
  completionInfo: Schema.optionalKey(
    Schema.Union([Schema.String, Schema.Null]),
  ),
  info: Schema.optionalKey(Schema.String),
  name: Schema.String,
  stars: Schema.Number.check(Schema.isInt()),
  target: Schema.Number.check(Schema.isInt()),
  value: Schema.Number.check(Schema.isInt()),
  village: VillageType,
}).annotate({
  identifier: 'PlayerAchievementProgress',
});
export const PlayerClan = WireStruct({
  badgeUrls: Schema.optionalKey(BadgeUrls),
  clanLevel: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'PlayerClan',
});
export const PlayerItemLevel = WireStruct({
  equipment: Schema.optionalKey(
    Schema.Array(
      Schema.suspend(
        (): Schema.Codec<
          PlayerItemLevelWire,
          PlayerItemLevelWire,
          never,
          never
        > => PlayerItemLevel,
      ),
    ),
  ),
  level: Schema.Number.check(Schema.isInt()),
  maxLevel: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  superTroopIsActive: Schema.optionalKey(Schema.Boolean),
  village: VillageType,
}).annotate({
  identifier: 'PlayerItemLevel',
});
export const PlayerLegendStatistics = WireStruct({
  bestBuilderBaseSeason: Schema.optionalKey(LegendLeagueTournamentSeasonResult),
  bestSeason: Schema.optionalKey(LegendLeagueTournamentSeasonResult),
  currentSeason: Schema.optionalKey(LegendLeagueTournamentSeasonResult),
  legendTrophies: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  previousBuilderBaseSeason: Schema.optionalKey(
    LegendLeagueTournamentSeasonResult,
  ),
  previousSeason: Schema.optionalKey(LegendLeagueTournamentSeasonResult),
}).annotate({
  identifier: 'PlayerLegendStatistics',
});
export const Player = WireStruct({
  achievements: Schema.optionalKey(Schema.Array(PlayerAchievementProgress)),
  attackWins: Schema.Number.check(Schema.isInt()),
  bestBuilderBaseTrophies: Schema.optionalKey(
    Schema.Number.check(Schema.isInt()),
  ),
  bestTrophies: Schema.Number.check(Schema.isInt()),
  builderBaseLeague: Schema.optionalKey(BuilderBaseLeague),
  builderBaseTrophies: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  builderHallLevel: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  clan: Schema.optionalKey(PlayerClan),
  clanCapitalContributions: Schema.optionalKey(
    Schema.Number.check(Schema.isInt()),
  ),
  currentLeagueGroupTag: Schema.optionalKey(Schema.String),
  currentLeagueSeasonId: Schema.optionalKey(
    Schema.Number.check(Schema.isInt()).annotate({ format: 'int64' }),
  ),
  defenseWins: Schema.Number.check(Schema.isInt()),
  donations: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  donationsReceived: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  expLevel: Schema.Number.check(Schema.isInt()),
  heroEquipment: Schema.optionalKey(Schema.Array(PlayerItemLevel)),
  heroes: Schema.optionalKey(Schema.Array(PlayerItemLevel)),
  labels: Schema.optionalKey(Schema.Array(Label)),
  league: Schema.optionalKey(League),
  leagueTier: Schema.optionalKey(LeagueTier),
  legendStatistics: Schema.optionalKey(PlayerLegendStatistics),
  name: Schema.String,
  playerHouse: Schema.optionalKey(PlayerHouse),
  previousLeagueGroupTag: Schema.optionalKey(Schema.String),
  previousLeagueSeasonId: Schema.optionalKey(
    Schema.Number.check(Schema.isInt()).annotate({ format: 'int64' }),
  ),
  role: Schema.optionalKey(ClanRole),
  spells: Schema.optionalKey(Schema.Array(PlayerItemLevel)),
  tag: Schema.String,
  townHallLevel: Schema.Number.check(Schema.isInt()),
  townHallWeaponLevel: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  troops: Schema.optionalKey(Schema.Array(PlayerItemLevel)),
  trophies: Schema.Number.check(Schema.isInt()),
  warPreference: Schema.optionalKey(WarPreference),
  warStars: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'Player',
});
export const PlayerBuilderBaseRanking = WireStruct({
  builderBaseLeague: Schema.optionalKey(BuilderBaseLeague),
  builderBaseTrophies: Schema.Number.check(Schema.isInt()),
  clan: Schema.optionalKey(ClanReference),
  expLevel: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  previousRank: Schema.Number.check(Schema.isInt()),
  rank: Schema.Number.check(Schema.isInt()),
  tag: Schema.String,
}).annotate({
  identifier: 'PlayerBuilderBaseRanking',
});
export const PlayerBuilderBaseRankingListResponse = WireStruct({
  items: Schema.Array(PlayerBuilderBaseRanking),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'PlayerBuilderBaseRankingListResponse',
});
export const PlayerRanking = WireStruct({
  attackWins: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  clan: Schema.optionalKey(ClanReference),
  defenseWins: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  expLevel: Schema.Number.check(Schema.isInt()),
  league: Schema.optionalKey(League),
  leagueTier: Schema.optionalKey(LeagueTier),
  name: Schema.String,
  previousRank: Schema.Number.check(Schema.isInt()),
  rank: Schema.Number.check(Schema.isInt()),
  tag: Schema.String,
  trophies: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'PlayerRanking',
});
export const PlayerRankingListResponse = WireStruct({
  items: Schema.Array(PlayerRanking),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'PlayerRankingListResponse',
});
export const PlayerSeasonRanking = WireStruct({
  attackWins: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  clan: Schema.optionalKey(ClanReference),
  defenseWins: Schema.optionalKey(Schema.Number.check(Schema.isInt())),
  expLevel: Schema.Number.check(Schema.isInt()),
  leagueTier: Schema.optionalKey(LeagueTier),
  name: Schema.String,
  rank: Schema.Number.check(Schema.isInt()),
  tag: Schema.String,
  trophies: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'PlayerSeasonRanking',
});
export const PlayerSeasonRankingListResponse = WireStruct({
  items: Schema.Array(PlayerSeasonRanking),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'PlayerSeasonRankingListResponse',
});
export const VerifyTokenRequest = WireStruct({
  token: Schema.String.annotate({ examples: ['TOKEN'] }),
}).annotate({
  identifier: 'VerifyTokenRequest',
});
export const VerifyTokenResponse = WireStruct({
  status: VerifyTokenStatus,
  tag: Schema.String,
  token: Schema.String,
}).annotate({
  identifier: 'VerifyTokenResponse',
});
export const WarLeagueListResponse = WireStruct({
  items: Schema.Array(WarLeague),
  paging: Schema.optionalKey(Paging),
}).annotate({
  identifier: 'WarLeagueListResponse',
});
