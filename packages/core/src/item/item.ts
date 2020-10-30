/**
 * @packageDocumentation
 * @module Item
 */

import type { Initializer } from '@ts4ocds/utils';

import type { Unit } from './unit';
import type { Classification } from '../classification';

/**
 * A good, service, or work to be contracted.
 */
export class Item {
  /**
   * A local identifier to reference and merge the items by.
   * Must be unique within a given array of items.
   */
  public id: string | number;

  /**
   * A description of the goods, services to be provided.
   */
  public description?: string;

  /**
   * The primary classification for the item.
   */
  public classification?: Classification;

  /**
   * An array of additional classifications for the item.
   */
  public additionalClassifications?: Classification[];

  /**
   * A description of the unit in which the supplies, services or works are provided (e.g. hours, kilograms) and the unit-price.
   */
  public unit?: Unit;

  /**
   * The number of units to be provided.
   */
  public quantity?: number;

  public constructor(initializer: Initializer<Item>) {
    Object.assign(this, initializer);
  }
}
