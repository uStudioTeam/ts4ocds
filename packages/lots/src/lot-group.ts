/**
 *  @packageDocumentation
 *  @module Lots
 */

import { Initializable } from '@ts4ocds/utils';
import type { Value } from '@ts4ocds/core/value';

import type { Lot } from './lot';

/**
 * Where the buyer reserves the right to combine {@link Lot.Lot | lots}, or wishes to specify the total value for a group of {@link Lot.Lot | lots},
 * a lot group is used to capture this information.
 */
export class LotGroup extends Initializable<LotGroup> {
  /**
   * A local identifier for this group of lots.
   */
  public id!: string;

  /**
   * A list of the identifiers of the {@link Lot.Lot | lots} that form this group.
   * {@link Lot.Lot | Lots} may appear in more than one group.
   */
  public relatedLots?: Array<Lot['id']>;

  /**
   * The maximum estimated {@link Lot.value | value} of the {@link Lot.Lot | lots} in this group.
   * This may be lower than the sum total of {@link Lot.value | lot values}.
   */
  public maximumValue!: Value;

  /**
   * The buyer reserves the right to combine the {@link Lot.Lot | lots} in this group when {@link Award.Award | awarding} a contract.
   */
  public optionsToCombine?: boolean;
}
