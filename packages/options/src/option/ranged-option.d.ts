/**
 * @packageDocumentation
 * @module Options.Option
 */

import type { Dimensions } from '@ts4ocds/metrics/observation';

import type { Option } from './option';

/**
 * Available prescribed option for requirement/observation that can be set as a value for bid.requirementResponse/award.
 */
export interface RangedOption<D extends Dimensions = undefined> extends Option<D> {
  minValue?: number;

  maxValue?: number;
}
