/**
 * @packageDocumentation
 * @module Item
 */

import { Initializable } from '@ts4ocds/utils';

import type { Value } from '../../value';

import type { UnitClassificationScheme } from './unit-classification-scheme';

/**
 * A description of the unit in which the supplies, services or works are provided (e.g. hours, kilograms) and the unit-price.
 */
export class Unit<S extends UnitClassificationScheme = UnitClassificationScheme> extends Initializable<Unit<S>> {
  /**
   * The list from which identifiers for units of measure are taken,
   * using the open [unitClassificationScheme](https://standard.open-contracting.org/1.1/en/schema/codelists/#unit-classification-scheme) codelist.
   * 'UNCEFACT' is recommended.
   */
  public scheme?: S | string;

  /**
   * The monetary value of a single unit.
   */
  public value?: Value;

  /**
   * The identifier from the codelist referenced in the scheme property.
   * Check the codelist for details of how to find and use identifiers from the scheme in use.
   */
  public id?: string;

  /**
   * Name of the unit.
   */
  public name?: string;

  /**
   * The machine-readable URI for the unit of measure, provided by the scheme.
   */
  public uri?: string;
}
