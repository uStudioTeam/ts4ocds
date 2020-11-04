/**
 * @packageDocumentation
 * @module Requirements.Requirement
 */

import type { Requirement } from './requirement';

/**
 * An atomic requirement.
 * Requirements can specify the expected value that the {@link RequirementResponse | response} has to contain,
 * or a {@link RangedRequirement | range} of threshold values within which the {@link RequirementResponse | response} has to fit in.
 * The requirement may apply to a certain {@link Period | period} of time.
 */
export interface BooleanRequirement extends Requirement {
  /**
   * The {@link DataType | data type} in which the {@link RequirementResponse | requirement response} must be provided.
   */
  dataType: 'boolean';

  /**
   * Used to state the requirement when the {@link RequirementResponse | response} must be particular boolean value.
   */
  expectedValue?: boolean;
}
