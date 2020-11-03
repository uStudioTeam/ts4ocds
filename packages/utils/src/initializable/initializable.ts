/**
 * @packageDocumentation
 * @module Utilities.Initializable
 */

import type { Initializer } from './initializer';

/**
 * The superclass that grants all its children the ability to be initialized through a constructor argument
 * that is the object of the required shape.
 */
export abstract class Initializable<T> {
  public constructor(initializer: Initializer<T>) {
    Object.assign(this, initializer);
  }
}
