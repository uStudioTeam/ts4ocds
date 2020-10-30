/**
 * @packageDocumentation
 * @module Conversions
 */

import { Type } from 'class-transformer';
import { Period } from '@ts4ocds/core/period';

import type { RangedCoefficient } from './ranged-coefficient';
import type { PreciseCoefficient } from './precise-coefficient';

/**
 * A coefficient applied in case of the value of prescribed attribute matches
 */
export class Coefficient {
  /**
   * Used to specify a particular period the conversion and its coefficients are applies to
   */
  @Type(() => Period)
  public period?: Period;

  /**
   * An identifier for this coefficient.
   */
  public id: string | number;

  /**
   * Precise value that has to be applied for conversion in specific case
   */
  public coefficient?: number;

  /**
   * Where mathematical formula is used to calculate precise value that has to be applied for conversion
   * in specific case this field must be populated with such formula
   */
  public formula?: string;

  public static isPrecise(coefficient: Coefficient): coefficient is PreciseCoefficient {
    return 'value' in coefficient;
  }

  public static isRanged(coefficient: Coefficient): coefficient is RangedCoefficient {
    return 'minValue' in coefficient || 'maxValue' in coefficient;
  }
}
