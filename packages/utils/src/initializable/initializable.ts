/**
 * @packageDocumentation
 * @module Utilities.Initializable
 */

import type { Initializer } from './initializer';

export abstract class Initializable<T> {
  public constructor(initializer: Initializer<T>) {
    Object.assign(this, initializer);
  }
}
