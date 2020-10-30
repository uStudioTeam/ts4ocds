import type { OptionsToCombine } from '../option-details';

export function WithOptionsToCombine<T extends new (...args: any[]) => any>(
  Base: T
): T & {
  new (...args: any[]): {
    optionDetails: OptionsToCombine;
  };
} {
  return class OptionDetails extends Base {
    public optionDetails: OptionsToCombine;
  };
}
