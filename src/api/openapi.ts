import { Schema } from 'effect';
import type { OpenApi } from 'effect/unstable/httpapi';
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
export function completeOpenApi(
  spec: OpenApi.OpenAPISpec,
): OpenApi.OpenAPISpec {
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
