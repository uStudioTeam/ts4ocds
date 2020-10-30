/**
 * @packageDocumentation
 * @module Conversions
 */

import { hasOwnProperty, Initializer } from '@ts4ocds/utils';
import type { Period } from '@ts4ocds/core/period';

import type { RangedCoefficient } from './ranged-coefficient';
import type { PreciseCoefficient } from './precise-coefficient';

/**
 * A coefficient applied in case of the value of prescribed attribute matches
 */
export class Coefficient {
  /**
   * An identifier for this coefficient.
   */
  public id: string | number;

  /**
   * Precise value that has to be applied for conversion in specific case
   */
  public coefficient?: number;

  /**
   * Used to specify a particular period the conversion and its coefficients are applies to
   */
  public period?: Period;

  /**
   * Where mathematical formula is used to calculate precise value that has to be applied for conversion
   * in specific case this field must be populated with such formula
   */
  public formula?: string;

  public constructor(initializer: Initializer<Coefficient>) {
    Object.assign(this, initializer);
  }

  public isPrecise(): this is PreciseCoefficient {
    return hasOwnProperty(this, 'value');
  }

  public isRanged(): this is RangedCoefficient {
    return hasOwnProperty(this, 'minValue', 'maxValue');
  }
}
