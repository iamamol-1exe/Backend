import { ProcessedHistoryItem } from "../interface/serviceHistory";

export type resultType = {
  pullClaimInformation: boolean;
  formType: string;
  clientId: string;
  uploadDocument: any[];
  agentName: string;
  GroupName: string;
  GroupNum: string;
  PlanType: string;
  networknote: string;
  FeeSched: {
    value: any;
    label: string;
  };
  MonetaryAmt_DiaIndDeduct: number;
  MonthRenew: string;
  EffectiveDate: string;
  shortcut: string;
  shortcut1: string;
  diagnosticApplied: any;
  isWaitingPeriod: any;
  diagnosticApplied1: string;
  MTC: string;
  ortho: any;
  missingtoothclause: string;
  frequency_exam_unit: string;
  shortcutfqexam: string;
  examcv: any;
  D0140share: string;
  procCodeQuestions: any;
  procCode: Array<{ value: number; label: string }>;
  patientHistory: ProcessedHistoryItem[];
  subscNote: string;
  planNotes: string;
  submit1: boolean;
  submit: boolean;
  MonetaryAmt_IndMax: number;
  MonetaryAmt_FamMax: number;
  deductibleUsed: number;
  insUsed: number;
  MonetaryAmt_XrayIndDeduct: number;
  MonetaryAmt_IndDeduct: number;
  MonetaryAmt_PreventativeDeductible: number;

  percentage_diagnostic: number | string;
  percentage_perio: number | string;
  percentage_xray: number | string;
  percentage_preventative: number | string;
  percentage_restorative: number | string;
  percentage_endo: number | string;
  percentage_oralSurgery: number | string;
  percentage_crowns: number | string;
  percentage_prosthodontics: number | string;

  restorativeWaitingPeriod: number;
  endoWaitingPeriod: number;
  perioWaitingPeriod: number;
  oralWaitingPeriod: number;
  crownsWaitingPeriod: number;
  prosthodonticsWaitingPeriod: number;

  ticketNo: number;
  ticketId: string;
  ticketData: any;
  extraPatientHistory: Array<{
    PatNum: number;
    ProcDate: string;
    Surf: string;
    ToothNum: string;
    ToothRange: string;
    ProcCode: string;
    ProcStatus: number;
  }>;
};
