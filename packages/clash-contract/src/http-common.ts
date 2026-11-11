import { Schema } from 'effect';
import { HttpApiSchema } from 'effect/http-api';
import * as Wire from './effect.js';
import { ClashErrorStatuses } from './outcomes.js';

export const Paging = {
  limit: Schema.optionalKey(Schema.Int.check(Schema.isGreaterThanOrEqualTo(1))),
  after: Schema.optionalKey(Schema.String),
  before: Schema.optionalKey(Schema.String),
};
export const Search = {
  ...Paging,
  name: Schema.optionalKey(Schema.String),
  warFrequency: Schema.optionalKey(Schema.String),
  locationId: Schema.optionalKey(Schema.Int),
  minMembers: Schema.optionalKey(Schema.Int),
  maxMembers: Schema.optionalKey(Schema.Int),
  minClanPoints: Schema.optionalKey(Schema.Int),
  minClanLevel: Schema.optionalKey(Schema.Int),
  labelIds: Schema.optionalKey(Schema.String),
};
export const Headers = Schema.StructWithRest(
  Schema.Struct({ 'cache-control': Schema.optionalKey(Schema.String) }),
  [Schema.Record(Schema.String, Schema.Unknown)],
);
export const success = <S extends Schema.Top>(schema: S) =>
  HttpApiSchema.WithHeaders(schema, Headers);
export const errors = ClashErrorStatuses.map((status) =>
  Wire.ClientErrorResponse.pipe(HttpApiSchema.status(status)),
);
