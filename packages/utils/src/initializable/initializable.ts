/**
 * @packageDocumentation
 * @module Utils
 */

import type { Initializer } from './initializer';

export abstract class Initializable<T> {
  public constructor(initializer: Initializer<T>) {
    Object.assign(this, initializer);
  }
}
