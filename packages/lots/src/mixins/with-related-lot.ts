/**
 *  @packageDocumentation
 *  @module Lots
 */

import type { Lot } from '../lot';

/**
 * If the entity belongs to a lot, provide the identifier of the related lot here.
 * Each entity may only belong to a single lot.
 */
export function WithRelatedLot<T extends new (...args: any[]) => any>(
  Base: T
): T & {
  new (...args: any[]): {
    relatedLot?: Lot['id'];
  };
} {
  return class extends Base {
    public relatedLot?: Lot['id'];
  };
}
