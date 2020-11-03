/**
 * @packageDocumentation
 * @module Options.Mixins
 */

import type { OptionsToCombine } from '../option-details';

/**
 * Adds an `optionDetils` field declaration to class being applied to,
 * which should hold an {@link OptionsToCombine} object inside
 */
export function WithOptionsToCombine<T extends new (...args: any[]) => any>(
  Base: T
): T & {
  new (...args: any[]): {
    optionDetails: OptionsToCombine;
  };
} {
  return class OptionDetails extends Base {
    /**
     * Where options are applied 'Option Details' is used to capture this information
     */
    public optionDetails: OptionsToCombine;
  };
}
