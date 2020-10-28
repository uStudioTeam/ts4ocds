/**
 * @packageDocumentation
 * @module Metrics
 */

import { Type } from 'class-transformer';
import { Unit } from '@ts4ocds/core/item';
import { Period } from '@ts4ocds/core/period';

import { MilestoneReference } from '../milestone-reference';

import type { Dimensions } from './dimensions';
import type { FinancialObservation } from './financial-observation';
import type { NonFinancialObservation } from './non-financial-observation';

export class Observation<D extends Dimensions = undefined> {
  /**
   * The period over which this observation is measured.
   */
  @Type(() => Period)
  public period?: Period;

  /**
   * Unit
   */
  @Type(() => Unit)
  public unit?: Unit;

  /**
   * A link to the milestone in the implementation section of OCDS to which this forecast,
   * target or actual observation relates.
   */
  @Type(() => MilestoneReference)
  public relatedImplementationMilestone?: MilestoneReference;

  /**
   * Any number of dimensions can be recorded within this object.
   * Dimensions names should follow the camelCase conventions of OCDS.
   */
  @Type(() => Object)
  public dimensions?: D;

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
   * Used to specify if this observation is related to financial metrics.
   */
  public isFinancial(): this is FinancialObservation<D> {
    return 'value' in this;
  }

  /**
   * Used to specify if this observation is related to non-financial metrics.
   */
  public isNonFinancial(): this is NonFinancialObservation<D> {
    return 'measure' in this;
  }
}
