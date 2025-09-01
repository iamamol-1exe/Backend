import PatientBaseParser from "./PatientBaseParser";

class DeltaDentalParser extends PatientBaseParser {
  protected networkidentifiers: number = this.network === "IN_NETWORK" ? 0 : 1;
  parsePatient() {
    const pat = this.data.patient ?? {};
    const cov = pat.coverage;
    const subscriber = this.data.subscriber;
    return {
      firstName: pat.first_name || "",
      lastName: pat.last_name || "",
      middleName: pat.middle_name || "",
      preferred:
        pat.name ||
        [pat.first_name, pat.middle_name, pat.last_name]
          .filter(Boolean)
          .join(" "),
      dob: pat.dob || "",
      memberId: pat.member_id || "",
      gender: pat.gender ? String(pat.gender).toUpperCase() : "",
      address: {
        street: pat.address?.street || pat.address?.street1 || "",
        street2: pat.address?.street2 || "",
        city: pat.address?.city || "",
        state: pat.address?.state || "",
        zip: pat.address?.zip || "",
      },
      status: cov.status ? String(cov.status).toUpperCase() : "",
      dateEffective: cov.effective_date || "",
      dateTerminate: cov.end_date || "",
      relationship: pat.relationship || "",
      subscribername: subscriber.name,
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
      carrierPhone: payer.phone || payer.phone_number || "",
      ElectID: payer.id || "",
      plan_type: plan.plan_type || "",
    };
  }
  parseProvider() {
    const prov = this.data.provider ?? {};
    return {
      npi: prov.npi || "",
      lastName: prov.last_name || "",
    };
  }
  parseBalance() {
    const benefits = this.data.benefits;
    return {
      EstBalance:
        benefits[this.networkidentifiers].individual_maximum_remaining || 0,
    };
  }

  mapGender(gender: string): string {
    if (!gender) return "";
    const g = gender.toUpperCase();
    if (g === "M" || g === "MALE") return "M";
    if (g === "F" || g === "FEMALE") return "F";
    return g;
  }
  parseToResultFormat() {
    const patient = this.parsePatient();
    const plan = this.parsePlan();
    const balance = this.parseBalance();

    return {
      PatNum: patient.memberId || "",
      LName: patient.lastName,
      FName: patient.firstName,
      MiddleI: patient.middleName || "",
      Preferred: patient.preferred,
      PatStatus: patient.status,
      Gender: this.mapGender(patient.gender || ""),

      Birthdate: patient.dob,

      Address: patient.address.street,
      Address2: patient.address.street2,
      City: patient.address.city,
      State: patient.address.state,
      Zip: patient.address.zip,

      Guarantor: patient.memberId || "",

      EstBalance: balance.EstBalance || 0,
      PriProv: plan.CarrierName || "",

      BillingType: plan.plan_type || "",

      MedicaidID: patient.memberId || "",

      Relationship: patient.relationship || "",
      PatID: patient.memberId || "",
      InsSubNum: plan.GroupNum || "",

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

export default DeltaDentalParser;
