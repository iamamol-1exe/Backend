type datatype = Record<string, any>;

export class WaitingPeriodParser {
  protected data: datatype;
  constructor(data: datatype) {
    this.data = data;
  }
  pickInNetworkBenefits(): datatype | null {
    const benefits: datatype[] = this.data?.benefits ?? [];
    if (!Array.isArray(benefits) || benefits.length === 0) return null;
    const inn = benefits.find(
      (b) => String(b?.network ?? "").toUpperCase() === "IN_NETWORK"
    );
    return inn ?? benefits[0] ?? null;
  }

  getIsWaitingPeriod() {
    const rules = this.data?.rules ?? {};
    const waitingForMajor = rules?.waiting_period_for_major_services;
    const waitingForBasic = rules?.waiting_period_for_basic_services;
    if (waitingForMajor === "NO" && waitingForBasic === "NO") return "NO";
  }
  calcWaitingPeriod(category: string) {
    return 54;
  }

  parseWaitingPeriod() {
    return {
      restorativeWaitingPeriod:
        this.getIsWaitingPeriod() === "NO"
          ? 0
          : this.calcWaitingPeriod("restorative") || 0,
      endoWaitingPeriod:
        this.getIsWaitingPeriod() === "NO"
          ? 0
          : this.calcWaitingPeriod("endodontics") || 0,
      perioWaitingPeriod:
        this.getIsWaitingPeriod() === "NO"
          ? 0
          : this.calcWaitingPeriod("periodontics"),
      oralWaitingPeriod:
        this.getIsWaitingPeriod() === "NO"
          ? 0
          : this.calcWaitingPeriod("orthodontics"),
      crownsWaitingPeriod:
        this.getIsWaitingPeriod() === "NO"
          ? 0
          : this.calcWaitingPeriod("implant_services"),
      prosthodonticsWaitingPeriod:
        this.getIsWaitingPeriod() === "NO"
          ? 0
          : this.calcWaitingPeriod("prosthodontics_fixed"),
    };
  }
}

