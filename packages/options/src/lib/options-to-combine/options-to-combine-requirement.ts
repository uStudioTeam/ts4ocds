/**
 * @packageDocumentation
 * @module Options
 */

import * as Core from '@ts4ocds/requirements';
import type { Initializer } from '@ts4ocds/utils';

import { WithOptionsToCombine } from '../../mixins';

/**
 * An atomic requirement.
 * Requirements can specify the expected value that the {@link RequirementResponse.RequirementResponse | response} has to contain,
 * or a {@link RangedRequirement | range} of threshold values within which the {@link RequirementResponse.RequirementResponse | response} has to fit in.
 * The requirement may apply to a certain {@link Period.Period | period} of time.
 */
export class Requirement extends WithOptionsToCombine(Core.Requirement) {
  public constructor(initializer: Initializer<Requirement>) {
    super(initializer);
  }
}
