/**
 * @packageDocumentation
 * @module Options
 */

import * as Core from '@ts4ocds/lots/lot';
import type { Initializer } from '@ts4ocds/utils';

import { WithOptionGroups, WithOptionsToCombine } from './mixins';

export class OptionGroupsLot extends WithOptionGroups(Core.Lot) {
  public constructor(initializer: Initializer<OptionGroupsLot>) {
    super(initializer);
  }
}

export class OptionsToCombineLot extends WithOptionsToCombine(Core.Lot) {
  public constructor(initializer: Initializer<OptionsToCombineLot>) {
    super(initializer);
  }
}
