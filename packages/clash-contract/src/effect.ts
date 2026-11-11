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
  readonly village: string;
  readonly superTroopIsActive?: boolean | null;
  readonly equipment?: readonly PlayerItemLevelWire[] | null;
}
export const BadgeUrls = WireStruct({
  large: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  medium: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  small: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
}).annotate({
  identifier: 'BadgeUrls',
});
export const Resource = WireStruct({
  amount: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'Resource',
});
export const BattleLogEntry = WireStruct({
  armyShareCode: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  attack: Schema.Boolean,
  availableLoot: Schema.optionalKey(Schema.Array(Resource)),
  battleType: Schema.Literals(['ranked', 'legend', 'homeVillage']),
  destructionPercentage: Schema.Number.check(Schema.isInt()),
  extraLootedResources: Schema.optionalKey(Schema.Array(Resource)),
  lootedResources: Schema.optionalKey(Schema.Array(Resource)),
  opponentPlayerTag: Schema.String,
  stars: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'BattleLogEntry',
});
export const CursorPaging = WireStruct({
  after: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  before: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
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
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
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
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
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
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'CapitalLeagueListResponse',
});
export const ClanCapitalRaidSeasonClanInfo = WireStruct({
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
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
  state: Schema.String,
  totalAttacks: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanCapitalRaidSeason',
});
export const CapitalRaidSeasonsResponse = WireStruct({
  items: Schema.Array(ClanCapitalRaidSeason),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
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
  capitalHallLevel: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  clanGoldSinkTotal: Schema.Number.check(Schema.isInt()).annotate({
    format: 'int64',
  }),
  districts: Schema.optionalKey(Schema.Array(ClanCapitalDistrict)),
}).annotate({
  identifier: 'ClanCapital',
});
export const IconUrls = WireStruct({
  large: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  medium: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  small: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  tiny: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
}).annotate({
  identifier: 'IconUrls',
});
export const Label = WireStruct({
  iconUrls: Schema.optionalKey(Schema.Union([IconUrls, Schema.Null])),
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'Label',
});
export const Location = WireStruct({
  countryCode: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  id: Schema.Number.check(Schema.isInt()),
  isCountry: Schema.Boolean,
  localizedName: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  name: Schema.String,
}).annotate({
  identifier: 'Location',
});
export const League = WireStruct({
  iconUrls: Schema.optionalKey(Schema.Union([IconUrls, Schema.Null])),
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'League',
});
export const PlayerHouseElement = WireStruct({
  id: Schema.Number.check(Schema.isInt()),
  type: Schema.String,
}).annotate({
  identifier: 'PlayerHouseElement',
});
export const PlayerHouse = WireStruct({
  elements: Schema.optionalKey(Schema.Array(PlayerHouseElement)),
}).annotate({
  identifier: 'PlayerHouse',
});
export const ClanMember = WireStruct({
  builderBaseLeague: Schema.optionalKey(Schema.Union([League, Schema.Null])),
  builderBaseTrophies: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  clanRank: Schema.Number.check(Schema.isInt()),
  donations: Schema.Number.check(Schema.isInt()),
  donationsReceived: Schema.Number.check(Schema.isInt()),
  expLevel: Schema.Number.check(Schema.isInt()),
  league: Schema.optionalKey(Schema.Union([League, Schema.Null])),
  name: Schema.String,
  playerHouse: Schema.optionalKey(Schema.Union([PlayerHouse, Schema.Null])),
  previousClanRank: Schema.Number.check(Schema.isInt()),
  role: Schema.String,
  tag: Schema.String,
  townHallLevel: Schema.Number.check(Schema.isInt()),
  trophies: Schema.Number.check(Schema.isInt()),
  versusTrophies: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
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
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
  capitalLeague: Schema.optionalKey(Schema.Union([CapitalLeague, Schema.Null])),
  chatLanguage: Schema.optionalKey(Schema.Union([Language, Schema.Null])),
  clanBuilderBasePoints: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  clanCapital: ClanCapital,
  clanCapitalPoints: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  clanLevel: Schema.Number.check(Schema.isInt()),
  clanPoints: Schema.Number.check(Schema.isInt()),
  clanVersusPoints: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  description: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  isFamilyFriendly: Schema.optionalKey(
    Schema.Union([Schema.Boolean, Schema.Null]),
  ),
  isWarLogPublic: Schema.optionalKey(
    Schema.Union([Schema.Boolean, Schema.Null]),
  ),
  labels: Schema.optionalKey(Schema.Array(Label)),
  location: Schema.optionalKey(Schema.Union([Location, Schema.Null])),
  memberList: Schema.optionalKey(Schema.Array(ClanMember)),
  members: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  requiredBuilderBaseTrophies: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  requiredTownhallLevel: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  requiredTrophies: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  requiredVersusTrophies: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  tag: Schema.String,
  type: Schema.Literals(['open', 'inviteOnly', 'closed']),
  warFrequency: Schema.optionalKey(
    Schema.Union([
      Schema.Literals([
        'unknown',
        'always',
        'moreThanOncePerWeek',
        'oncePerWeek',
        'lessThanOncePerWeek',
        'never',
        'any',
      ]),
      Schema.Null,
    ]),
  ),
  warLeague: Schema.optionalKey(Schema.Union([WarLeague, Schema.Null])),
  warLosses: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  warTies: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  warWinStreak: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  warWins: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
}).annotate({
  identifier: 'Clan',
});
export const ClanBuilderBaseRanking = WireStruct({
  // Retained in archived leaderboards before Builder Base renamed its points.
  clanVersusPoints: Schema.optionalKey(Schema.Union([Schema.Int, Schema.Null])),
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
  clanBuilderBasePoints: Schema.Number.check(Schema.isInt()),
  clanLevel: Schema.Number.check(Schema.isInt()),
  clanPoints: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  // Worldwide leaderboards include clans with no selected location. Keep
  // those rows: a missing location must not reject all 200 ranking entries.
  location: Schema.optionalKey(Schema.Union([Location, Schema.Null])),
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
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'ClanBuilderBaseRankingListResponse',
});
export const ClanCapitalRanking = WireStruct({
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
  clanCapitalPoints: Schema.Number.check(Schema.isInt()),
  clanLevel: Schema.Number.check(Schema.isInt()),
  // Global Capital rankings include clans without a configured location.
  // Preserve those entries instead of rejecting the complete leaderboard.
  location: Schema.optionalKey(Schema.Union([Location, Schema.Null])),
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
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'ClanCapitalRankingListResponse',
});
export const ClanMembersResponse = WireStruct({
  items: Schema.Array(ClanMember),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'ClanMembersResponse',
});
export const ClanRanking = WireStruct({
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
  clanLevel: Schema.Number.check(Schema.isInt()),
  clanPoints: Schema.Number.check(Schema.isInt()),
  // Unset clan locations are omitted on worldwide rankings.
  location: Schema.optionalKey(Schema.Union([Location, Schema.Null])),
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
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'ClanRankingListResponse',
});
export const ClanReference = WireStruct({
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
  clanLevel: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'ClanReference',
});
export const ClanSearchItem = WireStruct({
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
  capitalLeague: Schema.optionalKey(Schema.Union([CapitalLeague, Schema.Null])),
  chatLanguage: Schema.optionalKey(Schema.Union([Language, Schema.Null])),
  clanBuilderBasePoints: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  clanCapitalPoints: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  clanLevel: Schema.Number.check(Schema.isInt()),
  clanPoints: Schema.Number.check(Schema.isInt()),
  clanVersusPoints: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  isFamilyFriendly: Schema.optionalKey(
    Schema.Union([Schema.Boolean, Schema.Null]),
  ),
  isWarLogPublic: Schema.optionalKey(
    Schema.Union([Schema.Boolean, Schema.Null]),
  ),
  labels: Schema.optionalKey(Schema.Array(Label)),
  location: Schema.optionalKey(Schema.Union([Location, Schema.Null])),
  members: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  requiredBuilderBaseTrophies: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  requiredTownhallLevel: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  requiredTrophies: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  requiredVersusTrophies: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  tag: Schema.String,
  type: Schema.Literals(['open', 'inviteOnly', 'closed']),
  warFrequency: Schema.optionalKey(
    Schema.Union([
      Schema.Literals([
        'unknown',
        'always',
        'moreThanOncePerWeek',
        'oncePerWeek',
        'lessThanOncePerWeek',
        'never',
        'any',
      ]),
      Schema.Null,
    ]),
  ),
  warLeague: Schema.optionalKey(Schema.Union([WarLeague, Schema.Null])),
  warLosses: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  warTies: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  warWinStreak: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  warWins: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
}).annotate({
  identifier: 'ClanSearchItem',
});
export const ClanSearchResponse = WireStruct({
  items: Schema.Array(ClanSearchItem),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'ClanSearchResponse',
});
export const ClanWarAttack = WireStruct({
  attackerTag: Schema.String,
  defenderTag: Schema.String,
  destructionPercentage: Schema.Number.check(Schema.isInt()),
  duration: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  order: Schema.Number.check(Schema.isInt()),
  stars: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanWarAttack',
});
export const ClanWarMember = WireStruct({
  attacks: Schema.optionalKey(Schema.Array(ClanWarAttack)),
  bestOpponentAttack: Schema.optionalKey(
    Schema.Union([ClanWarAttack, Schema.Null]),
  ),
  mapPosition: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  opponentAttacks: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  tag: Schema.String,
  townhallLevel: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanWarMember',
});
export const WarClan = WireStruct({
  attacks: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
  clanLevel: Schema.Number.check(Schema.isInt()),
  destructionPercentage: Schema.optionalKey(
    Schema.Union([Schema.Number, Schema.Null]),
  ),
  expEarned: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  members: Schema.optionalKey(Schema.Array(ClanWarMember)),
  name: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  stars: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  tag: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
}).annotate({
  identifier: 'WarClan',
});
const WarFields = {
  warStartTime: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  attacksPerMember: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  battleModifier: Schema.optionalKey(
    Schema.Union([Schema.String, Schema.Null]),
  ),
  clan: Schema.optionalKey(Schema.Union([WarClan, Schema.Null])),
  endTime: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  opponent: Schema.optionalKey(Schema.Union([WarClan, Schema.Null])),
  preparationStartTime: Schema.optionalKey(
    Schema.Union([Schema.String, Schema.Null]),
  ),
  startTime: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  teamSize: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
};
// Keep empty notInWar placeholders valid without making active-war data optional.
export const ActiveClanWar = WireStruct({
  ...WarFields,
  state: Schema.Literals(['preparation', 'inWar', 'warEnded']),
  clan: WarClan,
  opponent: WarClan,
  teamSize: Schema.Int.check(Schema.isGreaterThan(0)),
  preparationStartTime: Schema.String,
  startTime: Schema.String,
  endTime: Schema.String,
}).annotate({ identifier: 'ActiveClanWar' });
export const ClanWar = Schema.Union([
  WireStruct({ state: Schema.Literal('notInWar') }),
  ActiveClanWar,
]).annotate({ identifier: 'ClanWar' });
export const ClanWarLeagueClanMember = WireStruct({
  name: Schema.String,
  tag: Schema.String,
  townHallLevel: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanWarLeagueClanMember',
});
export const ClanWarLeagueClan = WireStruct({
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
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
  season: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  state: Schema.String,
  tag: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
}).annotate({
  identifier: 'ClanWarLeagueGroup',
});
export const ClanWarLogEntry = WireStruct({
  attacksPerMember: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  battleModifier: Schema.optionalKey(
    Schema.Union([Schema.String, Schema.Null]),
  ),
  clan: WarClan,
  endTime: Schema.String,
  opponent: WarClan,
  result: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  teamSize: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanWarLogEntry',
});
export const ClanWarLogResponse = WireStruct({
  items: Schema.Array(ClanWarLogEntry),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
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
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
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
    Schema.Number.check(Schema.isInt()),
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
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'LeagueHistoryResponse',
});
export const LeagueSeason = WireStruct({ id: Schema.String }).annotate({
  identifier: 'LeagueSeason',
});
export const LeagueSeasonListResponse = WireStruct({
  items: Schema.Array(LeagueSeason),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'LeagueSeasonListResponse',
});
export const LeagueTier = WireStruct({
  iconUrls: Schema.optionalKey(Schema.Union([IconUrls, Schema.Null])),
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'LeagueTier',
});
export const LeagueTierListResponse = WireStruct({
  items: Schema.Array(LeagueTier),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'LeagueTierListResponse',
});
export const LegendLeagueTournamentSeasonResult = WireStruct({
  id: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  rank: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  trophies: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
}).annotate({
  identifier: 'LegendLeagueTournamentSeasonResult',
});
export const LocationListResponse = WireStruct({
  items: Schema.Array(Location),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'LocationListResponse',
});
export const PlayerAchievementProgress = WireStruct({
  completionInfo: Schema.optionalKey(
    Schema.Union([Schema.String, Schema.Null]),
  ),
  info: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  name: Schema.String,
  stars: Schema.Number.check(Schema.isInt()),
  target: Schema.Number.check(Schema.isInt()),
  value: Schema.Number.check(Schema.isInt()),
  village: Schema.String,
}).annotate({
  identifier: 'PlayerAchievementProgress',
});
export const PlayerClan = WireStruct({
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
  clanLevel: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'PlayerClan',
});
export const PlayerItemLevel = WireStruct({
  equipment: Schema.optionalKey(
    Schema.Union([
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
      Schema.Null,
    ]),
  ),
  level: Schema.Number.check(Schema.isInt()),
  maxLevel: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  superTroopIsActive: Schema.optionalKey(
    Schema.Union([Schema.Boolean, Schema.Null]),
  ),
  village: Schema.String,
}).annotate({
  identifier: 'PlayerItemLevel',
});
export const PlayerLegendStatistics = WireStruct({
  bestBuilderBaseSeason: Schema.optionalKey(
    Schema.Union([LegendLeagueTournamentSeasonResult, Schema.Null]),
  ),
  bestSeason: Schema.optionalKey(
    Schema.Union([LegendLeagueTournamentSeasonResult, Schema.Null]),
  ),
  currentSeason: Schema.optionalKey(
    Schema.Union([LegendLeagueTournamentSeasonResult, Schema.Null]),
  ),
  legendTrophies: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  previousBuilderBaseSeason: Schema.optionalKey(
    Schema.Union([LegendLeagueTournamentSeasonResult, Schema.Null]),
  ),
  previousSeason: Schema.optionalKey(
    Schema.Union([LegendLeagueTournamentSeasonResult, Schema.Null]),
  ),
}).annotate({
  identifier: 'PlayerLegendStatistics',
});
export const Player = WireStruct({
  achievements: Schema.optionalKey(Schema.Array(PlayerAchievementProgress)),
  attackWins: Schema.Number.check(Schema.isInt()),
  bestBuilderBaseTrophies: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  bestTrophies: Schema.Number.check(Schema.isInt()),
  builderBaseLeague: Schema.optionalKey(BuilderBaseLeague),
  builderBaseTrophies: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  builderHallLevel: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  clan: Schema.optionalKey(Schema.Union([PlayerClan, Schema.Null])),
  clanCapitalContributions: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  currentLeagueGroupTag: Schema.optionalKey(
    Schema.Union([Schema.String, Schema.Null]),
  ),
  currentLeagueSeasonId: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  defenseWins: Schema.Number.check(Schema.isInt()),
  donations: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  donationsReceived: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  expLevel: Schema.Number.check(Schema.isInt()),
  heroEquipment: Schema.optionalKey(Schema.Array(PlayerItemLevel)),
  heroes: Schema.optionalKey(Schema.Array(PlayerItemLevel)),
  labels: Schema.optionalKey(Schema.Array(Label)),
  league: Schema.optionalKey(Schema.Union([League, Schema.Null])),
  leagueTier: Schema.optionalKey(LeagueTier),
  legendStatistics: Schema.optionalKey(
    Schema.Union([PlayerLegendStatistics, Schema.Null]),
  ),
  name: Schema.String,
  playerHouse: Schema.optionalKey(Schema.Union([PlayerHouse, Schema.Null])),
  previousLeagueGroupTag: Schema.optionalKey(
    Schema.Union([Schema.String, Schema.Null]),
  ),
  previousLeagueSeasonId: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  role: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  spells: Schema.optionalKey(Schema.Array(PlayerItemLevel)),
  tag: Schema.String,
  townHallLevel: Schema.Number.check(Schema.isInt()),
  troops: Schema.optionalKey(Schema.Array(PlayerItemLevel)),
  trophies: Schema.Number.check(Schema.isInt()),
  warPreference: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  warStars: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'Player',
});
export const PlayerBuilderBaseRanking = WireStruct({
  // Older ranking fixtures retain these pre-Builder Base field names.
  versusTrophies: Schema.optionalKey(Schema.Union([Schema.Int, Schema.Null])),
  versusBattleWins: Schema.optionalKey(Schema.Union([Schema.Int, Schema.Null])),
  builderBaseLeague: Schema.optionalKey(BuilderBaseLeague),
  builderBaseTrophies: Schema.Number.check(Schema.isInt()),
  clan: Schema.optionalKey(Schema.Union([ClanReference, Schema.Null])),
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
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'PlayerBuilderBaseRankingListResponse',
});
export const PlayerRanking = WireStruct({
  attackWins: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  clan: Schema.optionalKey(Schema.Union([ClanReference, Schema.Null])),
  defenseWins: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  expLevel: Schema.Number.check(Schema.isInt()),
  league: Schema.optionalKey(Schema.Union([League, Schema.Null])),
  leagueTier: Schema.optionalKey(Schema.Union([LeagueTier, Schema.Null])),
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
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'PlayerRankingListResponse',
});
export const PlayerSeasonRanking = WireStruct({
  attackWins: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  clan: Schema.optionalKey(Schema.Union([ClanReference, Schema.Null])),
  defenseWins: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  expLevel: Schema.Number.check(Schema.isInt()),
  league: Schema.optionalKey(Schema.Union([League, Schema.Null])),
  leagueTier: Schema.optionalKey(Schema.Union([LeagueTier, Schema.Null])),
  name: Schema.String,
  previousRank: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  rank: Schema.Number.check(Schema.isInt()),
  tag: Schema.String,
  trophies: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'PlayerSeasonRanking',
});
export const PlayerSeasonRankingListResponse = WireStruct({
  items: Schema.Array(PlayerSeasonRanking),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'PlayerSeasonRankingListResponse',
});
export const VerifyTokenRequest = WireStruct({
  token: Schema.String,
}).annotate({
  identifier: 'VerifyTokenRequest',
});
export const VerifyTokenResponse = WireStruct({
  status: Schema.String,
  tag: Schema.String,
  token: Schema.String,
}).annotate({
  identifier: 'VerifyTokenResponse',
});
export const WarLeagueListResponse = WireStruct({
  items: Schema.Array(WarLeague),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'WarLeagueListResponse',
});
