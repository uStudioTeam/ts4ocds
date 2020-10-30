import { Type } from 'class-transformer';
import { Option } from '@ts4ocds/options/option';

export function WithOptions<T extends new (...args: any[]) => any>(
  Base: T
): T & {
  new (...args: any[]): {
    options?: Option[];
  };
} {
  class Mixin extends Base {
    @Type(() => Option)
    public options?: Option[];
  }

  return Mixin;
}
