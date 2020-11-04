/**
 * @packageDocumentation
 * @module Metrics.Observation
 */

import type { Dimensions } from './dimensions';
import type { Observation } from './observation';

/**
 * An actual or target observation.
 * Observations should include either a {@link FinancialObservation.value | value} (for financial {@link Metric | metrics}) or {@link NonFinancialObservation.measure | measure} (for other {@link Metric | metrics}).
 */
export interface NonFinancialObservation<D extends Dimensions = undefined> extends Observation<D> {
  /**
   * The measure of this forecast, target or actual observation.
   * Measures may be provided as free text or numerical values.
   */
  measure: string | number;
}