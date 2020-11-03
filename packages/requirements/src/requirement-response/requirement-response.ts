/**
 * @packageDocumentation
 * @module Requirements.RequirementResponse
 */

import { Initializable } from '@ts4ocds/utils';
import type { Period } from '@ts4ocds/core/period';
import type { OrganizationReference } from '@ts4ocds/core/organization';

import type { DataType } from '../data-type';
import type { RequirementReference } from '../requirement-reference';
import type { StringRequirementResponse } from './string-requirement-response';
import type { BooleanRequirementResponse } from './boolean-requirement-response';
import type { NumericRequirementResponse } from './numeric-requirement-response';

/**
 * An assertion that responds to a single requirement.
 * A requirement response provides the value for the requirement and may provide the period to which it applies.
 */
export class RequirementResponse extends Initializable<RequirementResponse> {
  /**
   * The identifier for this requirement response.
   * It must be unique and cannot change within the Open Contracting Process it is part of (defined by a single ocid).
   * See the [identifier guidance](http://standard.open-contracting.org/latest/en/schema/identifiers/) for further details.
   */
  public id!: string;

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

  /**
   * The period which the requirement response is applicable to.
   */
  public period?: Period;

  /**
   * The id and title of the requirement which the response is applicable to.
   */
  public requirement!: RequirementReference;

  /**
   * Where this requirement response relates to a tenderer and is provided by the buyer or procuring entity
   * this field should be used to reference the entry in the parties section for the tenderer the response relates to.
   */
  public relatedTenderer?: OrganizationReference;

  public isOfType(dataType: 'boolean'): this is BooleanRequirementResponse;

  public isOfType(dataType: 'string'): this is StringRequirementResponse;

  public isOfType(dataType: 'number' | 'integer' | 'numeric'): this is NumericRequirementResponse;

  /**
   * Used to check if this RequirementResponse has spesific `value` {@link DataType | dataType}
   */
  public isOfType(dataType: DataType | 'numeric'): boolean {
    if (['integer', 'numeric'].includes(dataType)) {
      return typeof this.value === 'number';
    }

    return typeof this.value === dataType;
  }
}
