/**
 * @packageDocumentation
 * @module Requirements.Requirement
 */

import { Period } from '@ts4ocds/core/period';
import { Initializable } from '@ts4ocds/utils';

import {
  RequirementResponse,
  StringRequirementResponse,
  BooleanRequirementResponse,
  NumericRequirementResponse,
} from '../requirement-response';
import type { DataType } from '../data-type';
import { RequirementReference } from '../requirement-reference';

import type { StringRequirement } from './string-requirement';
import type { RangedRequirement } from './ranged-requirement';
import type { NumericRequirement } from './numeric-requirement';
import type { BooleanRequirement } from './boolean-requirement';

/**
 * An atomic requirement.
 * Requirements can specify the expected value that the {@link RequirementResponse.RequirementResponse | response} has to contain,
 * or a {@link RangedRequirement | range} of threshold values within which the {@link RequirementResponse.RequirementResponse | response} has to fit in.
 * The requirement may apply to a certain {@link Period.Period | period} of time.
 */
export class Requirement extends Initializable<Requirement> {
  /**
   * The {@link DataType | data type} in which the {@link RequirementResponse.RequirementResponse | requirement response} must be provided.
   */
  public dataType?: DataType;

  /**
   * Used to specify a particular {@link Period.Period | period} the requirement applies to, for example the bidder's turnover in a given year.
   */
  public period?: Period;

  /**
   * The identifier for this requirement.
   * It must be unique and cannot change within the Open Contracting Process it is part of (defined by a single ocid).
   * See the [identifier guidance](http://standard.open-contracting.org/latest/en/schema/identifiers/) for further details.
   */
  public id!: string;

  /**
   * The title of this atomic requirement.
   */
  public title?: string;

  /**
   * A free text description for this atomic requirement.
   */
  public description?: string;

  /**
   * Used to check if the requirement is of {@link BooleanRequirement | `boolean`} {@link DataType | data type}.
   */
  public isOfType(type: 'boolean'): this is BooleanRequirement;

  /**
   * Used to check if the requirement is of {@link StringRequirement | `string`} {@link DataType | data type}.
   */
  public isOfType(type: 'string'): this is StringRequirement;

  /**
   * Used to check if the requirement is of {@link NumericRequirement | numeric} {@link DataType | data type}.
   * `numeric` is accepted for checking for both `number` and `integer` at the same time.
   */
  public isOfType(type: 'number' | 'integer' | 'numeric'): this is NumericRequirement;

  /**
   * Used to check if the requirement is of specific {@link DataType | data type}.
   */
  public isOfType(dataType: DataType | 'numeric'): boolean {
    if (dataType === 'numeric') {
      return ['number', 'integer'].includes(this.dataType || '');
    }

    return this.dataType === dataType;
  }

  /**
   * Used to check if the requirement has specified numeric value {@link RangedRequirement | range} `[minValue, maxValue]`.
   */
  public isRanged(requirement: Requirement): this is RangedRequirement {
    if (this.isOfType('numeric')) {
      return 'minValue' in requirement || 'maxValue' in requirement;
    }

    return false;
  }

  /**
   * Creates an instance of a {@link RequirementReference | `RequirementReference`} class from this `Requirement`.
   */
  public toReference(): RequirementReference {
    return new RequirementReference({
      id: this.id,
      title: this.title,
    });
  }

  /**
   * Creates an instance of a {@link RequirementResponse.RequirementResponse | `RequirementResponse`} class from this `Requirement`.
   */
  public toResponse(id: RequirementResponse['id']): RequirementResponse;

  /**
   * Creates an instance of a {@link RequirementResponse.RequirementResponse | `RequirementResponse`} class from this `Requirement`.
   * Holds a shape of a {@link BooleanRequirementResponse | `BooleanRequirementResponse`}.
   */
  public toResponse(
    id: RequirementResponse['id'],
    value: BooleanRequirementResponse['value']
  ): BooleanRequirementResponse;

  /**
   * Creates an instance of a {@link RequirementResponse.RequirementResponse | `RequirementResponse`} class from this `Requirement`.
   * Holds a shape of a {@link StringRequirementResponse | `StringRequirementResponse`}.
   */
  public toResponse(
    id: RequirementResponse['id'],
    value: StringRequirementResponse['value']
  ): StringRequirementResponse;

  /**
   * Creates an instance of a {@link RequirementResponse.RequirementResponse | `RequirementResponse`} class from this `Requirement`.
   * Holds a shape of a {@link NumericRequirementResponse | `NumericRequirementResponse`}.
   */
  public toResponse(
    id: RequirementResponse['id'],
    value: NumericRequirementResponse['value']
  ): NumericRequirementResponse;

  /**
   * Creates an instance of a {@link RequirementResponse.RequirementResponse | `RequirementResponse`} class from this `Requirement`.
   */
  public toResponse(id: RequirementResponse['id'], value?: RequirementResponse['value']): RequirementResponse {
    return new RequirementResponse({
      id,
      value,
      requirement: this.toReference(),
    });
  }
}
