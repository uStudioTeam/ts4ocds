/**
 * @packageDocumentation
 * @module Standard
 */

import { Initializable } from '@ts4ocds/utils';

/**
 * A classification consists of at least two parts:
 * an {@link Classification.scheme | identifier} for the list (scheme) from which the classification is taken,
 * and an {@link Classification.id | identifier} for the category from that list being applied.
 * It is useful to also publish a {@link Classification.description | text label} and/or {@link Classification.uri | URI} that users can draw on to interpret the classification.
 *
 * @param S
 * The scheme or codelist from which the classification code is taken.
 */
export class Classification<S extends string = string> extends Initializable<Classification<S>> {
  /**
   * The classification code taken from the scheme.
   */
  public id!: string | number;

  /**
   * A textual description or title for the classification code.
   */
  public description?: string;

  /**
   * The scheme or codelist from which the classification code is taken.
   */
  public scheme!: S;

  /**
   * A URI to uniquely identify the classification code.
   */
  public uri?: string;
}
