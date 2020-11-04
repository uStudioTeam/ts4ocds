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
   * A list of the spending {@link Transaction | transactions} made against this contract.
   */
  public transactions!: Transaction[];

  /**
   * As {@link Milestone | milestones} are completed, the {@link Milestone.status | milestone's status} and dates should be updated.
   */
  public milestones!: Milestone[];

  /**
   * {@link Document.Document | Documents} and reports that are part of the implementation phase e.g. audit and evaluation reports.
   */
  public documents!: Document[];
}
