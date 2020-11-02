/**
 *  @packageDocumentation
 *  @module Lots
 */

import * as Core from '@ts4ocds/core/item';
import type { Initializer } from '@ts4ocds/utils';

import { WithRelatedLot } from '../mixins';

/**
 * If this item belongs to a lot, provide the identifier of the related lot here.
 * Each item may only belong to a single lot.
 */
export class Item extends WithRelatedLot(Core.Item) {
  public constructor(initializer: Initializer<Item>) {
    super(initializer);
  }
}