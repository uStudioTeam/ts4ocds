/**
 *  @packageDocumentation
 *  @module Lots
 */

import type { Lot } from '../lot';

/**
 * If the entity relates to one or more specific lots, provide the identifier(s) of the related lot(s) here.
 */
export function WithRelatedLots<T extends new (...args: any[]) => any>(
  Base: T
): T & {
  new (...args: any[]): {
    relatedLots?: Array<Lot['id']>;
  };
} {
  return class extends Base {
    public relatedLots?: Array<Lot['id']>;
  };
}
