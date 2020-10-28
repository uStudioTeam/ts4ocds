/**
 * @packageDocumentation
 * @module Requirements
 */

import { Type } from 'class-transformer';
import { Period } from '@ts4ocds/core/period';
import { OrganizationReference } from '@ts4ocds/core/organization';

import type { DataType } from '../data-type';
import { RequirementReference } from '../requirement-reference';
import type { StringRequirementResponse } from './string-requirement-response';
import type { BooleanRequirementResponse } from './boolean-requirement-response';
import type { NumericRequirementResponse } from './numeric-requirement-response';

/**
 * An assertion that responds to a single requirement.
 * A requirement response provides the value for the requirement and may provide the period to which it applies.
 */
export class RequirementResponse {
  /**
   * The period which the requirement response is applicable to.
   */
  @Type(() => Period)
  public period?: Period;

  /**
   * The id and title of the requirement which the response is applicable to.
   */
  @Type(() => RequirementReference)
  public requirement: RequirementReference;

  /**
   * Where this requirement response relates to a tenderer and is provided by the buyer or procuring entity
   * this field should be used to reference the entry in the parties section for the tenderer the response relates to.
   */
  @Type(() => OrganizationReference)
  public relatedTenderer?: OrganizationReference;

  /**
   * The identifier for this requirement response.
   * It must be unique and cannot change within the Open Contracting Process it is part of (defined by a single ocid).
   * See the [identifier guidance](http://standard.open-contracting.org/latest/en/schema/identifiers/) for further details.
   */
  public id: string;

  /**
   * A title for this requirement response.
   */
  public title?: string;

  /**
   * A description of this requirement response.
   * Structured information should be provided in its other fields.
   */
  public description?: string;

  /**
   * The value of this requirement response. The value must be of the type defined in the requirement.dataType field.
   */
  public value?: string | number | boolean;

  public isOfType(dataType: 'boolean'): this is BooleanRequirementResponse;

  public isOfType(dataType: 'string'): this is StringRequirementResponse;

  public isOfType(dataType: 'numeric'): this is NumericRequirementResponse;

  /**
   * Used to check if this RequirementResponse has spesific `value` {@link DataType | dataType}
   */
  public isOfType(dataType: Exclude<DataType, 'number' | 'integer'> | 'numeric'): boolean {
    switch (dataType) {
      case 'boolean':
      case 'string': {
        return typeof this.value === dataType;
      }
      case 'numeric':
      default: {
        return typeof this.value === 'number';
      }
    }
  }
}
