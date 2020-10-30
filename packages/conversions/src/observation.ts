/**
 * @packageDocumentation
 * @module Conversions
 */

import type { Initializer } from '@ts4ocds/utils';
import * as Core from '@ts4ocds/metrics/observation';

import { WithOptions } from './mixins';

export class Observation<D extends Core.Dimensions = undefined> extends WithOptions(Core.Observation) {
  // Same type but still got error :/
  // @ts-ignore
  public dimensions?: Core.Observation<D>['dimensions'];

  public constructor(initializer: Initializer<Observation<D>>) {
    super(initializer);
  }
}
