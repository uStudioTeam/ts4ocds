import { Type } from 'class-transformer';

import { OptionGroup } from '../option-group';
import type { OptionGroups } from '../option-details';

export function WithOptionGroups<T extends new (...args: any[]) => any>(
  Base: T
): T & {
  new (...args: any[]): {
    optionDetails: OptionGroups;
  };
} {
  class OptionDetails extends Base {
    @Type(() => {
      return () => ({
        optionGroups: OptionGroup,
      });
    })
    public optionDetails: OptionGroups;
  }

  return OptionDetails;
}
