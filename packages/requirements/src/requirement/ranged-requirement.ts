/**
 * @packageDocumentation
 * @module Requirements
 */

import { Requirement } from './requirement';

/**
 * An atomic requirement.
 * Requirements can specify the expected value that the response has to contain,
 * or a range of threshold values within which the response has to fit in.
 * The requirement may apply to a certain period of time.
 */
export class RangedRequirement extends Requirement {
  /**
   * The data type in which the requirement response must be provided.
   */
  public dataType: 'number' | 'integer';

  /**
   * Used to state the lower bound of the requirement when the response must be within a certain range.
   */
  public minValue?: number;

  /**
   * Used to state the upper bound of the requirement when the response must be within a certain range.
   */
  public maxValue?: number;
}