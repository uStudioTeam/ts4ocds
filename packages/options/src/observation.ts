/**
 * @packageDocumentation
 * @module Options
 */

import * as Core from '@ts4ocds/metrics/observation';

import { WithOptionGroups, WithOptionsToCombine } from './mixins';

export class OptionGroupsObservation<D extends Core.Dimensions = undefined> extends WithOptionGroups(Core.Observation) {
  // Same type but still got error :/
  // @ts-ignore
  public dimensions?: Core.Observation<D>['dimensions'];
}

export class OptionsToCombineObservation<D extends Core.Dimensions = undefined> extends WithOptionsToCombine(
  Core.Observation
) {
  // Same type but still got error :/
  // @ts-ignore
  public dimensions?: Core.Observation<D>['dimensions'];
}
