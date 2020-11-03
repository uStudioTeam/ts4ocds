/**
 * @packageDocumentation
 * @module Conversions.Conversion
 */

import { hasOwnProperty, Initializable } from '@ts4ocds/utils';

import { Coefficient } from '../coefficient';

import type { RelatedConversion } from './related-conversion';

/**
 * Conversion is used to describe conversions and its coefficients applicable
 * for specific value received for requirement or observation.
 */
export class Conversion extends Initializable<Conversion> {
  /**
   * An identifier for this conversion.
   */
  public id!: string | number;

  /**
   * Free text description of this conversion could be shared here.
   */
  public description?: string;

  /**
   * A list of applicable {@link Coefficient | coefficients} for this conversion.
   */
  public coefficients!: Coefficient[];

  /**
   * The free-text rationale of using of this conversion.
   */
  public rationale?: string;

  /**
   * Used to show if this conversion relates to a specific {@link Requirement} or {@link Observation}.
   */
  public isRelated(): this is RelatedConversion {
    return hasOwnProperty(this, 'relatesTo', 'relatedItem');
  }
}
