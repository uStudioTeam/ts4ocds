/**
 * @packageDocumentation
 * @module Requirements
 */

import * as Core from '@ts4ocds/core/award';
import type { Initializer } from '@ts4ocds/utils';

import { RequirementResponse } from './requirement-response';

export class Award<RR extends RequirementResponse = RequirementResponse> extends Core.Award {
  /**
   * A list of the detailed responses of this award to the requirements of the tender.
   */
  public requirementResponses?: RR[];

  public constructor(initializer: Initializer<Award<RR>>) {
    super(initializer);
  }
}
