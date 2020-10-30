import { Type } from 'class-transformer';

import { OptionToCombine } from '../option-to-combine';
import type { OptionsToCombine } from '../option-details';

export function WithOptionsToCombine<T extends new (...args: any[]) => any>(
  Base: T
): T & {
  new (...args: any[]): {
    optionDetails: OptionsToCombine;
  };
} {
  class OptionDetails extends Base {
    @Type(() => {
      return () => ({
        optionsToCombine: OptionToCombine,
      });
    })
    public optionDetails: OptionsToCombine;
  }

  return OptionDetails;
}
