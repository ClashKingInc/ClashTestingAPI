// Authoritative wire schemas. Edit here; OpenAPI and types are derived outputs.
import { Schema } from 'effect';
export interface PlayerItemLevelWire {
  readonly name: string;
  readonly level: number;
  readonly maxLevel: number;
  readonly village: string;
  readonly superTroopIsActive?: boolean | null;
  readonly equipment?: readonly PlayerItemLevelWire[] | null;
}
export const BadgeUrls = Schema.Struct({
  large: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  medium: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  small: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
}).annotate({
  identifier: 'BadgeUrls',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const Resource = Schema.Struct({
  amount: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'Resource',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const BattleLogEntry = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const CursorPaging = Schema.Struct({
  after: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  before: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
}).annotate({
  identifier: 'CursorPaging',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const Paging = Schema.Struct({
  cursors: Schema.optionalKey(CursorPaging),
}).annotate({
  identifier: 'Paging',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const BattleLogResponse = Schema.Struct({
  items: Schema.Array(BattleLogEntry),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'BattleLogResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const BuilderBaseLeague = Schema.Struct({
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'BuilderBaseLeague',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const BuilderBaseLeagueListResponse = Schema.Struct({
  items: Schema.Array(BuilderBaseLeague),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'BuilderBaseLeagueListResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const CapitalLeague = Schema.Struct({
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'CapitalLeague',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const CapitalLeagueListResponse = Schema.Struct({
  items: Schema.Array(CapitalLeague),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'CapitalLeagueListResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanCapitalRaidSeasonClanInfo = Schema.Struct({
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
  level: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'ClanCapitalRaidSeasonClanInfo',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanCapitalRaidSeasonAttacker = Schema.Struct({
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'ClanCapitalRaidSeasonAttacker',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanCapitalRaidSeasonAttack = Schema.Struct({
  attacker: ClanCapitalRaidSeasonAttacker,
  destructionPercent: Schema.Number.check(Schema.isInt()),
  stars: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanCapitalRaidSeasonAttack',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanCapitalRaidSeasonDistrict = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanCapitalRaidSeasonAttackLogEntry = Schema.Struct({
  attackCount: Schema.Number.check(Schema.isInt()),
  defender: ClanCapitalRaidSeasonClanInfo,
  districtCount: Schema.Number.check(Schema.isInt()),
  districts: Schema.optionalKey(Schema.Array(ClanCapitalRaidSeasonDistrict)),
  districtsDestroyed: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanCapitalRaidSeasonAttackLogEntry',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanCapitalRaidSeasonDefenseLogEntry = Schema.Struct({
  attackCount: Schema.Number.check(Schema.isInt()),
  attacker: ClanCapitalRaidSeasonClanInfo,
  districtCount: Schema.Number.check(Schema.isInt()),
  districts: Schema.optionalKey(Schema.Array(ClanCapitalRaidSeasonDistrict)),
  districtsDestroyed: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanCapitalRaidSeasonDefenseLogEntry',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanCapitalRaidSeasonMember = Schema.Struct({
  attackLimit: Schema.Number.check(Schema.isInt()),
  attacks: Schema.Number.check(Schema.isInt()),
  bonusAttackLimit: Schema.Number.check(Schema.isInt()),
  capitalResourcesLooted: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'ClanCapitalRaidSeasonMember',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanCapitalRaidSeason = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const CapitalRaidSeasonsResponse = Schema.Struct({
  items: Schema.Array(ClanCapitalRaidSeason),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'CapitalRaidSeasonsResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const Language = Schema.Struct({
  id: Schema.Number.check(Schema.isInt()),
  languageCode: Schema.String,
  name: Schema.String,
}).annotate({
  identifier: 'Language',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanCapitalDistrict = Schema.Struct({
  districtHallLevel: Schema.Number.check(Schema.isInt()),
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'ClanCapitalDistrict',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanCapital = Schema.Struct({
  capitalHallLevel: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  clanGoldSinkTotal: Schema.Number.check(Schema.isInt()).annotate({
    format: 'int64',
  }),
  districts: Schema.optionalKey(Schema.Array(ClanCapitalDistrict)),
}).annotate({
  identifier: 'ClanCapital',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const IconUrls = Schema.Struct({
  large: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  medium: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  small: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  tiny: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
}).annotate({
  identifier: 'IconUrls',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const Label = Schema.Struct({
  iconUrls: Schema.optionalKey(Schema.Union([IconUrls, Schema.Null])),
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'Label',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const Location = Schema.Struct({
  countryCode: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  id: Schema.Number.check(Schema.isInt()),
  isCountry: Schema.Boolean,
  localizedName: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  name: Schema.String,
}).annotate({
  identifier: 'Location',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const League = Schema.Struct({
  iconUrls: Schema.optionalKey(Schema.Union([IconUrls, Schema.Null])),
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'League',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const PlayerHouseElement = Schema.Struct({
  id: Schema.Number.check(Schema.isInt()),
  type: Schema.String,
}).annotate({
  identifier: 'PlayerHouseElement',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const PlayerHouse = Schema.Struct({
  elements: Schema.optionalKey(Schema.Array(PlayerHouseElement)),
}).annotate({
  identifier: 'PlayerHouse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanMember = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const WarLeague = Schema.Struct({
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'WarLeague',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const Clan = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanBuilderBaseRanking = Schema.Struct({
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
  clanBuilderBasePoints: Schema.Number.check(Schema.isInt()),
  clanLevel: Schema.Number.check(Schema.isInt()),
  clanPoints: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  location: Location,
  members: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  previousRank: Schema.Number.check(Schema.isInt()),
  rank: Schema.Number.check(Schema.isInt()),
  tag: Schema.String,
}).annotate({
  identifier: 'ClanBuilderBaseRanking',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanBuilderBaseRankingListResponse = Schema.Struct({
  items: Schema.Array(ClanBuilderBaseRanking),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'ClanBuilderBaseRankingListResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanCapitalRanking = Schema.Struct({
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
  clanCapitalPoints: Schema.Number.check(Schema.isInt()),
  clanLevel: Schema.Number.check(Schema.isInt()),
  location: Location,
  members: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  previousRank: Schema.Number.check(Schema.isInt()),
  rank: Schema.Number.check(Schema.isInt()),
  tag: Schema.String,
}).annotate({
  identifier: 'ClanCapitalRanking',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanCapitalRankingListResponse = Schema.Struct({
  items: Schema.Array(ClanCapitalRanking),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'ClanCapitalRankingListResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanMembersResponse = Schema.Struct({
  items: Schema.Array(ClanMember),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'ClanMembersResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanRanking = Schema.Struct({
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
  clanLevel: Schema.Number.check(Schema.isInt()),
  clanPoints: Schema.Number.check(Schema.isInt()),
  location: Location,
  members: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
  previousRank: Schema.Number.check(Schema.isInt()),
  rank: Schema.Number.check(Schema.isInt()),
  tag: Schema.String,
}).annotate({
  identifier: 'ClanRanking',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanRankingListResponse = Schema.Struct({
  items: Schema.Array(ClanRanking),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'ClanRankingListResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanReference = Schema.Struct({
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
  clanLevel: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'ClanReference',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanSearchItem = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanSearchResponse = Schema.Struct({
  items: Schema.Array(ClanSearchItem),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'ClanSearchResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanWarAttack = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanWarMember = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const WarClan = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanWar = Schema.Struct({
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
  state: Schema.String,
  teamSize: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
}).annotate({
  identifier: 'ClanWar',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanWarLeagueClanMember = Schema.Struct({
  name: Schema.String,
  tag: Schema.String,
  townHallLevel: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'ClanWarLeagueClanMember',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanWarLeagueClan = Schema.Struct({
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
  clanLevel: Schema.Number.check(Schema.isInt()),
  members: Schema.optionalKey(Schema.Array(ClanWarLeagueClanMember)),
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'ClanWarLeagueClan',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanWarLeagueRound = Schema.Struct({
  warTags: Schema.optionalKey(Schema.Array(Schema.String)),
}).annotate({
  identifier: 'ClanWarLeagueRound',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanWarLeagueGroup = Schema.Struct({
  clans: Schema.optionalKey(Schema.Array(ClanWarLeagueClan)),
  rounds: Schema.optionalKey(Schema.Array(ClanWarLeagueRound)),
  season: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  state: Schema.String,
  tag: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
}).annotate({
  identifier: 'ClanWarLeagueGroup',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanWarLogEntry = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClanWarLogResponse = Schema.Struct({
  items: Schema.Array(ClanWarLogEntry),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'ClanWarLogResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const ClientErrorResponse = Schema.Struct({
  detail: Schema.optionalKey(
    Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
  ),
  message: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  reason: Schema.String,
  type: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
}).annotate({
  identifier: 'ClientErrorResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const GoldPassSeason = Schema.Struct({
  endTime: Schema.String,
  startTime: Schema.String,
}).annotate({
  identifier: 'GoldPassSeason',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const LabelListResponse = Schema.Struct({
  items: Schema.Array(Label),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'LabelListResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const LeagueBattleLogEntry = Schema.Struct({
  creationTime: Schema.String,
  destructionPercentage: Schema.Number.check(Schema.isInt()),
  opponentName: Schema.String,
  opponentPlayerTag: Schema.String,
  stars: Schema.Number.check(Schema.isInt()),
  trophies: Schema.Number.check(Schema.isInt()),
}).annotate({
  identifier: 'LeagueBattleLogEntry',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const LeagueGroupMember = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const LeagueGroup = Schema.Struct({
  attackLogs: Schema.optionalKey(Schema.Array(LeagueBattleLogEntry)),
  defenseLogs: Schema.optionalKey(Schema.Array(LeagueBattleLogEntry)),
  members: Schema.optionalKey(Schema.Array(LeagueGroupMember)),
}).annotate({
  identifier: 'LeagueGroup',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const LeagueSeasonResult = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const LeagueHistoryResponse = Schema.Struct({
  items: Schema.Array(LeagueSeasonResult),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'LeagueHistoryResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const LeagueSeason = Schema.Struct({ id: Schema.String }).annotate({
  identifier: 'LeagueSeason',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const LeagueSeasonListResponse = Schema.Struct({
  items: Schema.Array(LeagueSeason),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'LeagueSeasonListResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const LeagueTier = Schema.Struct({
  iconUrls: Schema.optionalKey(Schema.Union([IconUrls, Schema.Null])),
  id: Schema.Number.check(Schema.isInt()),
  name: Schema.String,
}).annotate({
  identifier: 'LeagueTier',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const LeagueTierListResponse = Schema.Struct({
  items: Schema.Array(LeagueTier),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'LeagueTierListResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const LegendLeagueTournamentSeasonResult = Schema.Struct({
  id: Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])),
  rank: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  trophies: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
}).annotate({
  identifier: 'LegendLeagueTournamentSeasonResult',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const LocationListResponse = Schema.Struct({
  items: Schema.Array(Location),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'LocationListResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const PlayerAchievementProgress = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const PlayerClan = Schema.Struct({
  badgeUrls: Schema.optionalKey(Schema.Union([BadgeUrls, Schema.Null])),
  clanLevel: Schema.optionalKey(
    Schema.Union([Schema.Number.check(Schema.isInt()), Schema.Null]),
  ),
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'PlayerClan',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const PlayerItemLevel = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const PlayerLegendStatistics = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const Player = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const PlayerBuilderBaseRanking = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const PlayerBuilderBaseRankingListResponse = Schema.Struct({
  items: Schema.Array(PlayerBuilderBaseRanking),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'PlayerBuilderBaseRankingListResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const PlayerRanking = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const PlayerRankingListResponse = Schema.Struct({
  items: Schema.Array(PlayerRanking),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'PlayerRankingListResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const PlayerSeasonRanking = Schema.Struct({
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
  parseOptions: { onExcessProperty: 'preserve' },
});
export const PlayerSeasonRankingListResponse = Schema.Struct({
  items: Schema.Array(PlayerSeasonRanking),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'PlayerSeasonRankingListResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const VerifyTokenRequest = Schema.Struct({
  token: Schema.String,
}).annotate({
  identifier: 'VerifyTokenRequest',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const VerifyTokenResponse = Schema.Struct({
  status: Schema.String,
  tag: Schema.String,
  token: Schema.String,
}).annotate({
  identifier: 'VerifyTokenResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
export const WarLeagueListResponse = Schema.Struct({
  items: Schema.Array(WarLeague),
  paging: Schema.optionalKey(Schema.Union([Paging, Schema.Null])),
}).annotate({
  identifier: 'WarLeagueListResponse',
  parseOptions: { onExcessProperty: 'preserve' },
});
