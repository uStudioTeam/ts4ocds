/**
 * @packageDocumentation
 * @module Conversions.Mixins
 */

import type { Option } from '@ts4ocds/options/option';

/**
 * Adds an `option` field declaration to the class being applied to.
 * Holds an array of {@link Option.Option | options}.
 */
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
