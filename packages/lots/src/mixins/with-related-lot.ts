/**
 *  @packageDocumentation
 *  @module Lots
 */

import type { Lot } from '../lot';

/**
 * Adds a `relatedLot` field declaration to class being applied to
 */
export function WithRelatedLot<T extends new (...args: any[]) => any>(
  Base: T
): T & {
  new (...args: any[]): {
    relatedLot?: Lot['id'];
  };
} {
  return class RelatedLot extends Base {
    /**
     * If the entity belongs to a lot, provide the identifier of the related lot here.
     * Each entity may only belong to a single lot.
     */
    public relatedLot?: Lot['id'];
  };
}
