/**
 *  @packageDocumentation
 *  @module Lots
 */

import * as Core from '@ts4ocds/core/award';

import { WithRelatedLots } from './mixins';

/**
 * If this award relates to one or more specific lots, provide the identifier(s) of the related lot(s) here.
 */
export class Award extends WithRelatedLots(Core.Award) {}
