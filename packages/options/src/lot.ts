/**
 * @packageDocumentation
 * @module Options
 */

import * as Core from '@ts4ocds/lots/lot';

import { WithOptionGroups, WithOptionsToCombine } from './mixins';

export class OptionGroupsLot extends WithOptionGroups(Core.Lot) {}

export class OptionsToCombineLot extends WithOptionsToCombine(Core.Lot) {}
