export interface ServiceHistory {
  service_type: string | null;
  procedure_code: string | null;
  service_date: string | null;
  tooth?: string | null;
  surfaces?: string | null;
  area: string | null;
}

export interface ProcessedHistoryItem {
  date: string;
  ToothRange: string;
  surf: string;
  procCode: string;
  toothNumber: number;
  toothRange: string;
}
