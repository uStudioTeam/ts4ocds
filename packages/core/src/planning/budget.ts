/**
 * @packageDocumentation
 * @module Planning
 */

import type { Initializer } from '@ts4ocds/utils';

import type { Value } from '../value';

/**
 * This section contains information about the budget line, and associated projects,
 * through which this contracting process is funded.
 * It draws upon the data model of the [Fiscal Data Package](https://frictionlessdata.io/specs/fiscal-data-package/),
 * and should be used to cross-reference to more detailed information held using a Budget Data Package, or,
 * where no linked Budget Data Package is available, to provide enough information to allow a user to manually
 * or automatically cross-reference with another published source of budget and project information.
 */
export class Budget {
  /**
   * An identifier for the budget line item which provides funds for this contracting process.
   * This identifier should be possible to cross-reference against the provided data source.
   */
  public id?: string | number;

  /**
   * A short free text description of the budget source.
   * May be used to provide the title of the budget line, or the programme used to fund this project.
   */
  public description?: string;

  /**
   * The value reserved in the budget for this contracting process.
   * A negative value indicates anticipated income to the budget as a result of this contracting process, rather than expenditure.
   * Where the budget is drawn from multiple sources, the budget breakdown extension can be used.
   */
  public amount: Value;

  /**
   * The name of the project through which this contracting process is funded (if applicable).
   * Some organizations maintain a registry of projects, and the data should use the name
   * by which the project is known in that registry.
   * No translation option is offered for this string, as translated values can be provided in third-party data,
   * linked from the data source above.
   */
  public project?: string;

  /**
   * An external identifier for the project that this contracting process forms part of, or is funded via (if applicable).
   * Some organizations maintain a registry of projects, and the data should use the identifier from the relevant registry of projects.
   */
  public projectID?: string | number;

  /**
   * A URI pointing directly to a machine-readable record about the budget line-item or line-items that fund this contracting process.
   * Information can be provided in a range of formats, including using IATI, the Open Fiscal Data Standard
   * or any other standard which provides structured data on budget sources.
   * Human readable documents can be included using the planning.documents block.
   */
  public uri?: string;

  public constructor(initializer: Initializer<Budget>) {
    Object.assign(this, initializer);
  }
}
