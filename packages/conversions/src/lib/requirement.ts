/**
 * @packageDocumentation
 * @module Conversions
 */

import type { Initializer } from '@ts4ocds/utils';
import * as Core from '@ts4ocds/requirements';

import { WithOptions } from '../mixins';

/**
 * An atomic requirement.
 * Requirements can specify the expected value that the response has to contain,
 * or a range of threshold values within which the response has to fit in.
 * The requirement may apply to a certain period of time.
 */
export class Requirement extends WithOptions(Core.Requirement) {
  public constructor(initializer: Initializer<Requirement>) {
    super(initializer);
  }
}
