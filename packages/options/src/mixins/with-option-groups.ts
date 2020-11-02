import type { OptionGroups } from '../option-details';

export function WithOptionGroups<T extends new (...args: any[]) => any>(
  Base: T
): T & {
  new (...args: any[]): {
    optionDetails: OptionGroups;
  };
} {
  return class OptionDetails extends Base {
    /**
     * Where options are applied 'Option Details' is used to capture this information
     */
    public optionDetails: OptionGroups;
  };
}
