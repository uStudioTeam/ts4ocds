/**
 * @packageDocumentation
 * @module Conversions.Coefficient
 */

import type { Coefficient } from './coefficient';

/**
 * A coefficient applied in case of the value of prescribed attribute matches.
 */
export interface PreciseCoefficient extends Coefficient {
  /**
   * Value of related {@link Requirement | requirement} or one of available {@link Option | options}.
   * If applicable received through {@link RequirementResponse | requirementResponse}.
   */
  value?: number;
}
