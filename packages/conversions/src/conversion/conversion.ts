/**
 * @packageDocumentation
 * @module Conversions.Conversion
 */

import { hasOwnProperty, Initializable } from '@ts4ocds/utils';

import { Coefficient } from '../coefficient';

import type { RelatedConversion } from './related-conversion';

/**
 * Conversion is used to describe conversions and its {@link Coefficient.Coefficient | coefficients} applicability
 * for specific value received for {@link Requirement | requirement} or {@link Observation | observation}.
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
   * A list of applicable {@link Coefficient.Coefficient | coefficients} for this conversion.
   */
  public coefficients!: Coefficient[];

  /**
   * The free-text rationale of using of this conversion.
   */
  public rationale?: string;

  /**
   * Used to show if this conversion {@link RelatedConversion | relates to} a specific {@link Requirement | requirement} or {@link Observation | observation}.
   */
  public isRelated(): this is RelatedConversion {
    return hasOwnProperty(this, 'relatesTo', 'relatedItem');
  }
}
