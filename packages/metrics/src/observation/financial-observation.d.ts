/**
 * @packageDocumentation
 * @module Metrics.Observation
 */

import type { Value } from '@ts4ocds/core/value';

import type { Dimensions } from './dimensions';
import type { Observation } from './observation';

/**
 * An actual or target observation.
 * Observations should include either a {@link Observation.value | value} (for financial {@link Metric | metrics}) or {@link Observation.measure | measure} (for other {@link Metric | metrics}).
 */
export interface FinancialObservation<D extends Dimensions = undefined> extends Observation<D> {
  /**
   * The {@link Value | value} of this forecast, target or actual observation.
   */
  value: Value;
}
