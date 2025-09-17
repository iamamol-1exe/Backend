import moment from "moment";
import {
  ProcessedHistoryItem,
  ServiceHistory,
} from "../../interface/serviceHistory";

type datatype = Record<string, any>;
export class ServiceHistoryParser {
  protected data: datatype;
  constructor(data: datatype) {
    this.data = data;
  }
  extractPatientHistory(): ProcessedHistoryItem[] {
    let PatientHistory: ProcessedHistoryItem[] = [];

    try {
      if (!this.data.coverages) {
        console.warn("Invalid data structure : missing coverages");
        return PatientHistory;
      }
      this.processServiceHistory(this.data.coverages, PatientHistory);
      return PatientHistory;
    } catch (error) {
      console.error("Error processing patient History", error);
    }

    return PatientHistory;
  }

  private processServiceHistory(
    obj: datatype,
    PatientHistory: ProcessedHistoryItem[]
  ): void {
    if (!obj || typeof obj !== "object") return;

    if (Array.isArray(obj.service_history)) {
      obj.service_history.forEach((item: ServiceHistory) => {
        const processedItem = this.processHistoryItem(item);
        if (processedItem) {
          PatientHistory.push(processedItem);
        }
      });
    }
    Object.values(obj).forEach((value) => {
      if (value && typeof value === "object") {
        this.processServiceHistory(value, PatientHistory);
      }
    });
  }

  private processHistoryItem(
    item: ServiceHistory
  ): ProcessedHistoryItem | null {
    if (!item.procedure_code || !item.service_date) {
      console.warn("Skipping invalid history item: missing required fields");
      return null;
    }
    let toothNumber: number | string = "";
    if (item.tooth) {
      const parsed = parseInt(item.tooth, 10);
      toothNumber = isNaN(parsed) ? "" : parsed;
    }

    const formattedServiceDate = moment(item.service_date, "MM/DD/YYYY")
      .startOf("day") // sets time to 00:00:00
      .format();
    return {
      date: formattedServiceDate,
      ToothRange: item.tooth || "", // Default to empty string if null
      surf: item.surfaces || "", // Default to empty string if null
      procCode: item.procedure_code,
      toothNumber: toothNumber,
      toothRange: "",
    };
  }
}
