/**
 * @packageDocumentation
 * @module Requirements
 */

import { ClosedCodeList, CodeList } from '@ts4ocds/utils';

/**
 * The data type in which the {@link RequirementResponse | requirement response} must be provided.
 */
export const DataTypes = new ClosedCodeList(['string', 'number', 'integer', 'boolean']);

/**
 * The data type in which the {@link RequirementResponse | requirement response} must be provided.
 */
export type DataType = CodeList<typeof DataTypes>;
