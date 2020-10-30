/**
 * @packageDocumentation
 * @module Requirements
 */

import type { Requirement } from './requirement';

/**
 * An atomic requirement.
 * Requirements can specify the expected value that the response has to contain,
 * or a range of threshold values within which the response has to fit in.
 * The requirement may apply to a certain period of time.
 */
export interface BooleanRequirement extends Requirement {
  /**
   * The data type in which the requirement response must be provided.
   */
  dataType: 'boolean';

  /**
   * Used to state the requirement when the response must be particular value.
   */
  expectedValue?: boolean;
}
