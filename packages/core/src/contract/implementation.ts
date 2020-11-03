/**
 * @packageDocumentation
 * @module Standard.Contract
 */

import { Initializable } from '@ts4ocds/utils';

import type { Document } from '../document';
import type { Milestone } from '../planning';
import type { Transaction } from './transaction';

/**
 * Information during the performance / implementation stage of the contract.
 */
export class Implementation extends Initializable<Implementation> {
  /**
   * A list of the spending transactions made against this contract
   */
  public transactions!: Transaction[];

  /**
   * As milestones are completed, the milestone's status and dates should be updated.
   */
  public milestones!: Milestone[];

  /**
   * Documents and reports that are part of the implementation phase e.g. audit and evaluation reports.
   */
  public documents!: Document[];
}
