import { Schema } from 'effect';
import { HttpApi, type HttpApiGroup, type OpenApi } from 'effect/http-api';
import * as models from './effect.js';

const ERROR_DESCRIPTIONS: Readonly<Record<string, string>> = {
  '400': 'Bad request',
  '403': 'Access denied',
  '404': 'Resource not found',
  '429': 'Request throttled',
  '500': 'Internal server error',
  '501': 'Endpoint retired',
  '503': 'Service temporarily unavailable',
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
// - Omit explicit additionalProperties on structured objects (JSON Schema allows
//   extra fields by default; explicit true makes Scalar show "propertyName*": "anything").
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
    const isUnconstrained =
      extra === true ||
      extra === false ||
      (extra !== null &&
        typeof extra === 'object' &&
        Object.keys(extra).length === 0);
    if (hasProperties && isUnconstrained) {
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

// The HTTP API can derive identical encoded/type schemas with numbered names.
// Keep the contract's existing identifiers when those definitions are equal.
function deduplicateSchemas(spec: OpenApi.OpenAPISpec): void {
  const schemas = spec.components.schemas;
  const aliases = new Map<string, string>();
  for (const [name, schema] of Object.entries(schemas)) {
    const original = name.replace(/_\d+$/, '');
    if (name === original || !(original in models)) continue;
    if (JSON.stringify(schema) === JSON.stringify(schemas[original])) {
      aliases.set(
        `#/components/schemas/${name}`,
        `#/components/schemas/${original}`,
      );
      delete schemas[name];
    }
  }
  function replaceReferences(value: unknown): void {
    if (!value || typeof value !== 'object') return;
    for (const [key, child] of Object.entries(value)) {
      if (key === '$ref' && typeof child === 'string' && aliases.has(child)) {
        Reflect.set(value, key, aliases.get(child));
      } else replaceReferences(child);
    }
  }
  replaceReferences(spec);
}

function polishResponses(spec: OpenApi.OpenAPISpec): void {
  for (const methods of Object.values(spec.paths)) {
    for (const operation of Object.values(methods)) {
      if (!operation || typeof operation !== 'object') continue;
      const op = operation as {
        parameters?: Array<{ schema?: unknown }>;
        responses?: Record<string, { description?: string }>;
      };
      if (Array.isArray(op.parameters)) {
        for (const parameter of op.parameters) {
          cleanSchema(parameter.schema);
        }
      }
      if (op.responses) {
        for (const [status, response] of Object.entries(op.responses)) {
          if (status in ERROR_DESCRIPTIONS) {
            response.description = ERROR_DESCRIPTIONS[status];
          }
        }
      }
    }
  }
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
  cleanSchema(spec.components.schemas);
  polishResponses(spec);
  deduplicateSchemas(spec);
  return spec;
}
