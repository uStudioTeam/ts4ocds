/**
 * @packageDocumentation
 * @module Requirements
 */

import * as Core from '@ts4ocds/core/award';
import type { Initializer } from '@ts4ocds/utils';

import type { RequirementResponse } from '../requirement-response';

/**
 * An award for the given procurement.
 * There can be more than one award per contracting process e.g. because the contract is split among different providers,
 * or because it is a standing offer.
 */
export class Award<RR extends RequirementResponse = RequirementResponse> extends Core.Award {
  /**
   * A list of the detailed responses of this award to the requirements of the tender.
   */
  public requirementResponses?: RR[];

  public constructor(initializer: Initializer<Award<RR>>) {
    super(initializer);
  }
}
