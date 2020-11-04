/**
 * @packageDocumentation
 * @module Standard.Unit
 */

import { Initializable } from '@ts4ocds/utils';

import type { Value } from '../value';

import type { UnitClassificationScheme } from './unit-classification-scheme';

/**
 * A description of the unit in which the supplies, services or works are provided (e.g. hours, kilograms) and the unit-price.
 *
 * @param S
 * The list from which {@link Unit.id | identifiers} for units of measure are taken,
 * using the open [unitClassificationScheme](https://standard.open-contracting.org/1.1/en/schema/codelists/#unit-classification-scheme) codelist.
 * 'UNCEFACT' is recommended.
 */
export class Unit<S extends UnitClassificationScheme = UnitClassificationScheme> extends Initializable<Unit<S>> {
  /**
   * The identifier from the codelist referenced in the {@link Unit.scheme | scheme} property.
   * Check the {@link UnitClassificationScheme | codelist} for details of how to find and use identifiers from the {@link Unit.scheme | scheme} in use.
   */
  public id?: string;

  /**
   * The {@link UnitClassificationScheme | list} from which identifiers for units of measure are taken,
   * using the open [unitClassificationScheme](https://standard.open-contracting.org/1.1/en/schema/codelists/#unit-classification-scheme) codelist.
   * 'UNCEFACT' is recommended.
   */
  public scheme?: S | string;

  /**
   * The monetary {@link Value.Value | value} of a single unit.
   */
  public value?: Value;

  /**
   * Name of the unit.
   */
  public name?: string;

  /**
   * The machine-readable URI for the unit of measure, provided by the {@link Unit.scheme | scheme}.
   */
  public uri?: string;
}
