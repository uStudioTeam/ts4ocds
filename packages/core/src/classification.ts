/**
 * @packageDocumentation
 * @module Classification
 */

import type { Initializer } from '@ts4ocds/utils';

/**
 * A classification consists of at least two parts:
 * an identifier for the list (scheme) from which the classification is taken,
 * and an identifier for the category from that list being applied.
 * It is useful to also publish a text label and/or URI that users can draw on to interpret the classification.
 */
export class Classification<S extends string = string> {
  /**
   * The classification code taken from the scheme.
   */
  public id?: string | number;

  /**
   * A textual description or title for the classification code.
   */
  public description?: string;

  /**
   * The scheme or codelist from which the classification code is taken.
   */
  public scheme?: S;

  /**
   * A URI to uniquely identify the classification code.
   */
  public uri?: string;

  public constructor(initializer: Initializer<Classification<S>>) {
    Object.assign(this, initializer);
  }
}
