/**
 *  @packageDocumentation
 *  @module Lots
 */

import { Initializable } from '@ts4ocds/utils';
import type { Value } from '@ts4ocds/core/value';

import type { Lot } from './lot';

/**
 * Where the buyer reserves the right to combine lots, or wishes to specify the total value for a group of lots,
 * a lot group is used to capture this information.
 */
export class LotGroup extends Initializable<LotGroup> {
  /**
   * A local identifier for this group of lots.
   */
  public id: string;

  /**
   * A list of the identifiers of the lots that form this group.
   * Lots may appear in more than one group.
   */
  public relatedLots?: Array<Lot['id']>;

  /**
   * The maximum estimated value of the lots in this group.
   * This may be lower than the sum total of lot values
   */
  public maximumValue: Value;

  /**
   * The buyer reserves the right to combine the lots in this group when awarding a contract.
   */
  public optionsToCombine?: boolean;
}
