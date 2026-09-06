import { Schema } from 'effect';
import {
  HttpApi,
  type HttpApiGroup,
  type OpenApi,
} from 'effect/unstable/httpapi';
import * as models from '../../packages/clash-contract/src/effect.js';

// Effect emits closed objects by default. Our wire schemas deliberately preserve
// unknown properties, so describe that same policy in the published document.
function preserveAdditionalProperties(value: unknown): void {
  if (!value || typeof value !== 'object') return;
  for (const [key, child] of Object.entries(value)) {
    if (key === 'additionalProperties' && child === false)
      Reflect.set(value, key, true);
    else preserveAdditionalProperties(child);
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
  preserveAdditionalProperties(spec.components.schemas);
  return spec;
}
