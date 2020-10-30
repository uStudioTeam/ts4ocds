/**
 * @packageDocumentation
 * @module Options
 */

import type { Initializer } from '@ts4ocds/utils';
import * as Core from '@ts4ocds/metrics/observation';

import { WithOptionGroups, WithOptionsToCombine } from './mixins';

export class OptionGroupsObservation<D extends Core.Dimensions = undefined> extends WithOptionGroups(Core.Observation) {
  // Same type but still got error :/
  // @ts-ignore
  public dimensions?: Core.Observation<D>['dimensions'];

  public constructor(initializer: Initializer<OptionGroupsObservation<D>>) {
    super(initializer);
  }
}

export class OptionsToCombineObservation<D extends Core.Dimensions = undefined> extends WithOptionsToCombine(
  Core.Observation
) {
  // Same type but still got error :/
  // @ts-ignore
  public dimensions?: Core.Observation<D>['dimensions'];

  public constructor(initializer: Initializer<OptionsToCombineObservation<D>>) {
    super(initializer);
  }
}
