import { Schema } from 'effect';
import { HttpApiSchema } from 'effect/unstable/httpapi';
import * as Wire from '../../packages/clash-contract/src/effect.js';

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
export const Headers = Schema.Struct({
  'cache-control': Schema.optionalKey(Schema.String),
}).annotate({ parseOptions: { onExcessProperty: 'preserve' } });
export const success = <S extends Schema.Top>(schema: S) =>
  HttpApiSchema.WithHeaders(schema, Headers);
export const errors = [400, 403, 404, 429, 500, 501, 503].map((status) =>
  Wire.ClientErrorResponse.pipe(HttpApiSchema.status(status)),
);
