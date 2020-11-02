/**
 * @packageDocumentation
 * @module Metrics
 */

import type { Value } from '@ts4ocds/core/value';

import type { Dimensions } from './dimensions';
import type { Observation } from './observation';

/**
 * An actual or target observation.
 * Observations should include either a value (for financial metrics) or measure (for other metrics).
 */
export interface FinancialObservation<D extends Dimensions = undefined> extends Observation<D> {
  /**
   * The value of this forecast, target or actual observation.
   */
  value: Value;
}
