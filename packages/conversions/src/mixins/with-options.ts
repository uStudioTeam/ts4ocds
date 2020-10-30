import type { Option } from '@ts4ocds/options/option';

export function WithOptions<T extends new (...args: any[]) => any>(
  Base: T
): T & {
  new (...args: any[]): {
    options?: Option[];
  };
} {
  return class Options extends Base {
    public options?: Option[];
  };
}
