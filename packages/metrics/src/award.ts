/**
 * @packageDocumentation
 * @module Metrics
 */

import * as Core from '@ts4ocds/core/award';
import type { Initializer } from '@ts4ocds/utils';

import type { Metric } from './metric';

export class Award extends Core.Award {
  /**
   * Any target metrics set out as part of the contract award.
   */
  public agreedMetrics?: Metric[];

  public constructor(initializer: Initializer<Award>) {
    super(initializer);
  }
}
