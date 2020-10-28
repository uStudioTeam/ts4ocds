/**
 * @packageDocumentation
 * @module Metrics
 */

import { Type } from 'class-transformer';
import * as Core from '@ts4ocds/core/contract';

import { Metric } from './metric';

export class Implementation extends Core.Implementation {
  /**
   * Reported results from the delivery of the contracted goods, works or services.
   */
  @Type(() => Metric)
  public metrics?: Metric[];
}
