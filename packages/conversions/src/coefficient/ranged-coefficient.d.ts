/**
 * @packageDocumentation
 * @module Conversions.Coefficient
 */

import type { Coefficient } from './coefficient';

/**
 * A coefficient applied in case of the value of prescribed attribute matches
 */
export interface RangedCoefficient extends Coefficient {
  /**
   * Indicative minimum value of related {@link Requirement | requirement} or one of available {@link Option | options}.
   * If applicable received through {@link RequirementResponse | requirementResponse}.
   */
  minValue?: number;

  /**
   * Indicative maximum value of related {@link Requirement | requirement} or one of available {@link Option | options}.
   * If applicable received through {@link RequirementResponse | requirementResponse}.
   */
  maxValue?: number;
}
