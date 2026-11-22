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

const Int = Schema.Number.check(Schema.isInt());
const Int64 = Int.annotate({ format: 'int64' });
const Uri = Schema.String.annotate({ format: 'uri' });
const CompactTimestamp = Schema.String.check(
  Schema.isPattern(/^\d{8}T\d{6}\.\d{3}Z$/),
).annotate({
  description: 'UTC timestamp in YYYYMMDDTHHmmss.SSSZ format.',
  examples: ['20261119T165155.000Z'],
});
const IsoTimestamp = Schema.String.annotate({
  format: 'date-time',
  description:
    'ISO-8601 UTC timestamp (unlike most other Clash API timestamps, which use compact YYYYMMDDTHHmmss.SSSZ).',
  examples: ['2026-10-17T09:24:48Z'],
});
const Stars = Int.check(Schema.isBetween({ minimum: 0, maximum: 3 }));
const PercentInt = Int.check(Schema.isBetween({ minimum: 0, maximum: 100 }));
const PercentFloat = Schema.Finite.check(
  Schema.isBetween({ minimum: 0, maximum: 100 }),
);

const BattleModifier = Schema.Literals([
  'none',
  'hardMode',
  'minusOne',
  'minusTwo',
  'minusThree',
]);
const BattleType = Schema.Literals(['ranked', 'legend', 'homeVillage']);
const ClanCapitalRaidSeasonState = Schema.Literals(['ongoing', 'ended']);
const ClanRole = Schema.Literals([
  'member',
  'admin',
  'coLeader',
  'leader',
]).annotate({
  description:
    'Clan role. Note: "admin" represents Elder in-game, and "coLeader" is Co-Leader.',
});
const ClanType = Schema.Literals(['open', 'inviteOnly', 'closed']);
const ClanWarLeagueGroupState = Schema.Literals([
  'notInWar',
  'preparation',
  'inWar',
  'ended',
]);
const ItemVillageType = Schema.Literals(['home', 'builderBase']);
const PlayerHouseElementType = Schema.Literals([
  'ground',
  'walls',
  'roof',
  'decoration',
]).annotate({
  description:
    'Wire element slot type ("walls" and "decoration", not the official Swagger names FOOT/DECO).',
});
const VerifyTokenStatus = Schema.Literals(['ok', 'invalid']);
const VillageType = Schema.Literals(['home', 'builderBase', 'clanCapital']);
const WarFrequency = Schema.Literals([
  'unknown',
  'always',
  'moreThanOncePerWeek',
  'oncePerWeek',
  'lessThanOncePerWeek',
  'never',
]);
const WarPreference = Schema.Literals(['in', 'out']);
const WarResult = Schema.Literals(['win', 'lose', 'tie']);

export const BadgeUrls = WireStruct({
  large: Uri.annotate({ description: '512x512 clan badge PNG URL.' }),
  medium: Uri.annotate({ description: '200x200 clan badge PNG URL.' }),
  small: Uri.annotate({ description: '70x70 clan badge PNG URL.' }),
}).annotate({
  identifier: 'BadgeUrls',
});
export const LabelIconUrls = WireStruct({
  medium: Uri.annotate({ description: '128x128 label icon PNG URL.' }),
  small: Uri.annotate({ description: '64x64 label icon PNG URL.' }),
}).annotate({
  identifier: 'LabelIconUrls',
});
export const LeagueIconUrls = WireStruct({
  medium: Schema.optionalKey(
    Uri.annotate({
      description:
        '288x288 legacy league icon PNG URL. Omitted for Unranked (id 29000000).',
    }),
  ),
  small: Uri.annotate({ description: '72x72 legacy league icon PNG URL.' }),
  tiny: Uri.annotate({ description: '36x36 legacy league icon PNG URL.' }),
}).annotate({
  identifier: 'LeagueIconUrls',
});
export const LeagueTierIconUrls = WireStruct({
  large: Uri.annotate({ description: '326x326 league tier icon PNG URL.' }),
  small: Uri.annotate({ description: '125x125 league tier icon PNG URL.' }),
}).annotate({
  identifier: 'LeagueTierIconUrls',
});
export const Resource = WireStruct({
  amount: Int64,
  name: Schema.String.annotate({
    description:
      'Internal resource identifier (e.g. Gold, Elixir, DarkElixir, Gold2, CommonOre, CraftingResource1). Not a fixed enum.',
  }),
}).annotate({
  identifier: 'Resource',
});
export const BattleLogEntry = WireStruct({
  armyShareCode: Schema.Union([Schema.String, Schema.Null]).annotate({
    description:
      'Shareable army composition code, or null when unavailable on a battle log entry.',
  }),
  attack: Schema.Boolean,
  availableLoot: Schema.Array(Resource),
  battleTime: Int.annotate({ description: 'Battle duration in seconds.' }),
  battleTimestamp: CompactTimestamp,
  battleType: BattleType,
  destructionPercentage: PercentInt,
  extraLootedResources: Schema.Array(Resource),
  lootedResources: Schema.Array(Resource),
  opponentName: Schema.String,
  opponentPlayerTag: Schema.String,
  opponentTownHallLevel: Int,
  stars: Stars,
}).annotate({
  identifier: 'BattleLogEntry',
});
export const CursorPaging = WireStruct({
  after: Schema.optionalKey(
    Schema.String.annotate({
      description: 'Cursor for the next page.',
    }),
  ),
  before: Schema.optionalKey(
    Schema.String.annotate({
      description: 'Cursor for the previous page.',
    }),
  ),
}).annotate({
  identifier: 'CursorPaging',
});
export const Paging = WireStruct({
  cursors: CursorPaging,
}).annotate({
  identifier: 'Paging',
});
export const BattleLogResponse = WireStruct({
  items: Schema.Array(BattleLogEntry),
}).annotate({
  identifier: 'BattleLogResponse',
});
export const BuilderBaseLeague = WireStruct({
  id: Int,
  name: Schema.String,
}).annotate({
  identifier: 'BuilderBaseLeague',
});
export const BuilderBaseLeagueListResponse = WireStruct({
  items: Schema.Array(BuilderBaseLeague),
  paging: Paging,
}).annotate({
  identifier: 'BuilderBaseLeagueListResponse',
});
export const CapitalLeague = WireStruct({
  id: Int,
  name: Schema.String,
}).annotate({
  identifier: 'CapitalLeague',
});
export const CapitalLeagueListResponse = WireStruct({
  items: Schema.Array(CapitalLeague),
  paging: Paging,
}).annotate({
  identifier: 'CapitalLeagueListResponse',
});
export const ClanCapitalRaidSeasonClanInfo = WireStruct({
  badgeUrls: BadgeUrls,
  level: Int,
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
  destructionPercent: PercentInt,
  stars: Stars,
}).annotate({
  identifier: 'ClanCapitalRaidSeasonAttack',
});
export const ClanCapitalRaidSeasonDistrict = WireStruct({
  attackCount: Int,
  attacks: Schema.optionalKey(
    Schema.Array(ClanCapitalRaidSeasonAttack).annotate({
      description:
        'Individual attacks against this district. Included only for attacked districts in an ongoing raid season; omitted on ended seasons.',
    }),
  ),
  destructionPercent: PercentInt,
  districtHallLevel: Int,
  id: Int,
  name: Schema.String,
  stars: Stars,
  totalLooted: Int,
}).annotate({
  identifier: 'ClanCapitalRaidSeasonDistrict',
});
export const ClanCapitalRaidSeasonAttackLogEntry = WireStruct({
  attackCount: Int,
  defender: ClanCapitalRaidSeasonClanInfo,
  districtCount: Int,
  districts: Schema.Array(ClanCapitalRaidSeasonDistrict),
  districtsDestroyed: Int,
}).annotate({
  identifier: 'ClanCapitalRaidSeasonAttackLogEntry',
});
export const ClanCapitalRaidSeasonDefenseLogEntry = WireStruct({
  attackCount: Int,
  attacker: ClanCapitalRaidSeasonClanInfo,
  districtCount: Int,
  districts: Schema.Array(ClanCapitalRaidSeasonDistrict),
  districtsDestroyed: Int,
}).annotate({
  identifier: 'ClanCapitalRaidSeasonDefenseLogEntry',
});
export const ClanCapitalRaidSeasonMember = WireStruct({
  attackLimit: Int,
  attacks: Int,
  bonusAttackLimit: Int,
  capitalResourcesLooted: Int,
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'ClanCapitalRaidSeasonMember',
});
export const ClanCapitalRaidSeason = WireStruct({
  attackLog: Schema.Array(ClanCapitalRaidSeasonAttackLogEntry),
  capitalTotalLoot: Int,
  defenseLog: Schema.Array(ClanCapitalRaidSeasonDefenseLogEntry),
  defensiveReward: Int,
  endTime: CompactTimestamp,
  enemyDistrictsDestroyed: Int,
  members: Schema.optionalKey(
    Schema.Array(ClanCapitalRaidSeasonMember).annotate({
      description:
        'Participating clan members who have made at least one attack. Present on ongoing raid seasons and omitted on ended seasons.',
    }),
  ),
  offensiveReward: Int,
  raidsCompleted: Int,
  startTime: CompactTimestamp,
  state: ClanCapitalRaidSeasonState,
  totalAttacks: Int,
}).annotate({
  identifier: 'ClanCapitalRaidSeason',
});
export const CapitalRaidSeasonsResponse = WireStruct({
  items: Schema.Array(ClanCapitalRaidSeason),
  paging: Paging,
}).annotate({
  identifier: 'CapitalRaidSeasonsResponse',
});
export const Language = WireStruct({
  id: Int,
  languageCode: Schema.String,
  name: Schema.String,
}).annotate({
  identifier: 'Language',
});
export const ClanCapitalDistrict = WireStruct({
  districtHallLevel: Int,
  id: Int,
  name: Schema.String,
}).annotate({
  identifier: 'ClanCapitalDistrict',
});
export const ClanCapital = WireStruct({
  capitalHallLevel: Schema.optionalKey(
    Int.annotate({
      description: 'Omitted for clans that have not unlocked Clan Capital.',
    }),
  ),
  clanGoldSinkTotal: Int64,
  districts: Schema.optionalKey(
    Schema.Array(ClanCapitalDistrict).annotate({
      description: 'Omitted for clans that have not unlocked Clan Capital.',
    }),
  ),
}).annotate({
  identifier: 'ClanCapital',
});
export const Label = WireStruct({
  iconUrls: LabelIconUrls,
  id: Int,
  name: Schema.String,
}).annotate({
  identifier: 'Label',
});
export const Location = WireStruct({
  countryCode: Schema.optionalKey(
    Schema.String.annotate({
      description:
        'ISO 3166-1 alpha-2 country code. Present if and only if isCountry is true.',
    }),
  ),
  id: Int,
  isCountry: Schema.Boolean,
  name: Schema.String,
}).annotate({
  identifier: 'Location',
});
export const League = WireStruct({
  iconUrls: LeagueIconUrls,
  id: Int,
  name: Schema.String,
}).annotate({
  identifier: 'League',
});
export const LeagueTier = WireStruct({
  iconUrls: LeagueTierIconUrls,
  id: Int,
  name: Schema.String,
}).annotate({
  identifier: 'LeagueTier',
});
export const PlayerHouseElement = WireStruct({
  id: Int,
  type: PlayerHouseElementType,
}).annotate({
  identifier: 'PlayerHouseElement',
});
export const PlayerHouse = WireStruct({
  elements: Schema.Array(PlayerHouseElement),
}).annotate({
  identifier: 'PlayerHouse',
});
export const ClanMember = WireStruct({
  builderBaseLeague: BuilderBaseLeague,
  builderBaseTrophies: Int,
  clanRank: Int.check(Schema.isGreaterThanOrEqualTo(1)),
  donations: Int,
  donationsReceived: Int,
  expLevel: Int,
  league: League.annotate({
    description:
      'Legacy pre-2025 league object (often Unranked id 29000000). Prefer leagueTier for current ranked leagues.',
  }),
  leagueTier: LeagueTier,
  name: Schema.String,
  playerHouse: Schema.optionalKey(PlayerHouse),
  previousClanRank: Int.annotate({
    description: 'Previous clan rank, or 0 for newly joined members.',
  }),
  role: ClanRole,
  tag: Schema.String,
  townHallLevel: Int,
  trophies: Int,
}).annotate({
  identifier: 'ClanMember',
});
export const WarLeague = WireStruct({
  id: Int,
  name: Schema.String,
}).annotate({
  identifier: 'WarLeague',
});
export const Clan = WireStruct({
  badgeUrls: BadgeUrls,
  capitalLeague: CapitalLeague,
  chatLanguage: Schema.optionalKey(
    Language.annotate({
      description: 'Omitted when the clan has not configured a chat language.',
    }),
  ),
  clanBuilderBasePoints: Int,
  clanCapital: ClanCapital,
  clanCapitalPoints: Int,
  clanLevel: Int,
  clanPoints: Int,
  description: Schema.String,
  isFamilyFriendly: Schema.Boolean,
  isWarLogPublic: Schema.Boolean,
  labels: Schema.Array(Label),
  location: Schema.optionalKey(
    Location.annotate({
      description: 'Omitted when the clan has not configured a location.',
    }),
  ),
  memberList: Schema.Array(ClanMember),
  members: Int.check(Schema.isBetween({ minimum: 1, maximum: 50 })),
  name: Schema.String,
  requiredBuilderBaseTrophies: Int,
  requiredLeagueTier: Schema.optionalKey(
    LeagueTier.annotate({
      description:
        'Minimum ranked league tier required to join. Omitted when unset.',
    }),
  ),
  requiredTownhallLevel: Int.annotate({
    description:
      'Minimum Town Hall level required to join. Note lowercase "h" in wire field name.',
  }),
  requiredTrophies: Int,
  tag: Schema.String,
  type: ClanType,
  warFrequency: WarFrequency,
  warLeague: WarLeague,
  warLosses: Schema.optionalKey(
    Int.annotate({
      description: 'Omitted when isWarLogPublic is false.',
    }),
  ),
  warTies: Schema.optionalKey(
    Int.annotate({
      description: 'Omitted when isWarLogPublic is false.',
    }),
  ),
  warWinStreak: Int,
  warWins: Int,
}).annotate({
  identifier: 'Clan',
});
export const ClanBuilderBaseRanking = WireStruct({
  badgeUrls: BadgeUrls,
  clanBuilderBasePoints: Int,
  clanLevel: Int,
  location: Schema.optionalKey(
    Location.annotate({
      description:
        'Omitted on worldwide leaderboards for clans without a configured location.',
    }),
  ),
  members: Int.check(Schema.isBetween({ minimum: 1, maximum: 50 })),
  name: Schema.String,
  previousRank: Int,
  rank: Int.check(Schema.isGreaterThanOrEqualTo(1)),
  tag: Schema.String,
}).annotate({
  identifier: 'ClanBuilderBaseRanking',
});
export const ClanBuilderBaseRankingListResponse = WireStruct({
  items: Schema.Array(ClanBuilderBaseRanking),
  paging: Paging,
}).annotate({
  identifier: 'ClanBuilderBaseRankingListResponse',
});
export const ClanCapitalRanking = WireStruct({
  badgeUrls: BadgeUrls,
  clanCapitalPoints: Int,
  clanLevel: Int,
  location: Schema.optionalKey(
    Location.annotate({
      description:
        'Omitted on worldwide leaderboards for clans without a configured location.',
    }),
  ),
  members: Int.check(Schema.isBetween({ minimum: 1, maximum: 50 })),
  name: Schema.String,
  previousRank: Int.annotate({
    description: 'Previous leaderboard rank, or -1 when unavailable.',
  }),
  rank: Int.check(Schema.isGreaterThanOrEqualTo(1)),
  tag: Schema.String,
}).annotate({
  identifier: 'ClanCapitalRanking',
});
export const ClanCapitalRankingListResponse = WireStruct({
  items: Schema.Array(ClanCapitalRanking),
  paging: Paging,
}).annotate({
  identifier: 'ClanCapitalRankingListResponse',
});
export const ClanMembersResponse = WireStruct({
  items: Schema.Array(ClanMember),
  paging: Paging,
}).annotate({
  identifier: 'ClanMembersResponse',
});
export const ClanRanking = WireStruct({
  badgeUrls: BadgeUrls,
  clanLevel: Int,
  clanPoints: Int,
  location: Schema.optionalKey(
    Location.annotate({
      description:
        'Omitted on worldwide leaderboards for clans without a configured location.',
    }),
  ),
  members: Int.check(Schema.isBetween({ minimum: 1, maximum: 50 })),
  name: Schema.String,
  previousRank: Int,
  rank: Int.check(Schema.isGreaterThanOrEqualTo(1)),
  tag: Schema.String,
}).annotate({
  identifier: 'ClanRanking',
});
export const ClanRankingListResponse = WireStruct({
  items: Schema.Array(ClanRanking),
  paging: Paging,
}).annotate({
  identifier: 'ClanRankingListResponse',
});
export const ClanReference = WireStruct({
  badgeUrls: BadgeUrls,
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'ClanReference',
});
export const ClanSearchItem = WireStruct({
  badgeUrls: BadgeUrls,
  capitalLeague: CapitalLeague,
  chatLanguage: Schema.optionalKey(
    Language.annotate({
      description: 'Omitted when the clan has not configured a chat language.',
    }),
  ),
  clanBuilderBasePoints: Int,
  clanCapitalPoints: Int,
  clanLevel: Int,
  clanPoints: Int,
  isFamilyFriendly: Schema.Boolean,
  isWarLogPublic: Schema.Boolean,
  labels: Schema.Array(Label),
  location: Schema.optionalKey(
    Location.annotate({
      description: 'Omitted when the clan has not configured a location.',
    }),
  ),
  members: Int.check(Schema.isBetween({ minimum: 1, maximum: 50 })),
  name: Schema.String,
  requiredBuilderBaseTrophies: Int,
  requiredLeagueTier: Schema.optionalKey(
    LeagueTier.annotate({
      description:
        'Minimum ranked league tier required to join. Omitted when unset.',
    }),
  ),
  requiredTownhallLevel: Int.annotate({
    description:
      'Minimum Town Hall level required to join. Note lowercase "h" in wire field name.',
  }),
  requiredTrophies: Int,
  tag: Schema.String,
  type: ClanType,
  warFrequency: WarFrequency,
  warLeague: WarLeague,
  warLosses: Schema.optionalKey(
    Int.annotate({
      description: 'Omitted when isWarLogPublic is false.',
    }),
  ),
  warTies: Schema.optionalKey(
    Int.annotate({
      description: 'Omitted when isWarLogPublic is false.',
    }),
  ),
  warWinStreak: Int,
  warWins: Int,
}).annotate({
  identifier: 'ClanSearchItem',
});
export const ClanSearchResponse = WireStruct({
  items: Schema.Array(ClanSearchItem),
  paging: Paging,
}).annotate({
  identifier: 'ClanSearchResponse',
});
export const ClanWarAttack = WireStruct({
  attackerTag: Schema.String,
  defenderTag: Schema.String,
  destructionPercentage: PercentInt,
  duration: Int.annotate({ description: 'Attack duration in seconds.' }),
  order: Int,
  stars: Stars,
}).annotate({
  identifier: 'ClanWarAttack',
});
export const ClanWarMember = WireStruct({
  attacks: Schema.optionalKey(
    Schema.Array(ClanWarAttack).annotate({
      description: 'Omitted until the member performs at least one attack.',
    }),
  ),
  bestOpponentAttack: Schema.optionalKey(
    ClanWarAttack.annotate({
      description: 'Omitted when opponentAttacks is 0.',
    }),
  ),
  mapPosition: Int.check(Schema.isGreaterThanOrEqualTo(1)),
  name: Schema.String,
  opponentAttacks: Int,
  tag: Schema.String,
  townhallLevel: Int.annotate({
    description:
      'Member Town Hall level. Note lowercase "h" on the wire (unlike townHallLevel elsewhere).',
  }),
}).annotate({
  identifier: 'ClanWarMember',
});
export const WarClan = WireStruct({
  attacks: Int,
  badgeUrls: BadgeUrls,
  clanLevel: Int,
  destructionPercentage: PercentFloat,
  members: Schema.Array(ClanWarMember),
  name: Schema.String,
  stars: Int,
  tag: Schema.String,
}).annotate({
  identifier: 'WarClan',
});
export const NotInWarClan = WireStruct({
  attacks: Int,
  badgeUrls: BadgeUrls,
  clanLevel: Int,
  destructionPercentage: PercentFloat,
  stars: Int,
}).annotate({
  identifier: 'NotInWarClan',
});
export const NotInWar = WireStruct({
  clan: NotInWarClan.annotate({
    description: 'Zeroed placeholder clan object returned when not in war.',
  }),
  opponent: NotInWarClan.annotate({
    description: 'Zeroed placeholder opponent object returned when not in war.',
  }),
  state: Schema.Literal('notInWar'),
}).annotate({
  identifier: 'NotInWar',
});
export const ActiveClanWar = WireStruct({
  attacksPerMember: Schema.optionalKey(
    Int.annotate({
      description:
        'Present on classic wars (typically 2); omitted on CWL wars (1 attack per member).',
    }),
  ),
  battleModifier: Schema.optionalKey(BattleModifier),
  clan: WarClan,
  endTime: CompactTimestamp,
  opponent: WarClan,
  preparationStartTime: CompactTimestamp,
  startTime: CompactTimestamp,
  state: Schema.Literals(['preparation', 'inWar', 'warEnded']),
  teamSize: Int.check(Schema.isGreaterThan(0)),
  warStartTime: Schema.optionalKey(
    CompactTimestamp.annotate({
      description: 'Present on CWL war responses; omitted on classic wars.',
    }),
  ),
}).annotate({ identifier: 'ActiveClanWar' });
// List ActiveClanWar first so OpenAPI/Scalar docs default to active wars.
export const ClanWar = Schema.Union([ActiveClanWar, NotInWar]).annotate({
  identifier: 'ClanWar',
});
export const ClanWarLeagueClanMember = WireStruct({
  name: Schema.String,
  tag: Schema.String,
  townHallLevel: Int,
}).annotate({
  identifier: 'ClanWarLeagueClanMember',
});
export const ClanWarLeagueClan = WireStruct({
  badgeUrls: Schema.optionalKey(BadgeUrls),
  clanLevel: Int,
  members: Schema.optionalKey(Schema.Array(ClanWarLeagueClanMember)),
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'ClanWarLeagueClan',
});
export const ClanWarLeagueRound = WireStruct({
  warTags: Schema.optionalKey(
    Schema.Array(Schema.String).annotate({
      description:
        'War tags for this round. Unmatched future rounds use placeholder "#0".',
    }),
  ),
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
  attacks: Int,
  badgeUrls: BadgeUrls,
  clanLevel: Int,
  destructionPercentage: Schema.Finite.annotate({
    description:
      'Average destruction percentage (0-100) for classic wars, or the cumulative sum across all CWL rounds (can exceed 100) on CWL summary entries.',
  }),
  expEarned: Int,
  name: Schema.String,
  stars: Int,
  tag: Schema.String,
}).annotate({
  identifier: 'WarLogClan',
});
export const WarLogOpponent = WireStruct({
  badgeUrls: BadgeUrls,
  clanLevel: Int,
  destructionPercentage: PercentFloat,
  name: Schema.optionalKey(
    Schema.String.annotate({
      description: 'Omitted on CWL season summary entries in the war log.',
    }),
  ),
  stars: Int,
  tag: Schema.optionalKey(
    Schema.String.annotate({
      description:
        'Omitted on CWL season summary entries in the war log. Detecting missing opponent.tag reliably identifies CWL summary rows.',
    }),
  ),
}).annotate({
  identifier: 'WarLogOpponent',
});
export const ClanWarLogEntry = WireStruct({
  attacksPerMember: Int,
  battleModifier: BattleModifier,
  clan: WarLogClan,
  endTime: CompactTimestamp,
  opponent: WarLogOpponent,
  result: Schema.Union([WarResult, Schema.Null]).annotate({
    description:
      'War outcome. Often null on CWL season summary rows, though some CWL rows carry win/tie; check for missing opponent.tag to reliably detect CWL rows.',
  }),
  teamSize: Int,
}).annotate({
  identifier: 'ClanWarLogEntry',
});
export const ClanWarLogResponse = WireStruct({
  items: Schema.Array(ClanWarLogEntry),
  paging: Paging,
}).annotate({
  identifier: 'ClanWarLogResponse',
});
export const ClientErrorResponse = WireStruct({
  message: Schema.optionalKey(Schema.String),
  reason: Schema.String.annotate({
    description:
      'Machine-readable error reason (e.g. badRequest, notFound, accessDenied, accessDenied.invalidIp, tooManyRequests, inMaintenance, unknownException).',
  }),
}).annotate({
  identifier: 'ClientErrorResponse',
});
export const GoldPassSeason = WireStruct({
  endTime: CompactTimestamp,
  startTime: CompactTimestamp,
}).annotate({
  identifier: 'GoldPassSeason',
});
export const LabelListResponse = WireStruct({
  items: Schema.Array(Label),
  paging: Paging,
}).annotate({
  identifier: 'LabelListResponse',
});
export const LeagueBattleLogEntry = WireStruct({
  creationTime: IsoTimestamp,
  destructionPercentage: PercentInt,
  opponentName: Schema.String,
  opponentPlayerTag: Schema.String,
  stars: Stars,
  trophies: Int,
}).annotate({
  identifier: 'LeagueBattleLogEntry',
});
export const LeagueGroupMember = WireStruct({
  attackLoseCount: Int,
  attackWinCount: Int,
  clanName: Schema.Union([Schema.String, Schema.Null]).annotate({
    description: 'Member clan name, or null when the player is clanless.',
  }),
  clanTag: Schema.Union([Schema.String, Schema.Null]).annotate({
    description: 'Member clan tag, or null when the player is clanless.',
  }),
  defenseLoseCount: Int,
  defenseWinCount: Int,
  leagueTrophies: Int,
  playerName: Schema.String,
  playerTag: Schema.String,
}).annotate({
  identifier: 'LeagueGroupMember',
});
export const LeagueGroup = WireStruct({
  attackLogs: Schema.Array(LeagueBattleLogEntry),
  defenseLogs: Schema.Array(LeagueBattleLogEntry),
  members: Schema.Array(LeagueGroupMember),
}).annotate({
  identifier: 'LeagueGroup',
});
export const LeagueSeasonResult = WireStruct({
  attackLosses: Int,
  attackStars: Int,
  attackWins: Int,
  defenseLosses: Int,
  defenseStars: Int,
  defenseWins: Int,
  leagueSeasonId: Int64.annotate({
    description:
      'Unix epoch timestamp (seconds) identifying the ranked season.',
  }),
  leagueTierId: Int,
  leagueTrophies: Int,
  maxBattles: Int,
  placement: Int,
}).annotate({
  identifier: 'LeagueSeasonResult',
});
export const LeagueHistoryResponse = WireStruct({
  items: Schema.Array(LeagueSeasonResult),
}).annotate({
  identifier: 'LeagueHistoryResponse',
});
export const LeagueListResponse = WireStruct({
  items: Schema.Array(League),
  paging: Paging,
}).annotate({
  identifier: 'LeagueListResponse',
});
export const LeagueSeason = WireStruct({
  id: Schema.String.annotate({
    description:
      'Season identifier: YYYY-MM (2015-07 to 2025-08), YYYY-MM-DD (2025-10-06 to 2026-04-20), or v2-YYYY-MM-DDTHH:MM:SSZ (2026-05-11 onward).',
  }),
}).annotate({
  identifier: 'LeagueSeason',
});
export const LeagueSeasonListResponse = WireStruct({
  items: Schema.Array(LeagueSeason),
  paging: Paging,
}).annotate({
  identifier: 'LeagueSeasonListResponse',
});
export const LeagueTierListResponse = WireStruct({
  items: Schema.Array(LeagueTier),
  paging: Paging,
}).annotate({
  identifier: 'LeagueTierListResponse',
});
export const LegendLeagueTournamentSeasonResult = WireStruct({
  id: Schema.optionalKey(
    Schema.String.annotate({
      description: 'Season identifier. Omitted on currentSeason.',
    }),
  ),
  rank: Schema.optionalKey(
    Int.annotate({
      description: 'Season rank. Omitted on currentSeason when unranked.',
    }),
  ),
  trophies: Int,
}).annotate({
  identifier: 'LegendLeagueTournamentSeasonResult',
});
export const LocationListResponse = WireStruct({
  items: Schema.Array(Location),
  paging: Paging,
}).annotate({
  identifier: 'LocationListResponse',
});
export const PlayerAchievementProgress = WireStruct({
  completionInfo: Schema.Union([Schema.String, Schema.Null]).annotate({
    description:
      'Progress/completion text, or null for achievements that do not report completion info.',
  }),
  info: Schema.String,
  name: Schema.String,
  stars: Stars,
  target: Int,
  value: Int64,
  village: VillageType,
}).annotate({
  identifier: 'PlayerAchievementProgress',
});
export const PlayerClan = WireStruct({
  badgeUrls: BadgeUrls,
  clanLevel: Int,
  name: Schema.String,
  tag: Schema.String,
}).annotate({
  identifier: 'PlayerClan',
});
export const PlayerItemLevel = WireStruct({
  level: Int,
  maxLevel: Int,
  name: Schema.String,
  village: ItemVillageType,
}).annotate({
  identifier: 'PlayerItemLevel',
});
export const PlayerHero = WireStruct({
  equipment: Schema.optionalKey(
    Schema.Array(PlayerItemLevel).annotate({
      description:
        'Equipped hero equipment. Present only on Home Village heroes.',
    }),
  ),
  level: Int,
  maxLevel: Int,
  name: Schema.String,
  village: ItemVillageType,
}).annotate({
  identifier: 'PlayerHero',
});
export const PlayerTroop = WireStruct({
  level: Int,
  maxLevel: Int,
  name: Schema.String,
  superTroopIsActive: Schema.optionalKey(
    Schema.Boolean.annotate({
      description: 'Emitted only when true on currently active super troops.',
    }),
  ),
  village: ItemVillageType,
}).annotate({
  identifier: 'PlayerTroop',
});
export const PlayerLegendStatistics = WireStruct({
  bestBuilderBaseSeason: Schema.optionalKey(LegendLeagueTournamentSeasonResult),
  bestSeason: Schema.optionalKey(LegendLeagueTournamentSeasonResult),
  currentSeason: LegendLeagueTournamentSeasonResult,
  legendTrophies: Int,
  previousBuilderBaseSeason: Schema.optionalKey(
    LegendLeagueTournamentSeasonResult,
  ),
  previousSeason: Schema.optionalKey(LegendLeagueTournamentSeasonResult),
}).annotate({
  identifier: 'PlayerLegendStatistics',
});
export const Player = WireStruct({
  achievements: Schema.Array(PlayerAchievementProgress),
  attackWins: Int,
  bestBuilderBaseTrophies: Int,
  bestTrophies: Int,
  builderBaseLeague: Schema.optionalKey(
    BuilderBaseLeague.annotate({
      description: 'Omitted when the player has not unlocked Builder Base.',
    }),
  ),
  builderBaseTrophies: Int,
  builderHallLevel: Schema.optionalKey(
    Int.annotate({
      description: 'Omitted when the player has not unlocked Builder Base.',
    }),
  ),
  clan: Schema.optionalKey(
    PlayerClan.annotate({
      description: 'Omitted when the player is not in a clan.',
    }),
  ),
  clanCapitalContributions: Int,
  currentLeagueGroupTag: Schema.optionalKey(
    Schema.String.annotate({
      description:
        'Current ranked league group tag. May be placeholder "#0" (querying /leaguegroup/%230/... returns 404). Omitted when currentLeagueSeasonId is 0.',
    }),
  ),
  currentLeagueSeasonId: Int64.annotate({
    description:
      'Current ranked league season epoch (seconds), or 0 when the player is not in a league group.',
  }),
  defenseWins: Int,
  donations: Int,
  donationsReceived: Int,
  expLevel: Int,
  heroEquipment: Schema.Array(PlayerItemLevel),
  heroes: Schema.Array(PlayerHero),
  labels: Schema.Array(Label),
  league: Schema.optionalKey(
    League.annotate({
      description:
        'Legacy pre-2025 league object. Usually omitted; prefer leagueTier.',
    }),
  ),
  leagueTier: LeagueTier,
  legendStatistics: Schema.optionalKey(PlayerLegendStatistics),
  name: Schema.String,
  playerHouse: Schema.optionalKey(PlayerHouse),
  previousLeagueGroupTag: Schema.optionalKey(
    Schema.String.annotate({
      description:
        'Previous ranked league group tag. May be placeholder "#0" (querying /leaguegroup/%230/... returns 404).',
    }),
  ),
  previousLeagueSeasonId: Int64.annotate({
    description:
      'Previous ranked league season epoch (seconds), or 0 when unavailable.',
  }),
  role: Schema.optionalKey(ClanRole),
  spells: Schema.Array(PlayerItemLevel),
  tag: Schema.String,
  townHallLevel: Int,
  townHallWeaponLevel: Schema.optionalKey(
    Int.annotate({
      description:
        'Town Hall weapon level. Present for TH12-TH17; omitted for TH1-TH11 and TH18+.',
    }),
  ),
  troops: Schema.Array(PlayerTroop),
  trophies: Int,
  warPreference: Schema.optionalKey(
    WarPreference.annotate({
      description: 'Omitted when the player is not in a clan.',
    }),
  ),
  warStars: Int,
}).annotate({
  identifier: 'Player',
});
export const PlayerBuilderBaseRanking = WireStruct({
  builderBaseLeague: BuilderBaseLeague,
  builderBaseTrophies: Int,
  clan: Schema.optionalKey(ClanReference),
  expLevel: Int,
  name: Schema.String,
  previousRank: Int,
  rank: Int.check(Schema.isGreaterThanOrEqualTo(1)),
  tag: Schema.String,
}).annotate({
  identifier: 'PlayerBuilderBaseRanking',
});
export const PlayerBuilderBaseRankingListResponse = WireStruct({
  items: Schema.Array(PlayerBuilderBaseRanking),
  paging: Paging,
}).annotate({
  identifier: 'PlayerBuilderBaseRankingListResponse',
});
export const PlayerRanking = WireStruct({
  attackWins: Int,
  clan: Schema.optionalKey(ClanReference),
  defenseWins: Int,
  expLevel: Int,
  league: League.annotate({
    description:
      'Legacy pre-2025 league object (often Unranked id 29000000). Prefer leagueTier.',
  }),
  leagueTier: LeagueTier,
  name: Schema.String,
  previousRank: Int,
  rank: Int.check(Schema.isGreaterThanOrEqualTo(1)),
  tag: Schema.String,
  trophies: Int,
}).annotate({
  identifier: 'PlayerRanking',
});
export const PlayerRankingListResponse = WireStruct({
  items: Schema.Array(PlayerRanking),
  paging: Paging,
}).annotate({
  identifier: 'PlayerRankingListResponse',
});
export const PlayerSeasonRanking = WireStruct({
  attackWins: Int,
  clan: Schema.optionalKey(ClanReference),
  defenseWins: Int,
  expLevel: Int,
  leagueTier: LeagueTier,
  name: Schema.String,
  rank: Int.check(Schema.isGreaterThanOrEqualTo(1)),
  tag: Schema.String,
  trophies: Int,
}).annotate({
  identifier: 'PlayerSeasonRanking',
});
export const PlayerSeasonRankingListResponse = WireStruct({
  items: Schema.Array(PlayerSeasonRanking),
  paging: Paging,
}).annotate({
  identifier: 'PlayerSeasonRankingListResponse',
});
export const VerifyTokenRequest = WireStruct({
  token: Schema.String.annotate({
    description:
      'In-game API token to verify. Send literal "TOKEN" against the mock API for a valid response.',
    examples: ['TOKEN'],
  }),
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
  paging: Paging,
}).annotate({
  identifier: 'WarLeagueListResponse',
});
