/**
 * @packageDocumentation
 * @module Conversions
 */

import type { Coefficient } from './coefficient';

/**
 * A coefficient applied in case of the value of prescribed attribute matches
 */
export interface PreciseCoefficient extends Coefficient {
  /**
   * Value of related 'requirement' or one of available 'options' if applicable received through 'requirementResponse'
   */
  value?: number;
}
