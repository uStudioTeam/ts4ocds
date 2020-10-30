/**
 * @packageDocumentation
 * @module Conversions
 */

import { Type } from 'class-transformer';

import { Coefficient } from '../coefficient';

/**
 * Conversion is used to describe conversions and its coefficients applicable
 * for specific value received for requirement or observation
 */
export class Conversion {
  /**
   * A list of applicable coefficients for this conversion
   */
  @Type(() => Coefficient)
  public coefficients: Coefficient[];

  /**
   * An identifier for this conversion.
   */
  public id: string | number;

  /**
   * The free-text rationale of using of this conversion
   */
  public rationale?: string;

  /**
   * Free text description of this conversion could be shared here
   */
  public description?: string;
}
