/**
 *  @packageDocumentation
 *  @module Lots
 */

import { Type } from 'class-transformer';
import * as Core from '@ts4ocds/core/planning';

import { WithRelatedLots } from './mixins';

/**
 * If this milestone relates to one or more specific lots, provide the identifier(s) of the related lot(s) here.
 */
export class Milestone<MT extends Core.MilestoneType = Core.MilestoneType> extends WithRelatedLots(Core.Milestone) {
  @Type(() => String)
  public type?: MT | string;
}
