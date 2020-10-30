/**
 *  @packageDocumentation
 *  @module Lots
 */

import type { Value } from '@ts4ocds/core/value';
import type { Initializer } from '@ts4ocds/utils';

import type { LotStatus } from './lot-status';

/**
 * A lot is a grouping of items within a tender that can be bid on or awarded together.
 */
export class Lot {
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
   * The maximum estimated value of this lot.
   */
  public value: Value;

  /**
   * The current status of the process related to this lot
   * based on the [tenderStatus codelist](http://standard.open-contracting.org/1.1/en/schema/codelists/#tender-status)
   */
  public status?: LotStatus;

  public constructor(initializer: Initializer<Lot>) {
    Object.assign(this, initializer);
  }
}
