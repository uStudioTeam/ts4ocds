/**
 *  @packageDocumentation
 *  @module Lots
 */

import type { Lot } from '../lot';

/**
 * Adds a `relatedLots` field declaration to class being applied to
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
     * If the entity relates to one or more specific lots, provide the identifier(s) of the related lot(s) here.
     */
    public relatedLots?: Array<Lot['id']>;
  };
}
