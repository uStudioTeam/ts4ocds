/**
 * @packageDocumentation
 * @module Metrics
 */

import { Type } from 'class-transformer';
import { Value } from '@ts4ocds/core/value';

import { Observation } from './observation';
import type { Dimensions } from './dimensions';

export class FinancialObservation<D extends Dimensions = undefined> extends Observation<D> {
  /**
   * The value of this forecast, target or actual observation.
   */
  @Type(() => Value)
  public value: Value;
}
