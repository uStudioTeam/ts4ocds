/**
 *  @packageDocumentation
 *  @module Lots
 */

import * as Core from '@ts4ocds/core/item';
import type { Initializer } from '@ts4ocds/utils';
import type { Classification } from '@ts4ocds/core/classification';

import { WithRelatedLot } from '../mixins';

/**
 * If this item belongs to a {@link Lot | lots}, provide the {@link Lot.id | identifier} of the related {@link Lot | lots} here.
 * Each item may only belong to a single {@link Lot | lots}.
 */
export class Item<S extends Core.ItemClassificationScheme = Core.ItemClassificationScheme> extends WithRelatedLot(
  Core.Item
) {
  /**
   * The primary {@link Classification | classification} for the item.
   */
  public classification?: Classification<S | string>;

  /**
   * An array of additional {@link Classification | classifications} for the item.
   */
  public additionalClassifications?: Classification<S | string>[];

  public constructor(initializer: Initializer<Item>) {
    super(initializer);
  }
}
