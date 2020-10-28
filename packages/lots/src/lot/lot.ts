/**
 *  @packageDocumentation
 *  @module Lots
 */

import { Type } from 'class-transformer';
import { Value } from '@ts4ocds/core/value';

import type { LotStatus } from './lot-status';

/**
 * A lot is a grouping of items within a tender that can be bid on or awarded together.
 */
export class Lot {
  /**
   * The maximum estimated value of this lot.
   */
  @Type(() => Value)
  public value: Value;

  /**
   * A local identifier for this lot, such as a lot number.
   * This is used in relatedLots references at the item, document and award level.
   */
  public id: string;

  /**
   * A title for this lot.
   */
  public title?: string;

  /**
   * A description of this lot.
   */
  public description?: string;

  /**
   * The current status of the process related to this lot
   * based on the [tenderStatus codelist](http://standard.open-contracting.org/1.1/en/schema/codelists/#tender-status)
   */
  public status?: LotStatus;
}
