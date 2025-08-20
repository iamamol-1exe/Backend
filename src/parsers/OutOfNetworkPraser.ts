import { ticket } from "../interface/ticket";
import createParser from "../parserFactory";
import { resultType } from "../types/resultType";
import BaseParser from "./BaseParser";
import { ConInsurancePercantageClass } from "./Component-wise parser/ConInsurancePercentageParser";
import { ProcCodeQuestionsParser } from "./Component-wise parser/procCodeQuestionsParser";
import { ServiceHistoryParser } from "./Component-wise parser/serviceHistoryParser";
import { ticketParser } from "./Component-wise parser/ticketParser";
import { WaitingPeriodParser } from "./Component-wise parser/waitingPeriodParser";
type datatype = Record<string, any>;

class OutOfNetworkPraser extends BaseParser {
  dot(obj: datatype, path: string): any {
    return path
      .split(".")
      .reduce((acc, key) => (acc && key in acc ? acc[key] : undefined), obj);
  }

  pickOutOfNetWork(): datatype | null {
    const benefits: datatype[] = this.data?.benefits ?? [];
    if (!Array.isArray(benefits) || benefits.length === 0) return null;
    const inn = benefits.find(
      (b) => String(b?.network ?? "").toUpperCase() === "OUT_OF_NETWORK"
    );
    return inn ?? benefits[1] ?? null;
  }
  getCoins(category: string, node: string) {
    const ben = this.pickOutOfNetWork();
    if (!ben) return 0;
    const n = ben?.coverages?.[category]?.node ?? ben?.[category]?.[node];
    const val =
      n?.coinsurance_percentage ??
      this.dot(
        this.data,
        `benefits.1.coverages.${category}.${node}.coinsurance_percentage`
      );
    if (val === null || val === undefined) return 0;
    const num = Number(val);
    if (Number.isFinite(num)) return num;
    const s = String(val);
    const m = s.match(/(\d{1,3})\s*%/);
    return m ? Number(m[1]) : 0;
  }

  getDeductibleUsed() {
    const benefitsOutOfNetwork = this.pickOutOfNetWork() ?? {};
    const result =
      benefitsOutOfNetwork.individual_deductible -
      benefitsOutOfNetwork.individual_deductible_remaining +
      benefitsOutOfNetwork.family_deductible -
      benefitsOutOfNetwork.family_deductible_remaining;

    return result;
  }
  getPreventativeDeduct(category: string) {
    const ben = this.pickOutOfNetWork() ?? {};
    const n = ben?.coverages?.[category] ?? ben?.[category];
    const val =
      n?.deductible_applies ??
      this.dot(
        this.data,
        `benefits.1.coverages.${category}.deductible_applies`
      );
    if (!val) return 0;
    // If deductible applies to this category, return the individual deductible amount
    const individualDeductible = ben.individual_deductible ?? 0;
    return individualDeductible;
  }

  parseTicketData() {
    const parser: any = createParser(
      this.data,
      this.onederfulPayerId,
      "OUT_OF_NETWORK"
    );
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
  getAmountUsed() {
    const benefitsOutOfNetwork = this.pickOutOfNetWork() ?? {};
    const result =
      benefitsOutOfNetwork.individual_maximum -
      benefitsOutOfNetwork.individual_maximum_remaining;
    return result;
  }

  parseOrtho() {
    const benefitsOutOfNetwork = this.pickOutOfNetWork() ?? {};
    const rules = this.data?.rules;
    return {
      orthosc:
        benefitsOutOfNetwork?.coverages?.orthodontics?.coinsurance_percentage ||
        "",
      orthosc1: "",
      orthoamountused:
        benefitsOutOfNetwork?.orthodontic_maximum -
          benefitsOutOfNetwork?.orthodontic_maximum_remaining || 0,
      MonetaryAmt_lifetimeCoverage:
        benefitsOutOfNetwork?.orthodontic_maximum || null,
      agelimit:
        benefitsOutOfNetwork?.coverages?.orthodontics
          ?.limited_orthodontic_treatment?.limitation?.age_high_value || 0,
    };
  }
  parseToResultFormat() {
    const ticketData = this.parseTicketData();
    const plan = this.data.plan ?? {};
    const patient = this.data.patient ?? {};
    const rules = this.data.rules ?? {};
    const waitingParserobj = new WaitingPeriodParser(
      this.data,
      "OUT_OF_NETWORK"
    );
    const waitingData = waitingParserobj.parseWaitingPeriod();
    const procCodeQuestionsparser = new ProcCodeQuestionsParser(
      this.data,
      "OUT_OF_NETWORK"
    );
    const procCodeQuestionsData = procCodeQuestionsparser.parse();
    const serviceHistoryParser = new ServiceHistoryParser(
      this.pickOutOfNetWork() || {}
    );
    const patientHistorydata = serviceHistoryParser.extractPatientHistory();
    const benefitsOutOfNetwork = this.pickOutOfNetWork() ?? {};
    const percentageParser = new ConInsurancePercantageClass(
      this.data,
      "OUT_OF_NETWORK"
    );
    const percentages = percentageParser.parse();

    return {
      pullClaimInformation: false,
      formType: "",
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
      isWaitingPeriod: waitingParserobj.getIsWaitingPeriod() || "",
      diagnosticApplied1: "",
      MTC: rules.missing_tooth_clause_applies || "",

      ortho: this.parseOrtho(),
      shortcutfqexam: "",
      frequency_exam_unit: procCodeQuestionsparser.getFrequencyUnit(
        "diagnostic",
        "exams"
      ),
      examcv: this.getCoins("diagnostic", "exams") || 0,
      D0140share: "",

      procCodeQuestions: procCodeQuestionsData,
      procCode: [{ value: 0, label: "" }],

      patientHistory: patientHistorydata,

      subscNote: "",
      planNotes: "",

      submit1: true,
      submit: false,

      //deductible section
      MonetaryAmt_IndMax: benefitsOutOfNetwork.individual_maximum || 0,
      MonetaryAmt_FamMax: benefitsOutOfNetwork.family_maximum || 0,
      MonetaryAmt_IndDeduct: benefitsOutOfNetwork.individual_deductible || 0,
      deductibleUsed: this.getDeductibleUsed() || 0,
      MonetaryAmt_DiaIndDeduct: this.getPreventativeDeduct("diagnostic") || 0,
      MonetaryAmt_XrayIndDeduct: this.getPreventativeDeduct("diagnostic") || 0,
      MonetaryAmt_PreventativeDeductible:
        this.getPreventativeDeduct("preventive"),
      insUsed: this.getAmountUsed() || 0,

      // co-insurance percentage
      percentage_diagnostic: percentages.percentage_diagnostic,
      percentage_xray: percentages.percentage_xray,
      percentage_preventative: percentages.percentage_preventative,
      percentage_restorative: percentages.percentage_restorative,
      percentage_crowns: percentages.percentage_crowns,
      percentage_endo: percentages.percentage_endo,
      percentage_oralSurgery: percentages.percentage_oralSurgery,
      percentage_prosthodontics:
        percentages.percentage_prosthodontics.prosthodontics_fixed,

      // waiting data fields in months
      restorativeWaitingPeriod: waitingData.restorativeWaitingPeriod,
      endoWaitingPeriod: waitingData.endoWaitingPeriod,
      perioWaitingPeriod: waitingData.perioWaitingPeriod,
      oralWaitingPeriod: waitingData.oralWaitingPeriod,
      crownsWaitingPeriod: waitingData.crownsWaitingPeriod,
      prosthodonticsWaitingPeriod: waitingData.prosthodonticsWaitingPeriod,

      ticketNo: 0,
      ticketId: "",

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
export default OutOfNetworkPraser;
