/**
 * @packageDocumentation
 * @module Tender
 */

import { CodeList, OpenCodeList } from '@ts4ocds/utils';

/**
 * The award criteria for the procurement,
 * using the open [awardCriteria](https://standard.open-contracting.org/1.1/en/schema/codelists/#award-criteria) codelist.
 */
export const AwardCriteria = new OpenCodeList([
  'priceOnly',
  'costOnly',
  'qualityOnly',
  'ratedCriteria',
  'lowestCost',
  'bestProposal',
  'bestValueToGovernment',
  'singleBidOnly',
]);

/**
 * The award criteria for the procurement,
 * using the open [awardCriteria](https://standard.open-contracting.org/1.1/en/schema/codelists/#award-criteria) codelist.
 */
export type AwardCriterion = CodeList<typeof AwardCriteria>;
