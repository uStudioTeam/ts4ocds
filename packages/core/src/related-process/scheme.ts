/**
 * @packageDocumentation
 * @category RelatedProcess
 */

import { CodeList, OpenCodeList } from '@ts4ocds/utils';

/**
 * The related process scheme describes the kind of identifier used to cross-reference another process.
 */
export const Schemes = new OpenCodeList(['ocid'] as const);

/**
 * The related process scheme describes the kind of identifier used to cross-reference another process.
 */
export type Scheme = CodeList<typeof Schemes>;