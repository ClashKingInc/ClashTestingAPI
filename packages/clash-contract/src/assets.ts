/** ClashKing Assets 2.5 and in-game account exports; separate from official /v1 responses. */
import { Schema } from 'effect';

const Id = Schema.Number.check(
  Schema.isInt(),
  Schema.isGreaterThanOrEqualTo(0),
);
const Fields = <const F extends Schema.Struct.Fields>(fields: F) => {
  const value = Schema.Struct(fields);
  return value.rebuild(
    Schema.StructWithRest(value, [Schema.Record(Schema.String, Schema.Unknown)])
      .ast,
  );
};
export const AssetTid = Fields({
  name: Schema.String,
  info: Schema.optionalKey(Schema.NullOr(Schema.String)),
});
export const AssetEmote = Fields({
  _id: Id,
  name: Schema.String,
  TID: AssetTid,
  set: Fields({ id: Id, name: Schema.String, TID: AssetTid }),
  cost: Schema.NullOr(Id),
  required_league_tier: Schema.NullOr(Id),
  default_unlocked: Schema.Boolean,
  required_emotes: Schema.optionalKey(Schema.Array(Id)),
});
export const BuildingVariant = Fields({
  _id: Id,
  name: Schema.String,
  info: Schema.NullOr(Schema.String),
  TID: AssetTid,
  required_troop: Schema.NullOr(Fields({ _id: Id, level: Id })),
});
export const StarBonus = Fields({
  townhall_level: Id,
  resources: Fields({
    gold: Id,
    elixir: Id,
    dark_elixir: Id,
    shiny_ore: Id,
    glowy_ore: Id,
    starry_ore: Id,
  }),
});
const OptionalNumber = Schema.optionalKey(Schema.Number);
const OptionalBoolean = Schema.optionalKey(Schema.Boolean);
export const AccountItemLevel = Fields({
  data: Id,
  lvl: Id,
  cnt: OptionalNumber,
  timer: OptionalNumber,
  upgrade_timer: OptionalNumber,
  helper_timer: OptionalNumber,
  helper_cooldown: OptionalNumber,
  recurrent_helper: OptionalBoolean,
  extra: OptionalBoolean,
});
export const AccountDefenseType = Fields({
  data: Id,
  modules: Schema.Array(AccountItemLevel),
});
export const AccountBuilding = Fields({
  ...AccountItemLevel.fields,
  lvl: Schema.optionalKey(Id),
  weapon: OptionalNumber,
  gear_up: OptionalNumber,
  supercharge: OptionalNumber,
  types: Schema.optionalKey(Schema.Array(AccountDefenseType)),
});
export const AccountBoosts = Fields({
  builder_boost: OptionalNumber,
  lab_boost: OptionalNumber,
  pet_boost: OptionalNumber,
  builder_consumable: OptionalNumber,
  lab_consumable: OptionalNumber,
  pet_consumable: OptionalNumber,
  town_hall_builder_boost: OptionalNumber,
  town_hall_lab_boost: OptionalNumber,
  clocktower_boost: OptionalNumber,
  clocktower_cooldown: OptionalNumber,
  builder_cost_reduction: OptionalNumber,
  building_cost_reduction: OptionalNumber,
  builder_time_reduction: OptionalNumber,
  building_time_reduction: OptionalNumber,
  lab_cost_reduction: OptionalNumber,
  research_cost_reduction: OptionalNumber,
  lab_time_reduction: OptionalNumber,
  research_time_reduction: OptionalNumber,
  helper_cooldown: OptionalNumber,
});
const Items = Schema.optionalKey(Schema.Array(AccountItemLevel));
const Cosmetics = Schema.optionalKey(
  Schema.Array(Fields({ data: Id, cnt: OptionalNumber })),
);
const OwnedIds = Schema.optionalKey(Schema.Array(Id));
export const AccountExport = Fields({
  tag: Schema.String,
  timestamp: Schema.Number,
  name: Schema.optionalKey(Schema.String),
  buildings: Schema.optionalKey(Schema.Array(AccountBuilding)),
  buildings2: Schema.optionalKey(Schema.Array(AccountBuilding)),
  traps: Items,
  traps2: Items,
  decos: Cosmetics,
  decos2: Cosmetics,
  obstacles: Cosmetics,
  obstacles2: Cosmetics,
  units: Items,
  units2: Items,
  siege_machines: Items,
  guardians: Items,
  heroes: Items,
  heroes2: Items,
  spells: Items,
  pets: Items,
  equipment: Items,
  helpers: Items,
  skins: OwnedIds,
  skins2: OwnedIds,
  sceneries: OwnedIds,
  sceneries2: OwnedIds,
  house_parts: OwnedIds,
  emotes: OwnedIds,
  building_variants: OwnedIds,
  building_variants2: OwnedIds,
  boosts: Schema.optionalKey(AccountBoosts),
});
// Missing ownership arrays mean unknown, not an empty collection. Variant IDs
// list ownership only: they never establish the selected Town Hall appearance.
export const AssetCatalog = Fields({
  emotes: Schema.Array(AssetEmote),
  star_bonus: Schema.Array(StarBonus),
  buildings: Schema.Array(
    Fields({
      _id: Id,
      name: Schema.String,
      levels: Schema.Array(
        Fields({
          level: Id,
          variants: Schema.optionalKey(Schema.Array(BuildingVariant)),
        }),
      ),
    }),
  ),
});
