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
 * An assertion that responds to a single {@link Requirement.Requirement | requirement}.
 * A requirement response provides the value for the {@link Requirement.Requirement | requirement} and may provide the {@link Period.Period | period} to which it applies.
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
   * The value of this requirement response. The value must be of the type defined in the {@link Requirement.dataType | `Requirement.dataType`} field.
   */
  public value?: string | number | boolean;

  /**
   * The {@link Period.Period | period} which the requirement response is applicable to.
   */
  public period?: Period;

  /**
   * The {@link Requirement.id | id} and {@link Requirement.title | title} of the {@link Requirement.Requirement | requirement}
   * which the response is applicable to.
   */
  public requirement!: RequirementReference;

  /**
   * Where this requirement response relates to a tenderer and is provided by the buyer or procuring entity
   * this field should be used to reference the entry in the parties section for the tenderer the response relates to.
   */
  public relatedTenderer?: OrganizationReference;

  /**
   * Used to check if this `RequirementResponse`'s {@link RequirementResponse.value | `value`} has {@link BooleanRequirementResponse | `boolean`} {@link DataType | dataType}.
   */
  public isOfType(dataType: 'boolean'): this is BooleanRequirementResponse;

  /**
   * Used to check if this `RequirementResponse`'s {@link RequirementResponse.value | `value`} has {@link StringRequirementResponse | `string`} {@link DataType | dataType}.
   */
  public isOfType(dataType: 'string'): this is StringRequirementResponse;

  /**
   * Used to check if this `RequirementResponse`'s {@link RequirementResponse.value | `value`} has {@link NumericRequirementResponse | numeric} {@link DataType | dataType}.
   */
  public isOfType(dataType: 'number' | 'integer' | 'numeric'): this is NumericRequirementResponse;

  /**
   * Used to check if this `RequirementResponse`'s {@link RequirementResponse.value | `value`} has spesific {@link DataType | dataType}.
   */
  public isOfType(dataType: DataType | 'numeric'): boolean {
    if (['integer', 'numeric'].includes(dataType)) {
      return typeof this.value === 'number';
    }

    return typeof this.value === dataType;
  }
}
