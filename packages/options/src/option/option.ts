/**
 * @packageDocumentation
 * @module Options.Option
 */

import type { Unit } from '@ts4ocds/core/unit';
import type { Period } from '@ts4ocds/core/period';
import type { Address } from '@ts4ocds/core/address';
import { hasOwnProperty, Initializable } from '@ts4ocds/utils';
import type { Dimensions } from '@ts4ocds/metrics/observation';

import type { RangedOption } from './ranged-option';
import type { PreciseOption } from './precise-option';

/**
 * Available prescribed option for {@link Requirement.Requirement | requirement}/{@link Observation.Observation | observation}
 * that can be set as a value for {@link RequirementResponse.RequirementResponse | bid.requirementResponse}/{@link Award.Award | award}.
 */
export class Option<D extends Dimensions = undefined> extends Initializable<Option<D>> {
  /**
   * An identifier for this option.
   */
  public id!: string | number;

  /**
   * Title for this option.
   */
  public title?: string;

  /**
   * Free-text description for this option.
   */
  public description?: string;

  public unit?: Unit;

  public period?: Period;

  public dimensions?: D;

  public placeOfPerformance?: Address;

  public measure?: string | number;

  /**
   * Used to check if this option is definined by a {@link PreciseOption | precise} `value`.
   */
  public isPresice(): this is PreciseOption<D> {
    return hasOwnProperty(this, 'value');
  }

  /**
   * Used to show if this coefficient should be defined by a {@link RangedOption | range} of `[minValue, maxValue]`.
   */
  public isRanged(): this is RangedOption<D> {
    return hasOwnProperty(this, 'minValue', 'maxValue');
  }
}
