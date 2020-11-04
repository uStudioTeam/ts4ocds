/**
 *  @packageDocumentation
 *  @module Lots
 */

import * as Core from '@ts4ocds/core/item';
import type { Initializer } from '@ts4ocds/utils';
import type { Classification } from '@ts4ocds/core/classification';
import type { ItemClassificationScheme } from '@ts4ocds/core/item';

import { WithRelatedLot } from '../mixins';

/**
 * If this item belongs to a {@link Lot.Lot | lots}, provide the {@link Lot.id | identifier} of the related {@link Lot.Lot | lots} here.
 * Each item may only belong to a single {@link Lot.Lot | lots}.
 *
 * @param S
 * The scheme or codelist from which the {@link Classification.id | classification code} is taken.
 * For line item {@link Item.classification | classifications},
 * this uses the open [itemClassificationScheme](https://standard.open-contracting.org/1.1/en/schema/codelists/#item-classification-scheme) codelist.
 */
export class Item<S extends ItemClassificationScheme = ItemClassificationScheme> extends WithRelatedLot(Core.Item) {
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
