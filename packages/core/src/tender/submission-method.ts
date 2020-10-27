/**
 * @packageDocumentation
 * @module Tender
 */

import { CodeList, OpenCodeList } from '@ts4ocds/utils';

/**
 * The methods by which bids are submitted,
 * using the open [submissionMethod](https://standard.open-contracting.org/1.1/en/schema/codelists/#submission-method) codelist.
 */
export const SubmissionMethods = new OpenCodeList([
  'electronicSubmission',
  'electronicAuction',
  'written',
  'inPerson',
]);

/**
 * The methods by which bids are submitted,
 * using the open [submissionMethod](https://standard.open-contracting.org/1.1/en/schema/codelists/#submission-method) codelist.
 */
export type SubmissionMethod = CodeList<typeof SubmissionMethods>;
