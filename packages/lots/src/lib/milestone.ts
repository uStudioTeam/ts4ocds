/**
 *  @packageDocumentation
 *  @module Lots
 */

import * as Core from '@ts4ocds/core/planning';
import type { Initializer } from '@ts4ocds/utils';
import type { MilestoneType } from '@ts4ocds/core/planning';

import { WithRelatedLots } from '../mixins';

/**
 * If this milestone relates to one or more specific {@link Lot.Lot | lots}, provide the {@link Lot.id | identifier(s)} of the related {@link Lot.Lot | lot(s)} here.
 *
 * @param MT
 * The nature of the milestone,
 * using the open [milestoneType](https://standard.open-contracting.org/1.1/en/schema/codelists/#milestone-type) codelist.
 */
export class Milestone<MT extends MilestoneType = MilestoneType> extends WithRelatedLots(Core.Milestone) {
  /**
   * The nature of the milestone,
   * using the open [milestoneType](https://standard.open-contracting.org/1.1/en/schema/codelists/#milestone-type) codelist.
   */
  public type?: MT | string;

  public constructor(initializer: Initializer<Milestone<MT>>) {
    super(initializer);
  }
}
