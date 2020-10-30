/**
 * @packageDocumentation
 * @module Options
 */

import type { Dimensions } from '@ts4ocds/metrics/observation';

import type { Option } from './option';

/**
 * Available prescribed option for requirement/observation that can be set as a value for bid.requirementResponse/award.
 */
export interface PreciseOption<D extends Dimensions = undefined> extends Option<D> {
  /**
   * Value provided by this option
   */
  value: string | number;
}
