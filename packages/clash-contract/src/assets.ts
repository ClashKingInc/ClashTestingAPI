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
  set_id: Id,
  set_name: Schema.String,
  prestige_medal_cost: Schema.NullOr(Id),
  required_league_tier: Schema.NullOr(Id),
  default_unlocked: Schema.Boolean,
  required_emotes: Schema.Array(Id),
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
export const AccountItemLevel = Fields({ data: Id, lvl: Id });
export const AccountExport = Fields({
  tag: Schema.String,
  timestamp: Schema.Number,
  units: Schema.optionalKey(Schema.Array(AccountItemLevel)),
  guardians: Schema.optionalKey(Schema.Array(AccountItemLevel)),
  emotes: Schema.optionalKey(Schema.Array(Id)),
  building_variants: Schema.optionalKey(Schema.Array(Id)),
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
