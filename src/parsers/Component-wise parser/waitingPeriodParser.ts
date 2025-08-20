type datatype = Record<string, any>;

export class WaitingPeriodParser {
  protected data: datatype;
  protected networkidentifiers: string;
  constructor(data: datatype, networkidentifiers: string) {
    this.data = data;
    this.networkidentifiers = networkidentifiers;
  }
  private get networkIdentifier(): number {
    return this.networkidentifiers === "IN_NETWORK" ? 0 : 1;
  }

  pickInNetworkBenefits(): datatype | null {
    const benefits: datatype[] = this.data?.benefits ?? [];
    if (!Array.isArray(benefits) || benefits.length === 0) return null;
    const inn = benefits.find(
      (b) => String(b?.network ?? "").toUpperCase() === "IN_NETWORK"
    );
    return inn ?? benefits[0] ?? null;
  }
  pickOutOfNetWork(): datatype | null {
    const benefits: datatype[] = this.data?.benefits ?? [];
    if (!Array.isArray(benefits) || benefits.length === 0) return null;
    const inn = benefits.find(
      (b) => String(b?.network ?? "").toUpperCase() === "OUT_OF_NETWORK"
    );
    return inn ?? benefits[1] ?? null;
  }
  
  getIsWaitingPeriod() {
    const rules = this.data?.rules ?? {};
    const waitingForMajor = rules?.waiting_period_for_major_services;
    const waitingForBasic = rules?.waiting_period_for_basic_services;
    if (waitingForMajor === "NO" && waitingForBasic === "NO") return "NO";
  }

  calcWaitingPeriod(category: string) {
    return 0;
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
