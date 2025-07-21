import BaseParser from "./BaseParser";

class AetnaParser extends BaseParser {
    

  parsePatient() {
    const pat = this.data.patient ?? {};
    const cov = pat.coverage ?? {};
    const subscriber = this.data.subscriber ?? {};
    return {
      firstName: pat.first_name || "",
      lastName: pat.last_name || "",
      middleName: pat.middle_name || "",
      preferred: pat.name || [pat.first_name, pat.middle_name, pat.last_name].filter(Boolean).join(" "),
      dob: pat.dob || "",
      memberId: pat.member_id || "",
      gender: pat.gender ? String(pat.gender).toUpperCase() : "",
      address: {
        street: pat.address?.street || pat.address?.street1 ||  "",
        street2: pat.address?.street2 || "",
        city: pat.address?.city || "",
        state: pat.address?.state || "",
        zip: pat.address?.zip || "",
      },
      status: cov.status ? String(cov.status).toUpperCase() : "",
      dateEffective: cov.effective_date || "",
      dateTerminate: cov.end_date || "",
      relationship : pat.relationship || "",
      subscribername : subscriber.name,
    };
  }

  
  parseProvider() {
    const prov = this.data.provider ?? {};
    return {
      npi: prov.npi || "",
      lastName: prov.last_name || "",
    };
  }

 
  parsePlan() {
    const plan = this.data.plan ?? {};
    const payer = this.data.payer ?? {};
    return {
      GroupNum: plan.group_number || "",
      GroupName: plan.group_name || plan.name || "",
      PlanNum: plan.number || "",
      CarrierNum: payer.id || "",
      CarrierNum1: payer.id || "",
      CarrierName: payer.name || "",
      carrierPhone: payer.phone || payer.phone_number ||  "",
      ElectID: payer.id || ""
    };
  }

  
  parseDeductibles() {
    return Array.isArray(this.data.deductible)
      ? this.data.deductible.map((d: any) => ({
          network: d.network || "",
          category: d.category || "",
          planPeriod: d.plan_period || "",
          amount: d.amount || 0,
          coverageLevel: d.coverage_level || ""
        }))
      : [];
  }

  
  parseMaximums() {
    return Array.isArray(this.data.maximums)
      ? this.data.maximums.map((m: any) => ({
          network: m.network || "",
          planPeriod: m.plan_period || "",
          amount: m.amount || 0,
          coverageLevel: m.coverage_level || ""
        }))
      : [];
  }

  
  parseCoinsurances() {
    return Array.isArray(this.data.coinsurance)
      ? this.data.coinsurance.map((c: any) => ({
          network: c.network || "",
          coverageLevel: c.coverage_level || "",
          percent: c.percent || 0,
          serviceType: c.service_type || ""
        }))
      : [];
  }

 
  parseLimitations() {
    return Array.isArray(this.data.limitations)
      ? this.data.limitations.map((l: any) => ({
          serviceType: l.service_type || "",
          procedureCode: l.procedure_code || "",
          limitation: l.limitation || "",
          disclaimers: l.disclaimers || ""
        }))
      : [];
  }

  
  mapGender(gender: string): string {
    if (!gender) return "";
    const g = gender.toUpperCase();
    if (g === "M" || g === "MALE") return "M";
    if (g === "F" || g === "FEMALE") return "F";
    return g;
  }

  // Main mapping to output schema
  parseToResultFormat() {
    const patient = this.parsePatient();
    const plan = this.parsePlan();

    return {
      PataNum: patient.memberId || "",
      LName: patient.lastName,
      FName: patient.firstName,
      MiddleI: patient.middleName || "",
      Preferred: patient.preferred,
      PatStatus: patient.status,
      Gender: this.mapGender(patient.gender || ""),
      Position: 0,
      Birthdate: patient.dob,
      SSN: "",
      Address: patient.address.street,
      Address2: patient.address.street2,
      City: patient.address.city,
      State: patient.address.state,
      Zip: patient.address.zip,
      HmPhone: "",
      WkPhone: "",
      WirelessPhone: "",
      Guarantor: patient.memberId || "",
      CreditType: "",
      Email: "",
      Salutation: "",
      EstBalance: 0,
      PriProv: "",
      SecProv: "",
      FeeSched: "",
      BillingType: "",
      ImageFolder: "",
      AddrNote: "",
      FamFinUrgNote: "",
      MedUrgNote: [],
      ApptModNote: "",
      StudentStatus: "",
      SchoolName: "",
      ChartNumber: "",
      MedicaidID: patient.memberId || "",
      Bal_0_30: 0,
      Bal_31_60: 0,
      Bal_61_90: 0,
      BalOver90: 0,
      InsEst: 0,
      BalTotal: 0,
      EmployerNum: 0,
      EmploymentNote: "",
      County: "",
      GradeLevel: "",
      Urgency: 0,
      DateFirstVisit: "",
      ClinicNum: 0,
      HasIns: patient.status,
      TrophyFolder: "",
      PlannedIsDone: false,
      Premed: false,
      Ward: "",
      PreferConfirmMethod: 0,
      PreferContactMethod: 0,
      PreferRecallMethod: 0,
      SchedBeforeTime: "",
      SchedAfterTime: "",
      SchedDayOfWeek: 0,
      Language: "",
      AdmitDate: "",
      Title: "",
      PayPlanDue: 0,
      SiteNum: 0,
      DateTStamp: "",
      ResponsParty: 0,
      CanadianEligibilityCode: 0,
      AskToArriveEarly: false,
      PreferContactConfidential: false,
      SuperFamily: 0,
      TxtMsgOk: false,
      SmokingSnoMed: "",
      Country: "",
      DateTimeDeceased: "",
      BillingCycleDay: 0,
      SecUserNumEntry: 0,
      SecDateEntry: "",
      HasSuperBilling: false,
      PatNumCloneFrom: 0,
      DiscountPlanNum: 0,
      HasSignedTil: false,
      ShortCodeOptIn: false,
      SecurityHash: "",
      PatPlanNum: 0,
      PatNum1: 0,
      Ordinal: 0,
      IsPending: false,
      Relationship: patient.relationship || "", 
      PatID: patient.memberId || "",
      InsSubNum: plan.GroupNum || "",
      OrthoAutoFeeBilledOverride: 0,
      OrthoAutoNextClaimDate: "",
      SecDateTEntry: "",
      SecDateTEdit: "",
      PlanNum: plan.PlanNum || "",
      Subscriber: patient.subscribername || "",
      DateEffective: patient.dateEffective,
      SubscriberID: patient.memberId || "",
      GroupNum: plan.GroupNum || "",
      GroupName: plan.GroupName || "",
      CarrierNum: plan.CarrierNum || "",
      CarrierNum1: plan.CarrierNum1 || "",
      CarrierName: plan.CarrierName || "",
      carrierPhone: plan.carrierPhone || "",
      ElectID: plan.ElectID || "",
      // Any additional grouping (deductibles, coinsurances, maximums, etc.) may be added as needed.
    };
  }
}

export default AetnaParser;
