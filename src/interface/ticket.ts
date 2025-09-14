export interface ticket {
  _id: string;
  ticketNo: number;
  PatNum: number;
  AptNum: number;
  PatPlanNum: number;
  PlanNum: number;
  ticketType: number;
  status: number;
  rejectedReason: string;
  aptDate: string;
  isImported: boolean;
  ProviderName: string;
  Note: string;
  Metadata: {
    NotesForAgent: string;
  };
  clinic_id: string;
  clinic_name: string;
  clinic_email: string;
  clinic_address: string;
  clinic_npi: number;
  clinic_taxid: number;
  clinic_provider_Fname: string;
  clinic_provider_Lname: string;
  clinic_about: string;
  isImportTicketEnabled: boolean;
  isDropPlanEnabled: boolean;
  formType: number;
}
