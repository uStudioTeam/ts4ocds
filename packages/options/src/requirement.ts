/**
 * @packageDocumentation
 * @module Options
 */

import * as Core from '@ts4ocds/requirements/requirement';

import { WithOptionGroups, WithOptionsToCombine } from './mixins';

export class OptionGroupsRequirement extends WithOptionGroups(Core.Requirement) {}

export class OptionsToCombineRequirement extends WithOptionsToCombine(Core.Requirement) {}
