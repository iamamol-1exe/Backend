import createParser from "../parserFactory";
import BaseParser from "./BaseParser";

import { ticket, ticketParser } from "./Component-wise parser/ticketParser";

class NewParser extends BaseParser {
  parseTicketData() {
    const parser: any = createParser(this.data, this.onederfulPayerId);
    const patient: any = parser.parseToResultFormat();
    const ticketparser = new ticketParser(this.data);
    const ticket: ticket = ticketparser.parseTicket();
    const subscriber = this.data.subscriber ?? {};
    const payer = this.data.payer ?? {};
    return {
      ticket: ticket,
      patient: patient,
      subscriberName: subscriber.first_name + " " + subscriber.last_name || "",
      subscriberDoB: subscriber.dob || "",
      subscribertoRelationship: subscriber.relationship || "",
      latestTicketStatus: {
        status: "",
        dateTime: "",
      },
      ordinal: "",
      subscriberPayload: {
        subscriber: {
          first_name: subscriber.first_name || "",
          last_name: subscriber.last_name || "",
          dob: subscriber.dob,
          member_id: subscriber.member_id || "",
        },
        provider: { npi: null },
        payer: { id: payer.id || null },
        version: "v2",
      },
    };
  }
  parseOrtho() {
    const benefitsInNetwork = this.data.benefits[0] ?? {};
    const rules = this.data.rules;
    return {
      orthosc:
        benefitsInNetwork.coverages.orthodontics.coinsurance_percentage || "",
      orthosc1: "",
      orthoamountused: "",
      MonetaryAmt_lifetimeCoverage:
        benefitsInNetwork.orthodontic_maximum || null,
      agelimit:
        rules.dependent_child_max_age || rules.dependent_student_max_age || "",
    };
  }
  parseToResultFormat() {
    const benefitsInNetwork = this.data.benefits[0] ?? {};
    const ticketData = this.parseTicketData();
    const plan = this.data.plan ?? {};
    const patient = this.data.patient ?? {};
    const rules = this.data.rules ?? {};
    const ortho = this.parseOrtho() ?? {};
    return {
      pullClaimInformation: false,
      formType: "1",
      clientId: "",
      uploadDocument: [],
      agentName: "",
      GroupName: plan.group_name || "",
      GroupNum: plan.group_number || "",
      PlanType: plan.plan_type || "",
      networknote: "",
      FeeSched: {
        value: null,
        label: "",
      },
      MonthRenew: "",
      EffectiveDate: patient.coverage.effective_date || "00/00/0000",
      shortcut: "",
      shortcut1: "",
      diagnosticApplied: rules.alternative_benefits_may_apply || "",
      isWaitingPeriod: rules.waiting_period_for_basic_services || "",
      diagnosticApplied1: "",
      MTC: rules.missing_tooth_clause_applies === "YES" ? "YES" : "NO",
      ortho: ortho,
      frequency_exam_unit: "",
      shortcutfqexam: "",
      examcv:
        benefitsInNetwork.coverages.diagnostic.exams.coinsurance_percentage ||
        "",
      D0140share: "",
      ticketData: ticketData,
      extraPatientHistory: [
        {
          PatNum: 0,
          ProcDate: "",
          Surf: "",
          ToothNum: "",
          ToothRange: "",
          ProcCode: "",
          ProcStatus: 0,
        },
      ],
    };
  }
}

export default NewParser;
