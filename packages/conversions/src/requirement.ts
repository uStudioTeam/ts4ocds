/**
 * @packageDocumentation
 * @module Conversions
 */

import type { Initializer } from '@ts4ocds/utils';
import * as Core from '@ts4ocds/requirements/requirement';

import { WithOptions } from './mixins';

export class Requirement extends WithOptions(Core.Requirement) {
  public constructor(initializer: Initializer<Requirement>) {
    super(initializer);
  }
}
