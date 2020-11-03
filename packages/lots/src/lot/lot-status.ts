/**
 *  @packageDocumentation
 *  @module Lots.Lot
 */

import { TenderStatuses } from '@ts4ocds/core/tender';
import { ClosedCodeList, CodeList } from '@ts4ocds/utils';

/**
 * The current status of the process related to this lot
 * based on the [tenderStatus codelist](http://standard.open-contracting.org/1.1/en/schema/codelists/#tender-status)
 */
export const LotStatuses = new ClosedCodeList([...TenderStatuses]);

/**
 * The current status of the process related to this lot
 * based on the [tenderStatus codelist](http://standard.open-contracting.org/1.1/en/schema/codelists/#tender-status)
 */
export type LotStatus = CodeList<typeof LotStatuses>;
