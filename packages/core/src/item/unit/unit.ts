/**
 * @packageDocumentation
 * @module Item
 */

import { Type } from 'class-transformer';

import { Value } from '../../value';
import type { UnitClassificationScheme } from './unit-classification-scheme';

/**
 * A description of the unit in which the supplies, services or works are provided (e.g. hours, kilograms) and the unit-price.
 */
export class Unit<S extends UnitClassificationScheme | string = UnitClassificationScheme> {
  /**
   * The list from which identifiers for units of measure are taken,
   * using the open [unitClassificationScheme](https://standard.open-contracting.org/1.1/en/schema/codelists/#unit-classification-scheme) codelist.
   * 'UNCEFACT' is recommended.
   */
  @Type(() => String)
  public scheme?: S;

  /**
   * The monetary value of a single unit.
   */
  @Type(() => Value)
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