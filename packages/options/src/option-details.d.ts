/**
 * @packageDocumentation
 * @module Options
 */

import type { OptionGroup } from './option-group';
import type { OptionToCombine } from './option-to-combine';

/**
 * Where options are applied 'Option Details' is used to capture this information.
 */
export interface OptionGroups<OG extends OptionGroup = OptionGroup> {
  /**
   * A list of option groups for this element.
   */
  optionGroups: OG[];
}

/**
 * Where options are applied 'Option Details' is used to capture this information.
 */
export interface OptionsToCombine {
  /**
   * Where buyer reserves the right to combine options a 'Option to combine' is used to capture this information.
   */
  optionsToCombine: OptionToCombine[];
}
