import { ticket } from "../interface/ticket";
import createParser from "./Patient parser/parserPatientFactory";
import { resultType } from "../types/resultType";
import BaseParser from "./BaseParser";
import { ConInsurancePercantageClass } from "./Component-wise parser/ConInsurancePercentageParser";
import { ProcCodeQuestionsParser } from "./Component-wise parser/procCodeQuestionsParser";
import { ServiceHistoryParser } from "./Component-wise parser/serviceHistoryParser";

import { ticketParser } from "./Component-wise parser/ticketParser";
import { WaitingPeriodParser } from "./Component-wise parser/waitingPeriodParser";
import {
  FORMIO_KEYS,
  NETWORK_KEYS,
  PERCENTAGE_SERVICES_FORMIO_KEYS,
} from "../../const/FormIoKeys";
import { MAPPER_KEYS } from "../../const/MapperDatakeys";
import { FormioData, mapValuesToForm } from "../utils/formioDataMapper";
import { DATA_KEYS } from "../../const/DataKeys";
type datatype = Record<string, any>;
class InNetworkParser extends BaseParser {
  dot(obj: datatype, path: string): any {
    return path
      .split(".")
      .reduce((acc, key) => (acc && key in acc ? acc[key] : undefined), obj);
  }
  pickInNetworkBenefits(): datatype | null {
    const benefits: datatype[] = this.data?.benefits ?? [];
    if (!Array.isArray(benefits) || benefits.length === 0) return null;
    const inn = benefits.find(
      (b) => String(b?.network ?? "").toUpperCase() === NETWORK_KEYS.IN_NETWORK
    );
    return inn ?? benefits[0] ?? null;
  }
  getCoins(category: string, node: string): number | string {
    const ben = this.pickInNetworkBenefits();
    if (!ben) return "";
    const n = ben?.coverages?.[category]?.[node] ?? ben?.[category]?.[node];

    const val =
      n?.coinsurance_percentage ??
      this.dot(
        this.data,
        `benefits.0.coverages.${category}.${node}.coinsurance_percentage`
      );

    if (val === null || val === undefined) return "";
    const num = Number(val);
    if (Number.isFinite(num)) return num;

    const s = String(val);
    const m = s.match(/(\d{1,3})\s*%/);
    return m ? Number(m[1]) : 0;
  }
  getCoinsByCategory(category: string): number | string {
    const ben = this.pickInNetworkBenefits();
    if (!ben) return "";
    const n = ben?.coverages?.[category] ?? ben?.[category];

    const val =
      n?.coinsurance_percentage ??
      this.dot(
        this.data,
        `benefits.0.coverages.${category}?.coinsurance_percentage`
      );

    if (val === null || val === undefined) return "";
    const num = Number(val);
    return num;
  }
  parseTicketData() {
    const ticketparser = new ticketParser(this.data);
    const ticket: ticket = ticketparser.parseTicket();
    const subscriber = this.data.subscriber ?? {};
    const payer = this.data.payer ?? {};
    return {
      patient: this.mappingPatientData(),
      subscriberName: subscriber.first_name + " " + subscriber.last_name || "",
      subscriberDoB: subscriber.dob || "",
      subscribertoRelationship: subscriber.relationship || "",
      subscriberPayload: {
        subscriber: {
          first_name: subscriber.first_name || "",
          last_name: subscriber.last_name || "",
          dob: subscriber.dob,
          member_id: subscriber.member_id || "",
        },
        provider: { npi: null },
        payer: { id: payer.id || null },
      },
    };
  }
  mappingPatientData() {
    const parser: any = createParser(
      this.data,
      this.onederfulPayerId,
      NETWORK_KEYS.IN_NETWORK
    );
    const parsedPatient: any = parser.parseToResultFormat();
    const Patient = this.formDataIO?.ticketData?.patient || {};
    return mapValuesToForm(Patient, parsedPatient);
  }

  getDeductibleUsed() {
    const benefitsInNetwork = this.data.benefits[0] ?? {};
    const result =
      benefitsInNetwork.individual_deductible -
      benefitsInNetwork.individual_deductible_remaining;

    return result;
  }

  getPreventativeDeduct(category: string): number | string {
    const ben = this.pickInNetworkBenefits() ?? {};
    if (!ben) return "";

    const n = ben?.coverages?.[category] ?? ben?.[category];
    let val = n?.deductible_applies;

    if (category === "fmx") {
      val = ben?.coverages?.diagnostic?.[category]?.deductible_applies;
    }
    console.log(`deductiable ${category}`, val);
    if (!val) return "";

    // if it If deductible applies to this category then get co-insurance percentage and find amount individual deductible

    let percentage: number | string = this.getCoinsByCategory(category);
    if (category === "fmx") percentage = this.getCoins("diagnostic", "fmx");
    const deductiable: number = ben?.individual_deductible;
    if (!percentage || !deductiable) return "";
    const ans = (Number(percentage) / 100) * deductiable;

    const fixedAmount = ans.toFixed(2);

    return Number(fixedAmount);
  }

  getAmountUsed() {
    const benefitsInNetwork = this.pickInNetworkBenefits() ?? {};
    const result =
      benefitsInNetwork.individual_maximum -
      benefitsInNetwork.individual_maximum_remaining;
    return result.toFixed(2);
  }

  parseOrtho() {
    const benefitsInNetwork = this.pickInNetworkBenefits() ?? {};
    // const rules = this.data.rules;
    return {
      orthosc: "",
      orthosc1: "",
      orthoamountused:
        benefitsInNetwork?.orthodontic_maximum -
          benefitsInNetwork?.orthodontic_maximum_remaining || "",
      MonetaryAmt_lifetimeCoverage:
        benefitsInNetwork?.orthodontic_maximum || null,
      agelimit:
        benefitsInNetwork?.coverages?.orthodontics
          ?.comprehensive_orthodontic_treatment?.limitation?.age_high_value ||
        "",
      percentage:
        benefitsInNetwork?.coverages?.orthodontics?.coinsurance_percentage ||
        "",
    };
  }
  parseToResultFormat() {
    const formDataIo: FormioData = this.formDataIO.data;
    const mapperData: any = {};
    const patient = this.data?.patient;
    const payer = this.data?.payer;
    const rules = this.data?.rules;
    const procCodeQuestionsparser = new ProcCodeQuestionsParser(
      this.data,
      NETWORK_KEYS.IN_NETWORK
    );
    const waitingParserobj = new WaitingPeriodParser(
      this.data,
      NETWORK_KEYS.IN_NETWORK
    );
    const waitingData = waitingParserobj.parseWaitingPeriod();
    const procCodeQuestionsData = procCodeQuestionsparser.parse();
    const serviceHistoryParser = new ServiceHistoryParser(
      this.pickInNetworkBenefits() || {}
    );
    const ticketData = this.parseTicketData();
    const patientHistorydata = serviceHistoryParser.extractPatientHistory();
    const benefitsInNetwork = this.pickInNetworkBenefits();
    const plan = this.data?.plan ?? {};
    const percentageParser = new ConInsurancePercantageClass(
      this.data,
      NETWORK_KEYS.IN_NETWORK
    );
    const percentages = percentageParser.parse();

    // Example: set GroupName using the mapping approach
    mapperData[MAPPER_KEYS.GROUP_NAME] = plan[DATA_KEYS.groupName];
    mapperData[MAPPER_KEYS.GROUP_NUMBER] = plan[DATA_KEYS.groupNum];
    mapperData[MAPPER_KEYS.PLANTYPE] = NETWORK_KEYS.IN_NETWORK;
    mapperData[MAPPER_KEYS.EFFECTIVEDATE] =
      patient?.coverage?.effective_date || "00/00/0000";
    mapperData[MAPPER_KEYS.PAYERID] = payer?.id || "";
    mapperData[MAPPER_KEYS.DIAGNOSTICAPPLIED] = benefitsInNetwork?.coverages
      ?.diagnostic?.deductible_applies
      ? "YES"
      : "NO";
    mapperData[MAPPER_KEYS.ADDRESS] =
      payer?.address?.street +
      ", " +
      payer?.address?.city +
      ", " +
      payer?.address?.state;

    mapperData[MAPPER_KEYS.DIAGNOSTICAPPLIED1] = "";
    mapperData[MAPPER_KEYS.MISSING_TOOTH_CLAUSE] =
      rules?.missing_tooth_clause_applies || "";

    //ortho
    mapperData[MAPPER_KEYS.ORTHO] = this.parseOrtho();

    // procCodeQuestions
    mapperData[MAPPER_KEYS.PROC_CODE_QUESTIONS] = procCodeQuestionsData;

    //service Histroy
    mapperData[MAPPER_KEYS.PATIENTHISTORY] = patientHistorydata;

    //deductiable fields
    mapperData[MAPPER_KEYS.IND_ANNUAL_MAX] =
      benefitsInNetwork?.individual_maximum;
    mapperData[MAPPER_KEYS.INS_USED] = this.getAmountUsed();
    mapperData[MAPPER_KEYS.IND_DEDUCTIBLE] =
      benefitsInNetwork?.individual_deductible;
    mapperData[MAPPER_KEYS.DEDUCTIBLE_USED] = this.getDeductibleUsed();
    mapperData[MAPPER_KEYS.MONETARY_AMT_DIA_IND_DEDUCT] =
      this.getPreventativeDeduct("diagnostic");
    mapperData[MAPPER_KEYS.MONETARY_AMT_XRAY_IND_DEDUCT] =
      this.getPreventativeDeduct("fmx");
    mapperData[MAPPER_KEYS.MONETARY_AMT_PREVENTATIVE_IND_DEDUCT] =
      this.getPreventativeDeduct("preventive");

    // waiting period
    mapperData[FORMIO_KEYS.RESTORATIVE_WAITING_PERIOD] =
      waitingData.restorativeWaitingPeriod;
    mapperData[FORMIO_KEYS.ENDO_WAITING_PERIOD] = waitingData.endoWaitingPeriod;
    mapperData[FORMIO_KEYS.PERIO_WAITING_PERIOD] =
      waitingData.perioWaitingPeriod;
    mapperData[FORMIO_KEYS.CROWNS_WAITING_PERIOD] =
      waitingData.crownsWaitingPeriod;
    mapperData[FORMIO_KEYS.PROSTHODONTICS_WAITING_PERIOD] =
      waitingData.prosthodonticsWaitingPeriod;
    mapperData[FORMIO_KEYS.ORAL_WAITING_PERIOD] = waitingData.oralWaitingPeriod;
    mapperData[FORMIO_KEYS.ISWaitingPeriod] =
      waitingParserobj.getIsWaitingPeriod();

    // co-insurance percentage
    mapperData[PERCENTAGE_SERVICES_FORMIO_KEYS.PERCENTAGE_DIAGNOSTIC] =
      percentages.percentage_diagnostic;
    mapperData[PERCENTAGE_SERVICES_FORMIO_KEYS.PERCENTAGE_XRAY] =
      percentages.percentage_xray;
    mapperData[PERCENTAGE_SERVICES_FORMIO_KEYS.PERCENTAGE_PREVENTATIVE] =
      percentages.percentage_preventative;
    mapperData[PERCENTAGE_SERVICES_FORMIO_KEYS.PERCENTAGE_RESTORATIVE] =
      percentages.percentage_restorative;
    mapperData[PERCENTAGE_SERVICES_FORMIO_KEYS.PERCENTAGE_ENDO] =
      percentages.percentage_endo;
    mapperData[PERCENTAGE_SERVICES_FORMIO_KEYS.PERCENTAGE_PERIO] =
      percentages.percentage_perio;
    mapperData[PERCENTAGE_SERVICES_FORMIO_KEYS.PERCENTAGE_ORALSURGERY] =
      percentages.percentage_oralSurgery;
    mapperData[PERCENTAGE_SERVICES_FORMIO_KEYS.PERCENTAGE_CROWNS] =
      percentages.percentage_crowns;
    mapperData[PERCENTAGE_SERVICES_FORMIO_KEYS.PERCENTAGE_PROSTHODONTICS] =
      percentages.percentage_prosthodontics.prosthodontics_fixed;

    mapperData[MAPPER_KEYS.TICKETDATA] = ticketData;

    const updatedFormDataIo = mapValuesToForm(formDataIo, mapperData);

    return updatedFormDataIo;
  }
}

export default InNetworkParser;
