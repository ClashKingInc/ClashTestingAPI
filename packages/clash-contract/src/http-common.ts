import { Schema } from 'effect';
import { HttpApiSchema } from 'effect/http-api';
import * as Wire from './effect.js';
import { ClashErrorStatuses } from './outcomes.js';

export const Paging = {
  limit: Schema.optionalKey(
    Schema.Int.check(Schema.isGreaterThanOrEqualTo(1)).annotate({
      description: 'Limit the number of items returned in the response.',
    }),
  ),
  after: Schema.optionalKey(
    Schema.String.annotate({
      description:
        'Return only items that occur after this marker. Cannot be used together with before.',
    }),
  ),
  before: Schema.optionalKey(
    Schema.String.annotate({
      description:
        'Return only items that occur before this marker. Cannot be used together with after.',
    }),
  ),
};
export const Search = {
  ...Paging,
  name: Schema.optionalKey(
    Schema.String.annotate({
      description:
        'Search clans by name (at least 3 characters on the live Supercell API).',
    }),
  ),
  warFrequency: Schema.optionalKey(
    Schema.Literals([
      'unknown',
      'always',
      'moreThanOncePerWeek',
      'oncePerWeek',
      'lessThanOncePerWeek',
      'never',
      'any',
    ]).annotate({
      description: 'Filter by clan war frequency.',
    }),
  ),
  locationId: Schema.optionalKey(
    Schema.Int.annotate({
      description: 'Filter by clan location identifier.',
    }),
  ),
  minMembers: Schema.optionalKey(
    Schema.Int.annotate({
      description: 'Filter by minimum number of clan members.',
    }),
  ),
  maxMembers: Schema.optionalKey(
    Schema.Int.annotate({
      description: 'Filter by maximum number of clan members.',
    }),
  ),
  minClanPoints: Schema.optionalKey(
    Schema.Int.annotate({
      description: 'Filter by minimum clan points.',
    }),
  ),
  minClanLevel: Schema.optionalKey(
    Schema.Int.annotate({
      description: 'Filter by minimum clan level.',
    }),
  ),
  labelIds: Schema.optionalKey(
    Schema.String.annotate({
      description: 'Comma-separated list of label IDs to filter by.',
    }),
  ),
};
export const Headers = Schema.StructWithRest(
  Schema.Struct({ 'cache-control': Schema.optionalKey(Schema.String) }),
  [Schema.Record(Schema.String, Schema.Unknown)],
);
export const success = <S extends Schema.Top>(schema: S) =>
  HttpApiSchema.WithHeaders(schema, Headers);
export const errors = ClashErrorStatuses.map((status) =>
  (status === 429
    ? HttpApiSchema.WithHeaders(
        Wire.ClientErrorResponse,
        Schema.Struct({ 'retry-after': Schema.optionalKey(Schema.String) }),
      )
    : Wire.ClientErrorResponse
  ).pipe(HttpApiSchema.status(status)),
);
