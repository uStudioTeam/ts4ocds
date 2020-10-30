/**
 * @packageDocumentation
 * @module Metrics
 */

import type { Unit } from '@ts4ocds/core/item';
import type { Period } from '@ts4ocds/core/period';
import { hasOwnProperty, Initializer } from '@ts4ocds/utils';

import type { MilestoneReference } from '../milestone-reference';

import type { Dimensions } from './dimensions';
import type { FinancialObservation } from './financial-observation';
import type { NonFinancialObservation } from './non-financial-observation';

export class Observation<D extends Dimensions = undefined> {
  /**
   * A local identifier for this specific observation.
   * This may be an arbitrary identifier, or could be a composite of the metric identifier, and the date
   * and other dimensions of this observation.
   */
  public id: string;

  /**
   * Any notes on this observation.
   * This may include clarifying information.
   */
  public notes?: string;

  /**
   * The period over which this observation is measured.
   */
  public period?: Period;

  /**
   * Unit
   */
  public unit?: Unit;

  /**
   * Any number of dimensions can be recorded within this object.
   * Dimensions names should follow the camelCase conventions of OCDS.
   */
  public dimensions?: D;

  /**
   * A link to the milestone in the implementation section of OCDS to which this forecast,
   * target or actual observation relates.
   */
  public relatedImplementationMilestone?: MilestoneReference;

  public constructor(initializer: Initializer<Observation<D>>) {
    Object.assign(this, initializer);
  }

  /**
   * Used to specify if this observation is related to financial metrics.
   */
  public isFinancial(): this is FinancialObservation<D> {
    return hasOwnProperty(this, 'value');
  }

  /**
   * Used to specify if this observation is related to non-financial metrics.
   */
  public isNonFinancial(): this is NonFinancialObservation<D> {
    return hasOwnProperty(this, 'measure');
  }
}
