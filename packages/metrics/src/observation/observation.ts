/**
 * @packageDocumentation
 * @module Metrics.Observation
 */

import type { Unit } from '@ts4ocds/core/unit';
import type { Period } from '@ts4ocds/core/period';
import { hasOwnProperty, Initializable } from '@ts4ocds/utils';

import type { MilestoneReference } from '../milestone-reference';

import type { Dimensions } from './dimensions';
import type { FinancialObservation } from './financial-observation';
import type { NonFinancialObservation } from './non-financial-observation';

/**
 * An actual or target observation.
 * Observations should include either a {@link FinancialObservation.value | value} (for financial {@link Metric | metrics}) or {@link NonFinancialObservation.measure | measure} (for other {@link Metric | metrics}).
 *
 * @param D
 * Any number of dimensions can be recorded within this object.
 * Dimensions names should follow the camelCase conventions of OCDS.
 */
export class Observation<D extends Dimensions = undefined> extends Initializable<Observation<D>> {
  /**
   * A local identifier for this specific observation.
   * This may be an arbitrary identifier, or could be a composite of the {@link Metric | metric} {@link Metric.id | identifier}, and the date
   * and other dimensions of this observation.
   */
  public id!: string;

  /**
   * Any notes on this observation.
   * This may include clarifying information.
   */
  public notes?: string;

  /**
   * The {@link Period.Period | period} over which this observation is measured.
   */
  public period?: Period;

  /**
   * {@link Unit.Unit}.
   */
  public unit?: Unit;

  /**
   * Any number of dimensions can be recorded within this object.
   * Dimensions names should follow the camelCase conventions of OCDS.
   */
  public dimensions?: D;

  /**
   * A link to the {@link MilestoneReference | milestone} in the implementation section of OCDS to which this forecast,
   * target or actual observation relates.
   */
  public relatedImplementationMilestone?: MilestoneReference;

  /**
   * Used to specify if this observation is related to {@link FinancialObservation | financial} {@link Metric | metrics}.
   */
  public isFinancial(): this is FinancialObservation<D> {
    return hasOwnProperty(this, 'value');
  }

  /**
   * Used to specify if this observation is related to {@link NonFinancialObservation | non-financial} {@link Metric | metrics}.
   */
  public isNonFinancial(): this is NonFinancialObservation<D> {
    return hasOwnProperty(this, 'measure');
  }
}
