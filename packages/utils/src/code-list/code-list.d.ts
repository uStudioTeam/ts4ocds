/**
 * @packageDocumentation
 * @module Utils
 */

import { OpenCodeList } from './open-code-list';
import { ClosedCodeList } from './closed-code-list';

export type CodeList<T> = T extends OpenCodeList<infer V> | ClosedCodeList<infer V> ? V : never;
