import { Schema } from 'effect';
import * as models from './effect.js';
export type { components, paths, operations } from './schema.js';
export type Schemas = {
  [K in keyof typeof models]: (typeof models)[K]['Type'];
};
export type SchemaName = keyof Schemas;
export type Validator<T> = ((value: unknown) => value is T) & {
  errors?: readonly unknown[] | null;
};
function validator<K extends SchemaName>(name: K): Validator<Schemas[K]> {
  const check: Validator<Schemas[K]> = (
    value: unknown,
  ): value is Schemas[K] => {
    try {
      Schema.decodeUnknownSync(models[name])(value, {
        onExcessProperty: 'preserve',
      });
      check.errors = null;
      return true;
    } catch (error) {
      check.errors = [String(error)];
      return false;
    }
  };
  return check;
}
// Object.fromEntries cannot retain the correlation of registry keys and values.
export const validators = Object.fromEntries(
  Object.keys(models).map((name) => [name, validator(name as SchemaName)]),
) as { [K in SchemaName]: Validator<Schemas[K]> };
export function parse<K extends SchemaName>(
  name: K,
  value: unknown,
): Schemas[K] {
  const check = validators[name];
  if (!check(value))
    throw new TypeError(`Invalid ${name}: ${JSON.stringify(check.errors)}`);
  return value;
}
