/**
 * @packageDocumentation
 * @module Conversions.Coefficient
 */

import { hasOwnProperty, Initializable } from '@ts4ocds/utils';
import type { Period } from '@ts4ocds/core/period';

import type { RangedCoefficient } from './ranged-coefficient';
import type { PreciseCoefficient } from './precise-coefficient';

/**
 * A coefficient applied in case of the {@link PreciseCoefficient.value | value} of prescribed attribute matches.
 */
export class Coefficient extends Initializable<Coefficient> {
  /**
   * An identifier for this coefficient.
   */
  public id!: string | number;

  /**
   * Precise value that has to be applied for {@link Conversion.Conversion | conversion} in specific case.
   */
  public coefficient?: number;

  /**
   * Used to specify a particular {@link Period.Period | period} the {@link Conversion.Conversion | conversion} and its coefficients are applies to.
   */
  public period?: Period;

  /**
   * Where mathematical formula is used to calculate {@link PreciseCoefficient.value | precise value} that has to be applied for {@link Conversion.Conversion | conversion}
   * in specific case this field must be populated with such formula.
   */
  public formula?: string;

  /**
   * Used to show if this coefficient should be defined by a {@link PreciseCoefficient | precise `value`}.
   */
  public isPrecise(): this is PreciseCoefficient {
    return hasOwnProperty(this, 'value');
  }

  /**
   * Used to show if this coefficient should be defined by a {@link RangedCoefficient | range} of `[minValue, maxValue]`.
   */
  public isRanged(): this is RangedCoefficient {
    return hasOwnProperty(this, 'minValue', 'maxValue');
  }
}
