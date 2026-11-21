import { Schema } from 'effect';
import { HttpApi, type HttpApiGroup, type OpenApi } from 'effect/http-api';
import * as models from './effect.js';

const ERROR_DESCRIPTIONS: Readonly<Record<string, string>> = {
  '400': 'Bad request (`badRequest`).',
  '403':
    'Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`).',
  '404': 'Resource not found (`notFound`).',
  '429': 'Request throttled (`tooManyRequests`). See `Retry-After` header.',
  '500': 'Internal server error (`unknownException`).',
  '503': 'Service temporarily unavailable (`inMaintenance`).',
};

const SUCCESS_DESCRIPTIONS: Readonly<Record<string, string>> = {
  'clans.search': 'Matching clans.',
  'clans.profile': 'Clan profile.',
  'clans.members': 'Clan member list.',
  'clans.war': 'Current clan war or not-in-war placeholder.',
  'clans.warlog': 'Clan war log entries.',
  'clans.cwl': 'Current Clan War League group.',
  'clans.leagueWar': 'Individual Clan War League war.',
  'clans.raids': 'Clan Capital raid seasons.',
  'players.profile': 'Player profile.',
  'players.battles': 'Recent player battle log entries.',
  'players.history': 'Historical ranked league season results.',
  'players.verify': 'API token verification result.',
  'leagues.tiers': 'Ranked league tiers.',
  'leagues.tier': 'Ranked league tier.',
  'leagues.capitals': 'Clan Capital leagues.',
  'leagues.capital': 'Clan Capital league.',
  'leagues.builders': 'Builder Base leagues.',
  'leagues.builder': 'Builder Base league.',
  'leagues.wars': 'Clan War Leagues.',
  'leagues.war': 'Clan War League.',
  'leagues.seasons': 'Available league seasons.',
  'leagues.season': 'Player rankings for the requested league season.',
  'leagues.group': 'Ranked league group members and battle logs.',
  'leagues.legacyList': 'Legacy Home Village leagues (deprecated).',
  'leagues.legacy': 'Legacy Home Village league (deprecated).',
  'locations.list': 'Available leaderboard locations.',
  'locations.item': 'Location details.',
  'locations.clans': 'Home Village clan rankings.',
  'locations.players': 'Home Village player rankings.',
  'locations.builders': 'Builder Base player rankings.',
  'locations.builderClans': 'Builder Base clan rankings.',
  'locations.capitals': 'Clan Capital rankings.',
  'labels.players': 'Player labels.',
  'labels.clans': 'Clan labels.',
  'goldpass.current': 'Current Gold Pass season window.',
};

function isEmptyRecordSchema(value: unknown): boolean {
  if (!value || typeof value !== 'object') return false;
  const record = value as Record<string, unknown>;
  return (
    record.type === 'object' &&
    record.additionalProperties !== undefined &&
    typeof record.additionalProperties === 'object' &&
    record.additionalProperties !== null &&
    Object.keys(record.additionalProperties).length === 0 &&
    Object.keys(record).every((key) =>
      ['type', 'additionalProperties'].includes(key),
    )
  );
}

// Clean up Effect's JSON Schema projection so OpenAPI docs stay readable:
// - Remove JS safe-integer min/max noise (-9007199254740991 / 9007199254740991).
// - Omit explicit unconstrained additionalProperties on structured objects (JSON Schema
//   allows extra fields by default; explicit true makes Scalar show "propertyName*": "anything").
// - Keep additionalProperties: true on unconstrained dictionary schemas (no properties).
// - Flatten redundant single-item allOf wrappers (e.g., int64 format annotations).
function cleanSchema(value: unknown): void {
  if (!value || typeof value !== 'object') return;
  if (Array.isArray(value)) {
    value.forEach(cleanSchema);
    return;
  }
  const object = value as Record<string, unknown>;

  if (object.minimum === Number.MIN_SAFE_INTEGER) delete object.minimum;
  if (object.maximum === Number.MAX_SAFE_INTEGER) delete object.maximum;

  if (Array.isArray(object.allOf)) {
    const remaining: unknown[] = [];
    for (const part of object.allOf) {
      if (isEmptyRecordSchema(part)) continue;
      cleanSchema(part);
      if (
        part &&
        typeof part === 'object' &&
        !Array.isArray(part) &&
        !('$ref' in part) &&
        Object.keys(part).every((key) => !(key in object))
      ) {
        Object.assign(object, part);
        continue;
      }
      remaining.push(part);
    }
    if (remaining.length) object.allOf = remaining;
    else delete object.allOf;
  }

  const hasProperties =
    object.properties !== undefined &&
    typeof object.properties === 'object' &&
    object.properties !== null &&
    Object.keys(object.properties).length > 0;

  if ('additionalProperties' in object) {
    const extra = object.additionalProperties;
    const isOpen =
      extra === true ||
      (extra !== null &&
        typeof extra === 'object' &&
        Object.keys(extra).length === 0);
    if (hasProperties && isOpen) {
      delete object.additionalProperties;
    } else if (
      !hasProperties &&
      extra !== null &&
      typeof extra === 'object' &&
      Object.keys(extra).length === 0
    ) {
      object.additionalProperties = true;
    }
  }

  for (const [key, child] of Object.entries(object)) {
    if (key === 'additionalProperties' && typeof child === 'boolean') continue;
    cleanSchema(child);
  }
}

function canonicalJson(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(',')}]`;
  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>)
      .sort(([a], [b]) => a.localeCompare(b, 'en'))
      .map(([k, v]) => `${JSON.stringify(k)}:${canonicalJson(v)}`);
    return `{${entries.join(',')}}`;
  }
  return JSON.stringify(value);
}

// The HTTP API can derive identical encoded/type schemas with numbered names,
// or clone a named schema solely to attach a field-level description.
// Collapse them back onto the canonical schema and move any description onto
// the $ref site (valid in OpenAPI 3.1).
function deduplicateSchemas(spec: OpenApi.OpenAPISpec): void {
  const schemas = spec.components.schemas;
  const aliases = new Map<string, { ref: string; description?: string }>();
  for (const [name, schema] of Object.entries(schemas)) {
    const original = name.replace(/_\d+$/, '');
    if (name === original || !(original in models) || !schemas[original])
      continue;
    const obj = schema as Record<string, unknown>;
    const orig = schemas[original] as Record<string, unknown>;
    const { description: cloneDesc, ...cloneRest } = obj;
    const { description: origDesc, ...origRest } = orig;
    if (canonicalJson(cloneRest) === canonicalJson(origRest)) {
      aliases.set(`#/components/schemas/${name}`, {
        ref: `#/components/schemas/${original}`,
        ...(typeof cloneDesc === 'string' && cloneDesc !== origDesc
          ? { description: cloneDesc }
          : {}),
      });
      delete schemas[name];
    }
  }
  function replaceReferences(value: unknown): void {
    if (!value || typeof value !== 'object') return;
    if (Array.isArray(value)) {
      value.forEach(replaceReferences);
      return;
    }
    const record = value as Record<string, unknown>;
    if (typeof record.$ref === 'string' && aliases.has(record.$ref)) {
      const target = aliases.get(record.$ref)!;
      record.$ref = target.ref;
      if (target.description && !('description' in record)) {
        record.description = target.description;
      }
    }
    for (const child of Object.values(record)) {
      replaceReferences(child);
    }
  }
  replaceReferences(spec);
}

function polishResponses(spec: OpenApi.OpenAPISpec): void {
  for (const methods of Object.values(spec.paths)) {
    for (const operation of Object.values(methods)) {
      if (!operation || typeof operation !== 'object') continue;
      const op = operation as {
        operationId?: string;
        parameters?: Array<{ schema?: unknown }>;
        responses?: Record<string, { description?: string }>;
      };
      if (Array.isArray(op.parameters)) {
        for (const parameter of op.parameters) {
          cleanSchema(parameter.schema);
        }
      }
      if (op.responses) {
        // 501 is only produced by the mock server's x-clash-mock-response: notImplemented override.
        delete op.responses['501'];
        if (
          op.responses['200'] &&
          op.operationId &&
          op.operationId in SUCCESS_DESCRIPTIONS
        ) {
          op.responses['200'].description =
            SUCCESS_DESCRIPTIONS[op.operationId];
        }
        for (const [status, response] of Object.entries(op.responses)) {
          if (status in ERROR_DESCRIPTIONS) {
            response.description = ERROR_DESCRIPTIONS[status];
          }
        }
      }
    }
  }
}

function addClanWarDiscriminator(spec: OpenApi.OpenAPISpec): void {
  const clanWar = spec.components.schemas.ClanWar as
    | Record<string, unknown>
    | undefined;
  if (!clanWar || !Array.isArray(clanWar.anyOf)) return;
  clanWar.oneOf = clanWar.anyOf;
  delete clanWar.anyOf;
  clanWar.discriminator = {
    propertyName: 'state',
    mapping: {
      inWar: '#/components/schemas/ActiveClanWar',
      preparation: '#/components/schemas/ActiveClanWar',
      warEnded: '#/components/schemas/ActiveClanWar',
      notInWar: '#/components/schemas/NotInWar',
    },
  };
}

export function completeOpenApi<
  Id extends string,
  Groups extends HttpApiGroup.Constraint,
>(
  spec: OpenApi.OpenAPISpec,
  api: HttpApi.HttpApi<Id, Groups>,
): OpenApi.OpenAPISpec {
  HttpApi.reflect(api, {
    onGroup() {},
    onEndpoint({ endpoint }) {
      if (!endpoint.query) return;
      const path = endpoint.path.replace(/:(\w+)\??/g, '{$1}');
      const operation =
        spec.paths[path]?.[
          endpoint.method.toLowerCase() as OpenApi.OpenAPISpecMethodName
        ];
      if (!operation) return;
      // URL strings are the transport representation. OpenAPI parameters should
      // express the decoded numeric type and its original Effect constraints.
      const { schema } = Schema.toJsonSchemaDocument(
        Schema.toType(endpoint.query),
      );
      if (typeof schema !== 'object' || !schema.properties) return;
      for (const [name, decoded] of Object.entries(schema.properties)) {
        const parameter = operation.parameters?.find(
          (value) => value.in === 'query' && value.name === name,
        );
        if (
          parameter &&
          decoded &&
          typeof decoded === 'object' &&
          'type' in decoded &&
          (decoded.type === 'integer' || decoded.type === 'number')
        ) {
          parameter.schema = decoded;
        }
      }
    },
  });
  for (const model of Object.values(models)) {
    const doc = Schema.toJsonSchemaDocument(model);
    for (const [key, value] of Object.entries(doc.definitions)) {
      spec.components.schemas[key] ??= JSON.parse(
        JSON.stringify(value).replaceAll('#/$defs/', '#/components/schemas/'),
      );
    }
  }
  (spec.info as unknown as Record<string, unknown>).summary =
    'Live-verified Clash of Clans wire contract and deterministic mock server.';
  cleanSchema(spec.components.schemas);
  addClanWarDiscriminator(spec);
  polishResponses(spec);
  deduplicateSchemas(spec);
  return spec;
}
