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
   * Indicative {@link RangedRequirement.minValue | minimum value} of related {@link Requirement | requirement} or one of available {@link Option.Option | options}.
   * If applicable received through {@link RequirementResponse.RequirementResponse | `requirementResponse`}.
   */
  minValue?: number;

  /**
   * Indicative {@link RangedRequirement.maxValue | maximum value} of related {@link Requirement | requirement} or one of available {@link Option.Option | options}.
   * If applicable received through {@link RequirementResponse.RequirementResponse | `requirementResponse`}.
   */
  maxValue?: number;
}
