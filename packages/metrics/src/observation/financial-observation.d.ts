/**
 * @packageDocumentation
 * @module Metrics.Observation
 */

import type { Value } from '@ts4ocds/core/value';

import type { Dimensions } from './dimensions';
import type { Observation } from './observation';

/**
 * An actual or target observation.
 * Observations should include either a {@link FinancialObservation.value | value} (for financial {@link Metric | metrics}) or {@link NonFinancialObservation.measure | measure} (for other {@link Metric | metrics}).
 *
 * @param D
 * Any number of dimensions can be recorded within this object.
 * Dimensions names should follow the camelCase conventions of OCDS.
 */
export interface FinancialObservation<D extends Dimensions = undefined> extends Observation<D> {
  /**
   * The {@link Value.Value | value} of this forecast, target or actual observation.
   */
  value: Value;
}
