/**
 *  @packageDocumentation
 *  @module Lots
 */

import * as Core from '@ts4ocds/core/planning';
import type { Initializer } from '@ts4ocds/utils';

import { WithRelatedLots } from '../mixins';

/**
 * If this milestone relates to one or more specific {@link Lot | lots}, provide the {@link Lot.id | identifier(s)} of the related {@link Lot | lot(s)} here.
 */
export class Milestone<MT extends Core.MilestoneType = Core.MilestoneType> extends WithRelatedLots(Core.Milestone) {
  public type?: MT | string;

  public constructor(initializer: Initializer<Milestone<MT>>) {
    super(initializer);
  }
}
