/**
 *  @packageDocumentation
 *  @module Lots.Lot
 */

import { Initializable } from '@ts4ocds/utils';
import type { Value } from '@ts4ocds/core/value';

import type { LotStatus } from './lot-status';

/**
 * A lot is a grouping of {@link Item | items} within a tender that can be bid on or {@link Award | awarded} together.
 */
export class Lot extends Initializable<Lot> {
  /**
   * A local identifier for this lot, such as a lot number.
   * This is used in relatedLots references at the {@link Item | item}, {@link Document | document} and {@link Award | award} level.
   */
  public id!: string;

  /**
   * A title for this lot.
   */
  public title?: string;

  /**
   * A description of this lot.
   */
  public description?: string;

  /**
   * The maximum estimated {@link Value | value} of this lot.
   */
  public value!: Value;

  /**
   * The current {@link LotStatus | status} of the process related to this lot
   * based on the [tenderStatus codelist](http://standard.open-contracting.org/1.1/en/schema/codelists/#tender-status)
   */
  public status?: LotStatus;
}
