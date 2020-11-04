/**
 *  @packageDocumentation
 *  @module Lots.Mixins
 */

import type { Lot } from '../lot';

/**
 * Adds a `relatedLots` field declaration to class being applied to.
 * Holds an array of {@link Lot.id | lots' identifiers}.
 */
export function WithRelatedLots<T extends new (...args: any[]) => any>(
  Base: T
): T & {
  new (...args: any[]): {
    relatedLots?: Array<Lot['id']>;
  };
} {
  return class RelatedLots extends Base {
    /**
     * If this entity relates to one or more specific {@link Lot | lots}, provide the {@link Lot.id | identifier(s)} of the related {@link Lot | lot(s)} here.
     */
    public relatedLots?: Array<Lot['id']>;
  };
}
