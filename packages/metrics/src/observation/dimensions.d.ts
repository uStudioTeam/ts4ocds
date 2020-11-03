/**
 * @packageDocumentation
 * @module Metrics.Observation
 */

/**
 * Any number of dimensions can be recorded within this object.
 * Dimensions names should follow the camelCase conventions of OCDS.
 */
export type Dimensions = Record<string, string> | undefined;
