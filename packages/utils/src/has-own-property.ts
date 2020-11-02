/**
 * @packageDocumentation
 * @module Utils
 */

export function hasOwnProperty<O extends object>(object: O, property: string): boolean;

export function hasOwnProperty<O extends object>(object: O, ...properties: string[]): boolean;

export function hasOwnProperty<O extends object>(object: O, properties: string | string[]): boolean {
  return (Array.isArray(properties) ? properties : [properties]).some((property) => {
    return Object.prototype.hasOwnProperty.call(object, property);
  });
}
