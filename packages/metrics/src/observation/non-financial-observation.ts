/**
 * @packageDocumentation
 * @module Metrics
 */

import { Observation } from './observation';
import type { Dimensions } from './dimensions';

export class NonFinancialObservation<D extends Dimensions = undefined> extends Observation<D> {
  /**
   * The measure of this forecast, target or actual observation.
   * Measures may be provided as free text or numerical values.
   */
  public measure: string | number;
}
