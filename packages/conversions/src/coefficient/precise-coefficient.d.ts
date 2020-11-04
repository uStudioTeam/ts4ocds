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
   * {@link NumericRequirement.expectedValue | Value} of related {@link Requirement | requirement} or one of available {@link Option.Option | options}.
   * If applicable received through {@link RequirementResponse.RequirementResponse | `requirementResponse`}.
   */
  value?: number;
}
