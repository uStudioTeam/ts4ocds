/**
 * @packageDocumentation
 * @module Tender
 */

import { ClosedCodeList, CodeList } from '@ts4ocds/utils';

/**
 * The current status of the tender,
 * from the closed [tenderStatus](https://standard.open-contracting.org/1.1/en/schema/codelists/#tender-status) codelist.
 */
export const TenderStatuses = new ClosedCodeList([
  'planning',
  'planned',
  'active',
  'cancelled',
  'unsuccessful',
  'complete',
  'withdrawn',
] as const);

/**
 * The current status of the tender,
 * from the closed [tenderStatus](https://standard.open-contracting.org/1.1/en/schema/codelists/#tender-status) codelist.
 */
export type TenderStatus = CodeList<typeof TenderStatuses>;
