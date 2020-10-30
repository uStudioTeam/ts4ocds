/**
 * @packageDocumentation
 * @module Conversions
 */

import { Coefficient } from './coefficient';

/**
 * A coefficient applied in case of the value of prescribed attribute matches
 */
export class RangedCoefficient extends Coefficient {
  /**
   * Indicative minimum value of related 'requirement' or one of available 'options'
   * if applicable received through 'requirementResponse'
   */
  public minValue?: number;

  /**
   * Indicative maximum value of related 'requirement' or one of available 'options'
   * if applicable received through 'requirementResponse'
   */
  public maxValue?: number;
}
