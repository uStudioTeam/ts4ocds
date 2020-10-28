/**
 * @packageDocumentation
 * @module Metrics
 */

import { Type } from 'class-transformer';
import * as Core from '@ts4ocds/core/award';

import { Metric } from './metric';

export class Award extends Core.Award {
  /**
   * Any target metrics set out as part of the contract award.
   */
  @Type(() => Metric)
  public agreedMetrics?: Metric[];
}
