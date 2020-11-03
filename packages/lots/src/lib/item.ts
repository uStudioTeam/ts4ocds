/**
 *  @packageDocumentation
 *  @module Lots
 */

import * as Core from '@ts4ocds/core/item';
import type { Initializer } from '@ts4ocds/utils';

import { WithRelatedLot } from '../mixins';

/**
 * If this item belongs to a {@link Lot | lots}, provide the {@link Lot.id | identifier} of the related {@link Lot | lots} here.
 * Each item may only belong to a single {@link Lot | lots}.
 */
export class Item extends WithRelatedLot(Core.Item) {
  public constructor(initializer: Initializer<Item>) {
    super(initializer);
  }
}
