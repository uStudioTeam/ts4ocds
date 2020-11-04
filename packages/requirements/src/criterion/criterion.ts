/**
 * @packageDocumentation
 * @module Requirements.Criterion
 */

import { Initializable } from '@ts4ocds/utils';

import type { ItemCriterion } from './item-criterion';
import type { RequirementGroup } from '../requirement-group';
import type { TendererCriterion } from './tenderer-criterion';

/**
 * A criterion on which either bidders or {@link Item.Item | items} will be judged, evaluated or assessed.
 *
 * @param RG
 * A list of {@link RequirementGroup.RequirementGroup | requirement groups} for this criterion.
 * A criterion is satisfied by one or more {@link RequirementGroup.RequirementGroup | requirement groups} being met.
 * A {@link RequirementGroup.RequirementGroup | requirement groups} is met when all {@link Requirement.Requirement | requirements} in the group are satisfied.
 */
export class Criterion<RG extends RequirementGroup = RequirementGroup> extends Initializable<Criterion<RG>> {
  /**
   * The identifier for this criterion.
   * It must be unique and cannot change within the Open Contracting Process it is part of (defined by a single ocid).
   * See the [identifier guidance](http://standard.open-contracting.org/latest/en/schema/identifiers/) for further details.
   */
  public id!: string | number;

  /**
   * A title for this criterion.
   */
  public title?: string;

  /**
   * A description of this criterion.
   * Structured information should be provided in its other fields.
   */
  public description?: string;

  /**
   * A list of {@link RequirementGroup.RequirementGroup | requirement groups} for this criterion.
   * A criterion is satisfied by one or more {@link RequirementGroup.RequirementGroup | requirement groups} being met.
   * A {@link RequirementGroup.RequirementGroup | requirement groups} is met when all {@link Requirement.Requirement | requirements} in the group are satisfied.
   */
  public requirementGroups!: RG[];

  /**
   * Source of {@link RequirementResponse.RequirementResponse | response} to the {@link Requirement.Requirement | requirements} specified in the criterion,
   * for example responses may be submitted by tenderers or by an assessment committee at the `procuringEntity`.
   */
  public source?: 'tenderer' | 'buyer' | 'procuringEntity';

  /**
   * The schema element that the criterion judges, evaluates or assesses.
   * For example criterion may be defined against {@link Item.Item | items} or against bidders.
   */
  public relatesTo?: 'tenderer' | 'item';

  /**
   * Used to check this criterion's {@link TendererCriterion | relation} to the specific tenderer.
   */
  public isRelatedTo(relatesTo: 'tenderer'): this is TendererCriterion;

  /**
   * Used to check this criterion's {@link ItemCriterion | relation} to the specific {@link Item.Item}.
   */
  public isRelatedTo(relatesTo: 'item'): this is ItemCriterion;

  /**
   * Used to check this criterion's relation to the specific {@link Item.Item} or tenderer.
   */
  public isRelatedTo(relatesTo: Criterion['relatesTo']): boolean {
    return this.relatesTo === relatesTo;
  }
}
