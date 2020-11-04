/**
 *  @packageDocumentation
 *  @module Lots.Mixins
 */

import type { Lot } from '../lot';

/**
 * Adds a `relatedLot` field declaration to class being applied to.
 * Holds a related {@link Lot.id | lot's identifier}.
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
     * If the entity belongs to a {@link Lot | lot}, provide the {@link Lot.id | identifier} of the related {@link Lot | lot} here.
     * Each entity may only belong to a single {@link Lot | lot}.
     */
    public relatedLot?: Lot['id'];
  };
}
