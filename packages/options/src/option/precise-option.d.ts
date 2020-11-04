/**
 * @packageDocumentation
 * @module Options.Option
 */

import type { Dimensions } from '@ts4ocds/metrics/observation';

import type { Option } from './option';

/**
 * Available prescribed option for {@link Requirement.Requirement | requirement}/{@link Observation.Observation | observation}
 * that can be set as a value for {@link RequirementResponse.RequirementResponse | bid.requirementResponse}/{@link Award.Award | award}.
 */
export interface PreciseOption<D extends Dimensions = undefined> extends Option<D> {
  /**
   * Value provided by this option.
   */
  value: string | number;
}
