import { ticket } from "../../interface/ticket";
export class ticketParser {
  protected data: any;
  constructor(data: any) {
    this.data = data;
  }
  parseTicket(): ticket {
    return {
      _id: "",
      ticketNo: 0,
      PatNum: 0,
      AptNum: 0,
      PatPlanNum: 0,
      PlanNum: 0,
      ticketType: 0,
      status: 0,
      rejectedReason: "",
      aptDate: "",
      isImported: false,
      ProviderName: "",
      Note: "",
      Metadata: { NotesForAgent: "" },
      clinic_id: "",
      clinic_name: "",
      clinic_email: "",
      clinic_address: "",
      clinic_npi: 0,
      clinic_taxid: 0,
      clinic_provider_Fname: "",
      clinic_provider_Lname: "",
      clinic_about: "",
      isImportTicketEnabled: false,
      isDropPlanEnabled: false,
      formType: 0,
    };
  }
}


