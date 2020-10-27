/**
 * @packageDocumentation
 * @module Requirements
 */

import { Type } from 'class-transformer';
import * as Core from '@ts4ocds/core/award';

import {
  RequirementResponse,
  StringRequirementResponse,
  BooleanRequirementResponse,
  NumericRequirementResponse,
} from './requirement-response';

export class Award<RR extends RequirementResponse = RequirementResponse> extends Core.Award {
  /**
   * A list of the detailed responses of this award to the requirements of the tender.
   */
  @Type((options) => {
    switch (typeof (options?.object as Award | undefined)?.requirementResponses?.[0].value) {
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
  })
  public requirementResponses?: RR[];
}
