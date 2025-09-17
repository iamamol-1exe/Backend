type datatype = Record<string, any>;

export class ConInsurancePercantageClass {
  protected data: datatype;
  protected networkidentifiers: string;
  constructor(data: datatype, networkidentifiers: string) {
    this.networkidentifiers = networkidentifiers;
    this.data = data;
  }

  private get networkIdentifier(): number {
    return this.networkidentifiers === "IN_NETWORK" ? 0 : 1;
  }

  pickOutOfNetWork(): datatype | null {
    const benefits: datatype[] = this.data?.benefits ?? [];
    if (!Array.isArray(benefits) || benefits.length === 0) return null;
    const inn = benefits.find(
      (b) => String(b?.network ?? "").toUpperCase() === "OUT_OF_NETWORK"
    );
    return inn ?? benefits[1] ?? null;
  }

  pickInNetworkBenefits(): datatype | null {
    const benefits = (this.data?.benefits ?? []) as datatype[];
    if (!Array.isArray(benefits) || benefits.length === 0) return null;
    const inn = benefits.find(
      (b) => String(b?.network ?? "").toUpperCase() === "IN_NETWORK"
    );
    return inn ?? benefits[0] ?? null;
  }

  getCoins(category: string): number | string {
    const ben =
      this.networkIdentifier === 0
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();
    if (!ben) return "";
    const n = ben?.coverages?.[category] ?? ben?.[category];

    const val = n?.coinsurance_percentage;
    if (val === null || val === undefined) return "";
    const num = Number(val);
    if (Number.isFinite(num)) return num;
    const s = String(val);
    const m = s.match(/(\d{1,3})\s*%/);
    return m ? Number(m[1]) : "";
  }

  getNestedCoins(category: string, node: string): number | string {
    const ben =
      this.networkIdentifier === 0
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();
    console.log("network", this.networkIdentifier);
    if (!ben) return "";
    const n = ben?.coverages?.[category]?.[node] ?? ben?.[category]?.[node];
    const val = n?.coinsurance_percentage;
    if (val === null || val === undefined) return "";
    const num = Number(val);
    if (Number.isFinite(num)) return num;
    const s = String(val);
    const m = s.match(/(\d{1,3})\s*%/);
    return m ? Number(m[1]) : "";
  }

  parse() {
    return {
      percentage_diagnostic: this.getCoins("diagnostic"),
      percentage_xray: this.getNestedCoins("diagnostic", "fmx"),
      percentage_preventative: this.getCoins("preventive"),
      percentage_restorative: this.getCoins("restorative"),
      percentage_endo: this.getCoins("endodontics"),
      percentage_oralSurgery: this.getCoins("oral_maxillofacial_surgery"),
      percentage_crowns: this.getNestedCoins("restorative", "porcelain_crowns"), // crowns are also present in implant services
      percentage_prosthodontics: {
        prosthodontics_fixed: this.getCoins("prosthodontics_fixed"),
        prosthodontics_removable: this.getCoins("prosthodontics_removable"),
      },
      percentage_perio: this.getCoins("periodontics"),
    };
  }
}
