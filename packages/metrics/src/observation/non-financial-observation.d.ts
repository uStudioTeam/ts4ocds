/**
 * @packageDocumentation
 * @module Metrics
 */

import type { Dimensions } from './dimensions';
import type { Observation } from './observation';

export interface NonFinancialObservation<D extends Dimensions = undefined> extends Observation<D> {
  /**
   * The measure of this forecast, target or actual observation.
   * Measures may be provided as free text or numerical values.
   */
  measure: string | number;
}
