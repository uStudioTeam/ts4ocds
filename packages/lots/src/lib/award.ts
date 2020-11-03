/**
 *  @packageDocumentation
 *  @module Lots
 */

import * as Core from '@ts4ocds/core/award';
import type { Initializer } from '@ts4ocds/utils';

import { WithRelatedLots } from '../mixins';

/**
 * If this award relates to one or more specific lots, provide the identifier(s) of the related lot(s) here.
 */
export class Award extends WithRelatedLots(Core.Award) {
  public constructor(initializer: Initializer<Award>) {
    super(initializer);
  }
}
