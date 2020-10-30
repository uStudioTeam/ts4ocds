import type { OptionGroups } from '../option-details';

export function WithOptionGroups<T extends new (...args: any[]) => any>(
  Base: T
): T & {
  new (...args: any[]): {
    optionDetails: OptionGroups;
  };
} {
  return class OptionDetails extends Base {
    public optionDetails: OptionGroups;
  };
}
