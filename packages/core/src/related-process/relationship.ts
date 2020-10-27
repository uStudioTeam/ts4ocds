/**
 * @packageDocumentation
 * @module RelatedProcess
 */

import { CodeList, OpenCodeList } from '@ts4ocds/utils';

/**
 * The type of relationship,
 * using the open [relatedProcess](https://standard.open-contracting.org/1.1/en/schema/codelists/#related-process) codelist.
 */
export const Relationships = new OpenCodeList([
  'framework',
  'planning',
  'parent',
  'prior',
  'unsuccessfulProcess',
  'subContract',
  'replacementProcess',
  'renewalProcess',
]);

/**
 * The type of relationship,
 * using the open [relatedProcess](https://standard.open-contracting.org/1.1/en/schema/codelists/#related-process) codelist.
 */
export type Relationship = CodeList<typeof Relationships>;
