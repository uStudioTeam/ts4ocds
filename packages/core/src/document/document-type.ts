/**
 * @packageDocumentation
 * @module Document
 */

import { CodeList, OpenCodeList } from '@ts4ocds/utils';

/**
 * A classification of the document described,
 * using the open [documentType](https://standard.open-contracting.org/1.1/en/schema/codelists/#document-type) codelist.
 */
export const DocumentTypes = new OpenCodeList([
  'plannedProcurementNotice',
  'tenderNotice',
  'awardNotice',
  'contractNotice',
  'completionCertificate',
  'procurementPlan',
  'biddingDocuments',
  'technicalSpecifications',
  'evaluationCriteria',
  'evaluationReports',
  'contractDraft',
  'contractSigned',
  'contractArrangements',
  'contractSchedule',
  'physicalProgressReport',
  'financialProgressReport',
  'finalAudit',
  'hearingNotice',
  'marketStudies',
  'eligibilityCriteria',
  'clarifications',
  'shortlistedFirms',
  'environmentalImpact',
  'assetAndLiabilityAssessment',
  'riskProvisions',
  'winningBid',
  'complaints',
  'contractAnnexe',
  'contractGuarantees',
  'subContract',
  'needsAssessment',
  'feasibilityStudy',
  'projectPlan',
  'billOfQuantity',
  'bidders',
  'conflictOfInterest',
  'debarments',
  'illustration',
  'submissionDocuments',
  'contractSummary',
  'cancellationDetails',
] as const);

/**
 * A classification of the document described,
 * using the open [documentType](https://standard.open-contracting.org/1.1/en/schema/codelists/#document-type) codelist.
 */
export type DocumentType = CodeList<typeof DocumentTypes>;
