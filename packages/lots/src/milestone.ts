/**
 *  @packageDocumentation
 *  @module Lots
 */

import * as Core from '@ts4ocds/core/planning';

import { WithRelatedLots } from './mixins';

/**
 * If this milestone relates to one or more specific lots, provide the identifier(s) of the related lot(s) here.
 */
export class Milestone extends WithRelatedLots(Core.Milestone) {}
