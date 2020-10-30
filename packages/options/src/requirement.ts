/**
 * @packageDocumentation
 * @module Options
 */

import type { Initializer } from '@ts4ocds/utils';
import * as Core from '@ts4ocds/requirements/requirement';

import { WithOptionGroups, WithOptionsToCombine } from './mixins';

export class OptionGroupsRequirement extends WithOptionGroups(Core.Requirement) {
  public constructor(initializer: Initializer<OptionGroupsRequirement>) {
    super(initializer);
  }
}

export class OptionsToCombineRequirement extends WithOptionsToCombine(Core.Requirement) {
  public constructor(initializer: Initializer<OptionsToCombineRequirement>) {
    super(initializer);
  }
}
