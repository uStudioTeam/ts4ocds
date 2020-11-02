/**
 * @packageDocumentation
 * @module Metrics
 */

import * as Core from '@ts4ocds/core/contract';
import type { Initializer } from '@ts4ocds/utils';

import type { Metric } from '../metric';

/**
 * Information during the performance / implementation stage of the contract.
 */
export class Implementation extends Core.Implementation {
  /**
   * Reported results from the delivery of the contracted goods, works or services.
   */
  public metrics?: Metric[];

  public constructor(initializer: Initializer<Implementation>) {
    super(initializer);
  }
}
