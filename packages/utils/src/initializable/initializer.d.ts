/**
 * @packageDocumentation
 * @module Utilities.Initializable
 */

/**
 * A type that picks all properties from an object that are not methods.
 */
export type Initializer<T> = Pick<
  T,
  NonNullable<{ [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K }[keyof T]>
>;
