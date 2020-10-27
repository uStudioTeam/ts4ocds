/**
 * @packageDocumentation
 * @module Item
 */

import { Type } from 'class-transformer';

import { Unit } from './unit';
import { Classification } from './classification';

/**
 * A good, service, or work to be contracted.
 */
export class Item {
  /**
   * The primary classification for the item.
   */
  @Type(() => Classification)
  public classification?: Classification;

  /**
   * An array of additional classifications for the item.
   */
  @Type(() => Classification)
  public additionalClassifications?: Classification[];

  /**
   * A description of the unit in which the supplies, services or works are provided (e.g. hours, kilograms) and the unit-price.
   */
  @Type(() => Unit)
  public unit?: Unit;

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
   * The number of units to be provided.
   */
  public quantity?: number;
}