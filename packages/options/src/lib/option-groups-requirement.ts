/**
 * @packageDocumentation
 * @module Options
 */

import * as Core from '@ts4ocds/requirements';
import type { Initializer } from '@ts4ocds/utils';

import { WithOptionGroups } from '../mixins';

/**
 * An atomic requirement.
 * Requirements can specify the expected value that the response has to contain,
 * or a range of threshold values within which the response has to fit in.
 * The requirement may apply to a certain period of time.
 */
export class Requirement extends WithOptionGroups(Core.Requirement) {
  public constructor(initializer: Initializer<Requirement>) {
    super(initializer);
  }
}
