import { Schema } from 'effect';
import { HttpApi, type HttpApiGroup, type OpenApi } from 'effect/http-api';
import * as models from './effect.js';

// Express unconstrained rest records as additionalProperties: true, retaining
// the existing OpenAPI shape instead of an equivalent allOf intersection.
function preserveAdditionalProperties(value: unknown): void {
  if (!value || typeof value !== 'object') return;
  if (Array.isArray(value)) {
    value.forEach(preserveAdditionalProperties);
    return;
  }
  const object = value as Record<string, unknown>;
  if (Array.isArray(object.allOf)) {
    const remaining = object.allOf.filter((part: unknown) => {
      if (!part || typeof part !== 'object') return true;
      const record = part as Record<string, unknown>;
      if (
        record.type !== 'object' ||
        !record.additionalProperties ||
        typeof record.additionalProperties !== 'object' ||
        Object.keys(record.additionalProperties).length !== 0 ||
        Object.keys(record).some(
          (key) => !['type', 'additionalProperties'].includes(key),
        )
      )
        return true;
      object.additionalProperties = true;
      return false;
    });
    if (remaining.length) object.allOf = remaining;
    else delete object.allOf;
  }
  for (const [key, child] of Object.entries(object)) {
    if (
      key === 'additionalProperties' &&
      (child === false ||
        (child && typeof child === 'object' && Object.keys(child).length === 0))
    )
      object[key] = true;
    else preserveAdditionalProperties(child);
  }
}

// The HTTP API can derive identical encoded/type schemas with numbered names.
// Keep the contract's existing identifiers when those definitions are equal.
function deduplicateSchemas(spec: OpenApi.OpenAPISpec): void {
  const schemas = spec.components.schemas;
  const aliases = new Map<string, string>();
  for (const [name, schema] of Object.entries(schemas)) {
    const original = name.replace(/_\d+$/, '');
    // Status-annotated errors intentionally retain their distinct generated types.
    if (
      name === original ||
      original === 'ClientErrorResponse' ||
      !(original in models)
    )
      continue;
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
  preserveAdditionalProperties(spec.components.schemas);
  deduplicateSchemas(spec);
  return spec;
}
