/**
 * @packageDocumentation
 * @module Requirements
 */

import { Type } from 'class-transformer';
import * as Core from '@ts4ocds/core/award';

import { RequirementResponse } from './requirement-response';

export class Award<RR extends RequirementResponse = RequirementResponse> extends Core.Award {
  /**
   * A list of the detailed responses of this award to the requirements of the tender.
   */
  @Type(() => RequirementResponse)
  public requirementResponses?: RR[];
}
