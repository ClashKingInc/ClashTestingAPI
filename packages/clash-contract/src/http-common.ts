import { Schema } from 'effect';
import { HttpApiSchema } from 'effect/http-api';
import * as Wire from './effect.js';
import { ClashErrorStatuses } from './outcomes.js';

const PagingCursors = {
  after: Schema.optionalKey(
    Schema.String.annotate({
      description:
        'Return only items after this cursor. Cannot be used with before.',
    }),
  ),
  before: Schema.optionalKey(
    Schema.String.annotate({
      description:
        'Return only items before this cursor. Cannot be used with after.',
    }),
  ),
};

export const Paging = {
  limit: Schema.optionalKey(
    Schema.Int.check(Schema.isGreaterThanOrEqualTo(1)).annotate({
      description: 'Limit the number of items returned in the response.',
    }),
  ),
  ...PagingCursors,
};

export const SeasonPaging = {
  limit: Schema.optionalKey(
    Schema.Int.check(
      Schema.isBetween({ minimum: 100, maximum: 25000 }),
    ).annotate({
      description:
        'Limit the number of season rankings returned. Live Supercell API requires a value between 100 and 25,000.',
    }),
  ),
  ...PagingCursors,
};

export const Search = {
  ...Paging,
  name: Schema.optionalKey(
    Schema.String.check(Schema.isMinLength(3)).annotate({
      description: 'Search clans by name (minimum 3 characters).',
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
      description:
        'Filter by clan war frequency ("any" is query-only and is not returned in clan responses).',
    }),
  ),
  locationId: Schema.optionalKey(
    Schema.Int.annotate({
      description: 'Filter by clan location identifier.',
    }),
  ),
  minMembers: Schema.optionalKey(
    Schema.Int.check(Schema.isBetween({ minimum: 2, maximum: 50 })).annotate({
      description: 'Filter by minimum number of clan members (2 to 50).',
    }),
  ),
  maxMembers: Schema.optionalKey(
    Schema.Int.check(Schema.isBetween({ minimum: 1, maximum: 50 })).annotate({
      description: 'Filter by maximum number of clan members (1 to 50).',
    }),
  ),
  minClanPoints: Schema.optionalKey(
    Schema.Int.check(Schema.isGreaterThanOrEqualTo(0)).annotate({
      description: 'Filter by minimum clan points.',
    }),
  ),
  minClanLevel: Schema.optionalKey(
    Schema.Int.check(Schema.isGreaterThanOrEqualTo(1)).annotate({
      description: 'Filter by minimum clan level.',
    }),
  ),
  labelIds: Schema.optionalKey(
    Schema.String.annotate({
      description: 'Comma-separated list of clan label IDs to filter by.',
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
