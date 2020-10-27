/**
 * @packageDocumentation
 * @module Contract
 */

import { Type } from 'class-transformer';

import { Document } from '../document';
import { Milestone } from '../planning';
import { Transaction } from './transaction';

/**
 * Information during the performance / implementation stage of the contract.
 */
export class Implementation {
  /**
   * A list of the spending transactions made against this contract
   */
  @Type(() => Transaction)
  public transactions: Transaction[];

  /**
   * As milestones are completed, the milestone's status and dates should be updated.
   */
  @Type(() => Milestone)
  public milestones: Milestone[];

  /**
   * Documents and reports that are part of the implementation phase e.g. audit and evaluation reports.
   */
  @Type(() => Document)
  public documents: Document[];
}
