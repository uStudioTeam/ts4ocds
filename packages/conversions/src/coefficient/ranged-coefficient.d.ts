/**
 * @packageDocumentation
 * @module Conversions
 */

import type { Coefficient } from './coefficient';

/**
 * A coefficient applied in case of the value of prescribed attribute matches
 */
export interface RangedCoefficient extends Coefficient {
  /**
   * Indicative minimum value of related 'requirement' or one of available 'options'
   * if applicable received through 'requirementResponse'
   */
  minValue?: number;

  /**
   * Indicative maximum value of related 'requirement' or one of available 'options'
   * if applicable received through 'requirementResponse'
   */
  maxValue?: number;
}
