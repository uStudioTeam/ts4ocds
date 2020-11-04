/**
 * @packageDocumentation
 * @module Options
 */

import * as Core from '@ts4ocds/lots';
import type { Initializer } from '@ts4ocds/utils';

import { WithOptionGroups } from '../../mixins';

/**
 * A lot is a grouping of {@link Item.Item | items} within a tender that can be bid on or {@link Award.Award | awarded} together.
 */
export class Lot extends WithOptionGroups(Core.Lot) {
  public constructor(initializer: Initializer<Lot>) {
    super(initializer);
  }
}
