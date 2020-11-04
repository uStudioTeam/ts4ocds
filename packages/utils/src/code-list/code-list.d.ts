/**
 * @packageDocumentation
 * @module Utilities.CodeList
 */

import { OpenCodeList } from './open-code-list';
import { ClosedCodeList } from './closed-code-list';

/**
 * A type that extracts a union of strings from the {@link OpenCodeList} or {@link ClosedCodeList} instance's values.
 */
export type CodeList<T> = T extends OpenCodeList<infer V> | ClosedCodeList<infer V> ? V : never;
