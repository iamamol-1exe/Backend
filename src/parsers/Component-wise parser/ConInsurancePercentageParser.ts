type datatype = Record<string, any>;
export class ConInsurancePercantageClass {
  protected data: datatype;
  constructor(data: datatype) {
    this.data = data;
  }
  dot(obj: datatype, path: string): any {
    return path
      .split(".")
      .reduce((acc, key) => (acc && key in acc ? acc[key] : undefined), obj);
  }
  pickInNetworkBenefits(): datatype | null {
    const benefits = (this.data?.benefits ?? []) as datatype[];
    if (!Array.isArray(benefits) || benefits.length === 0) return null;
    const inn = benefits.find(
      (b) => String(b?.network ?? "").toUpperCase() === "IN_NETWORK"
    );
    return inn ?? benefits[0] ?? null;
  }
  getCoins(category: string): number {
    const ben = this.pickInNetworkBenefits();
    if (!ben) return 0;
    const n = ben?.coverages?.[category] ?? ben?.[category];

    const val =
      n?.coinsurance_percentage ??
      this.dot(
        this.data,
        `benefits.0.coverages.${category}.coinsurance_percentage`
      );
    if (val === null || val === undefined) return 0;
    const num = Number(val);
    if (Number.isFinite(num)) return num;
    const s = String(val);
    const m = s.match(/(\d{1,3})\s*%/);
    return m ? Number(m[1]) : 0;
  }

  parse() {
    return {
      percentage_diagnostic: this.getCoins("diagnostic") | 0,
      percentage_xray: this.getCoins("diagnostic") | 0,
      percentage_preventative: this.getCoins("preventive") | 0,
      percentage_restorative: this.getCoins("restorative") | 0,
      percentage_endo: this.getCoins("endodontics") | 0,
      percentage_oralSurgery: this.getCoins("orthodontics") | 0,
      percentage_crowns: this.getCoins("implant_services") | 0,
      percentage_prosthodontics: {
        prosthodontics_fixed: this.getCoins("prosthodontics_fixed") | 0,
        prosthodontics_removable: this.getCoins("prosthodontics_removable") | 0,
      },
    };
  }
}
