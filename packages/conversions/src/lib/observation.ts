/**
 * @packageDocumentation
 * @module Conversions
 */

import * as Core from '@ts4ocds/metrics';
import type { Initializer } from '@ts4ocds/utils';

import { WithOptions } from '../mixins';

/**
 /**
 * An actual or target observation.
 * Observations should include either a {@link Observation.value | value} (for financial {@link Metric | metrics}) or {@link Observation.measure | measure} (for other {@link Metric | metrics}).
 */
export class Observation<D extends Core.Dimensions = undefined> extends WithOptions(Core.Observation) {
  // Same type but still got error :/
  // @ts-ignore
  public dimensions?: Core.Observation<D>['dimensions'];

  public constructor(initializer: Initializer<Observation<D>>) {
    super(initializer);
  }
}
