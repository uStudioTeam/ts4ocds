/**
 *  @packageDocumentation
 *  @module Lots
 */

import * as Core from '@ts4ocds/core/award';
import type { Initializer } from '@ts4ocds/utils';

import { WithRelatedLots } from '../mixins';

/**
 * If this award relates to one or more specific {@link Lot | lots}, provide the {@link Lot.id | identifier(s)} of the related {@link Lot | lot(s)} here.
 */
export class Award extends WithRelatedLots(Core.Award) {
  public constructor(initializer: Initializer<Award>) {
    super(initializer);
  }
}
