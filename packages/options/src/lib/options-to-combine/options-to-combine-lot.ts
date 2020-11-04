/**
 * @packageDocumentation
 * @module Options
 */

import * as Core from '@ts4ocds/lots';
import type { Initializer } from '@ts4ocds/utils';

import { WithOptionsToCombine } from '../../mixins';

/**
 * A lot is a grouping of items within a tender that can be bid on or awarded together.
 */
export class Lot extends WithOptionsToCombine(Core.Lot) {
  public constructor(initializer: Initializer<Lot>) {
    super(initializer);
  }
}
