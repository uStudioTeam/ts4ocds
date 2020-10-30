/**
 * @packageDocumentation
 * @module Options
 */

import { Type } from 'class-transformer';
import { Unit } from '@ts4ocds/core/item';
import { Period } from '@ts4ocds/core/period';
import { Address } from '@ts4ocds/core/address';
import type { Dimensions } from '@ts4ocds/metrics/observation';

/**
 * Available prescribed option for requirement/observation that can be set as a value for bid.requirementResponse/award.
 */
export class Option<D extends Dimensions = undefined> {
  @Type(() => Unit)
  public unit?: Unit;

  @Type(() => Period)
  public period?: Period;

  @Type(() => Object)
  public dimensions?: D;

  @Type(() => Address)
  public placeOfPerformance?: Address;

  /**
   * An identifier for this option.
   */
  public id: string | number;

  /**
   * Title for this option
   */
  public title?: string;

  /**
   * Free-text description for this option
   */
  public description?: string;

  /**
   * Value provided by this option
   */
  public value: string | number;

  public minValue?: number;

  public maxValue?: number;

  public measure?: string | number;
}
