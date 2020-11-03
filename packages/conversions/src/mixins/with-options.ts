/**
 * @packageDocumentation
 * @module Conversions.Mixins
 */

import type { Option } from '@ts4ocds/options/option';

/**
 * Adds an `option` field declaration to class being applied to
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
