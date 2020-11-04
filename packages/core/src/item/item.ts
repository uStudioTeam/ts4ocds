/**
 * @packageDocumentation
 * @module Standard.Item
 */

import { Initializable } from '@ts4ocds/utils';
import { ItemClassificationScheme } from './item-classification-scheme';

import type { Unit } from '../unit';
import type { Classification } from '../classification';

/**
 * A good, service, or work to be contracted.
 */
export class Item<S extends ItemClassificationScheme = ItemClassificationScheme> extends Initializable<Item> {
  /**
   * A local identifier to reference and merge the items by.
   * Must be unique within a given array of items.
   */
  public id!: string | number;

  /**
   * A description of the goods, services to be provided.
   */
  public description?: string;

  /**
   * The primary {@link Classification | classification} for the item.
   */
  public classification?: Classification<S | string>;

  /**
   * An array of additional {@link Classification | classifications} for the item.
   */
  public additionalClassifications?: Classification<S | string>[];

  /**
   * A description of the {@link Unit | unit} in which the supplies, services or works are provided (e.g. hours, kilograms) and the unit-price.
   */
  public unit?: Unit;

  /**
   * The number of units to be provided.
   */
  public quantity?: number;
}
