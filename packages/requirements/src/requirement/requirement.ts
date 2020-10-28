/**
 * @packageDocumentation
 * @module Requirements
 */

import { Period } from '@ts4ocds/core/period';
import { plainToClass, Type } from 'class-transformer';

import {
  RequirementResponse,
  StringRequirementResponse,
  BooleanRequirementResponse,
  NumericRequirementResponse,
} from '../requirement-response';
import type { DataType } from '../data-type';
import { RequirementReference } from '../requirement-reference';

import type { BooleanRequirement } from './boolean-requirement';
import type { StringRequirement } from './string-requirement';
import type { NumericRequirement } from './numeric-requirement';
import type { RangedRequirement } from './ranged-requirement';

/**
 * An atomic requirement.
 * Requirements can specify the expected value that the response has to contain,
 * or a range of threshold values within which the response has to fit in.
 * The requirement may apply to a certain period of time.
 */
export class Requirement {
  /**
   * The data type in which the requirement response must be provided.
   */
  @Type(() => String)
  public dataType?: DataType;

  /**
   * Used to specify a particular period the requirement applies to, for example the bidder's turnover in a given year.
   */
  @Type(() => Period)
  public period?: Period;

  /**
   * The identifier for this requirement.
   * It must be unique and cannot change within the Open Contracting Process it is part of (defined by a single ocid).
   * See the [identifier guidance](http://standard.open-contracting.org/latest/en/schema/identifiers/) for further details.
   */
  public id: string;

  /**
   * The title of this atomic requirement.
   */
  public title?: string;

  /**
   * A free text description for this atomic requirement.
   */
  public description?: string;

  public isOfType(type: 'boolean'): this is BooleanRequirement;

  public isOfType(type: 'string'): this is StringRequirement;

  public isOfType(type: 'number' | 'integer' | 'numeric'): this is NumericRequirement;

  /**
   * Used to check if the requirement is of specific dataType.
   * 'numeric' is accepted for checking for both `number` and `integer` at the same time.
   */
  public isOfType(dataType: DataType | 'numeric'): boolean {
    return dataType === 'numeric' ? ['number', 'integer'].includes(this.dataType || '') : this.dataType === dataType;
  }

  /**
   * Used to check if the requirement has specified numeric value range (`minValue`, `maxValue`).
   */
  public isRanged(requirement: Requirement): this is RangedRequirement {
    if (this.isOfType('numeric')) {
      return 'minValue' in requirement || 'maxValue' in requirement;
    }

    return false;
  }

  /**
   * Creates a {@link RequirementReference} from this `Requirement`
   */
  public toReference(): RequirementReference {
    return plainToClass(RequirementReference, this);
  }

  public toResponse(id: RequirementResponse['id']): RequirementResponse;

  public toResponse(
    id: RequirementResponse['id'],
    value: BooleanRequirementResponse['value']
  ): BooleanRequirementResponse;

  public toResponse(
    id: RequirementResponse['id'],
    value: StringRequirementResponse['value']
  ): StringRequirementResponse;

  public toResponse(
    id: RequirementResponse['id'],
    value: NumericRequirementResponse['value']
  ): NumericRequirementResponse;

  /**
   * Creates a {@link RequirementResponse} from this `Requirement`
   */
  public toResponse(id: RequirementResponse['id'], value?: RequirementResponse['value']): RequirementResponse {
    const prototype = (() => {
      switch (typeof value) {
        case 'string': {
          return StringRequirementResponse;
        }
        case 'boolean': {
          return BooleanRequirementResponse;
        }
        case 'number': {
          return NumericRequirementResponse;
        }
        case 'undefined':
        default: {
          return RequirementResponse;
        }
      }
    })();

    return plainToClass(prototype, {
      id,
      value,
      requirement: this.toReference(),
    });
  }
}
