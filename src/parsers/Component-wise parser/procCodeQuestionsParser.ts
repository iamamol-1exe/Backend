// Complete, corrected parser for procCodeQuestions (Aetna-style)

type datatype = Record<string, any>;

export class ProcCodeQuestionsParser {
  protected data: datatype;

  constructor(data: datatype) {
    this.data = data ?? {};
  }

  // Public API
  parse(): datatype {
    return {
      d0140: {
        examcv: this.getCoins("diagnostic", "exams"),
        frequency_unit: this.getFrequencyUnit("diagnostic", "exams"),
      },

      d1110: {
        frequency_unit: this.getFrequencyUnit("preventive", "prophy"),
        prophcv: this.getCoins("preventive", "prophy"),
      },

      d0272: {
        frequency_unit: this.getFrequencyUnit("diagnostic", "bitewings"),
        bitewingsc: this.getFrequencyLimitation("diagnostic", "bitewings"),
        bitwingcv: this.getCoins("diagnostic", "bitewings"),
      },

      d0210: {
        frequency_unit:
          this.getUnitQualifier("diagnostic", "fmx") ||
          this.getFrequencyUnit("diagnostic", "fmx"),
        fmxcv: this.getCoins("diagnostic", "fmx"),
      },

      fmxpanoshared: this.getFMXPanoSharedFlag(),

      d0330: {
        frequency_unit:
          this.getUnitQualifier("diagnostic", "panoramic_images") ||
          this.getFrequencyUnit("diagnostic", "panoramic_images"),
        panocv: this.getCoins("diagnostic", "panoramic_images"),
      },

      d1206: {
        frequency_unit: this.getFrequencyUnit("preventive", "fluoride"),
        fluoridecv: this.getCoins("preventive", "fluoride"),
        flage: this.getAgeHigh("preventive", "fluoride"),
        age_limit: this.getAgeHigh("preventive", "fluoride"),
      },

      d1351: {
        frequency_unit: this.getFrequencyUnit("preventive", "sealants"),
        FrequencyLimitations: this.getFrequencyLimitation(
          "preventive",
          "sealants"
        ),
        sealage: this.getAgeHigh("preventive", "sealants"),
        age_limit: this.getAgeHigh("preventive", "sealants"),
      },

      d4266: {
        frequency_unit: this.getFrequencyUnit(
          "periodontics",
          "guided_tissue_regeneration"
        ),
        "4266freql": this.getFrequencyLimitation(
          "periodontics",
          "guided_tissue_regeneration"
        ),
      },
      d4266guide: this.getGuidanceText("d4266"),
      norestrictions_3: this.getNoRestrictionsFlag(
        "periodontics",
        "guided_tissue_regeneration"
      ),

      d4341: {
        frequency_unit: this.getFrequencyUnit(
          "periodontics",
          "scaling_and_root_planing"
        ),
        "4341freql": this.getFrequencyLimitation(
          "periodontics",
          "scaling_and_root_planing"
        ),
      },
      D4341quads: this.getQuadLimitation(
        "periodontics",
        "scaling_and_root_planing"
      ),
      norestrictions_0: this.getNoRestrictionsFlag(
        "periodontics",
        "scaling_and_root_planing"
      ),

      d4355: {
        frequency_unit: this.getFrequencyUnit(
          "periodontics",
          "full_mouth_debridement"
        ),
        debridefreql: this.getFrequencyLimitation(
          "periodontics",
          "full_mouth_debridement"
        ),
      },

      d4381: {
        frequency_unit: this.getFrequencyUnit(
          "periodontics",
          "scaling_presence_of_inflammation"
        ),
        "4381freql": this.getFrequencyLimitation(
          "periodontics",
          "scaling_presence_of_inflammation"
        ),
      },
      arestinFL: this.getArestinFlag(),
      norestrictions_1: this.getNoRestrictionsFlag(
        "periodontics",
        "scaling_presence_of_inflammation"
      ),

      d4910: {
        frequency_unit: this.getFrequencyUnit(
          "periodontics",
          "periodontal_maintenance"
        ),
        periocv: this.getCoins("periodontics", "periodontal_maintenance"),
      },
      d4910guide: this.getGuidanceText("d4910"),
      norestrictions_2: this.getNoRestrictionsFlag(
        "periodontics",
        "periodontal_maintenance"
      ),

      prophyperioshared: this.getProphyPerioSharedFlag(),

      d7140: {
        frequency_unit:
          this.getUnitQualifier(
            "oral_maxillofacial_surgery",
            "extractions_and_removals"
          ) ||
          this.getFrequencyUnit(
            "oral_maxillofacial_surgery",
            "extractions_and_removals"
          ),
        "7140freql": this.getFrequencyLimitation(
          "oral_maxillofacial_surgery",
          "extractions_and_removals"
        ),
      },

      d7210: {
        frequency_unit: this.getFrequencyUnit(
          "oral_maxillofacial_surgery",
          "advanced_surgical_procedures"
        ),
        "7210freql": this.getFrequencyLimitation(
          "oral_maxillofacial_surgery",
          "advanced_surgical_procedures"
        ),
      },

      d7240: {
        frequency_unit: this.getFrequencyUnit(
          "oral_maxillofacial_surgery",
          "advanced_surgical_procedures"
        ),
        "7240freql": this.getFrequencyLimitation(
          "oral_maxillofacial_surgery",
          "advanced_surgical_procedures"
        ),
      },

      dentormed: this.getDentOrMedFlag(),

      d7953: {
        frequency_unit: this.getFrequencyUnit(
          "implant_services",
          "implant_bone_graft"
        ),
        "7953freql": this.getFrequencyLimitation(
          "implant_services",
          "implant_bone_graft"
        ),
      },
      d7953guide: this.getGuidanceText("d7953"),
      norestrictions_4: this.getNoRestrictionsFlag(
        "implant_services",
        "implant_bone_graft"
      ),

      d2391: {
        frequency_unit: this.getFrequencyUnit(
          "restorative",
          "anterior_composite_fillings"
        ),
        compositefreql: this.getFrequencyLimitation(
          "restorative",
          "anterior_composite_fillings"
        ),
        isDowngrade: this.getDowngradeFlag(
          "restorative",
          "anterior_composite_fillings"
        ),
        downgrade_code: this.getDowngradeCode(
          "restorative",
          "anterior_composite_fillings"
        ),
        downgradeApplied: this.getDowngradeApplied(
          "restorative",
          "anterior_composite_fillings"
        ),
      },

      d2392: {
        frequency_unit: this.getFrequencyUnit(
          "restorative",
          "posterior_composite_fillings"
        ),
        isDowngrade: this.getDowngradeFlag(
          "restorative",
          "posterior_composite_fillings"
        ),
        downgrade_code: this.getDowngradeCode(
          "restorative",
          "posterior_composite_fillings"
        ),
        downgradeApplied: this.getDowngradeApplied(
          "restorative",
          "posterior_composite_fillings"
        ),
      },

      d2393: {
        frequency_unit: this.getFrequencyUnit(
          "restorative",
          "posterior_composite_fillings"
        ),
        isDowngrade: this.getDowngradeFlag(
          "restorative",
          "posterior_composite_fillings"
        ),
        downgrade_code: this.getDowngradeCode(
          "restorative",
          "posterior_composite_fillings"
        ),
        downgradeApplied: this.getDowngradeApplied(
          "restorative",
          "posterior_composite_fillings"
        ),
      },

      d2394: {
        frequency_unit: this.getFrequencyUnit(
          "restorative",
          "posterior_composite_fillings"
        ),
        isDowngrade: this.getDowngradeFlag(
          "restorative",
          "posterior_composite_fillings"
        ),
        downgrade_code: this.getDowngradeCode(
          "restorative",
          "posterior_composite_fillings"
        ),
        downgradeApplied: this.getDowngradeApplied(
          "restorative",
          "posterior_composite_fillings"
        ),
      },

      d2644: {
        frequency_unit: this.getFrequencyUnit(
          "restorative",
          "composite_onlays"
        ),
        FrequencyLimitations: this.getFrequencyLimitation(
          "restorative",
          "composite_onlays"
        ),
        isDowngrade: this.getDowngradeFlag("restorative", "composite_onlays"),
      },
      sealdprepd2644: this.getSealDPrepFlag("d2644"),

      d2740: {
        frequency_unit: this.getFrequencyUnit(
          "restorative",
          "porcelain_crowns"
        ),
        FrequencyLimitations: this.getFrequencyLimitation(
          "restorative",
          "porcelain_crowns"
        ),
        isDowngrade: this.getDowngradeFlag("restorative", "porcelain_crowns"),
      },
      sealdprepd: this.getSealDPrepFlag("d2740"),

      d2950: {
        frequency_unit: this.getFrequencyUnit("restorative", "core_buildup"),
        Freql: this.getFrequencyLimitation("restorative", "core_buildup"),
      },

      // Implants-related
      d6010: {
        frequency_unit: this.getFrequencyUnit(
          "implant_services",
          "surgical_implant_placement"
        ),
        "6010freql": this.getFrequencyLimitation(
          "implant_services",
          "surgical_implant_placement"
        ),
      },

      d6057: {
        frequency_unit: this.getFrequencyUnit(
          "implant_services",
          "implant_abutments_custom"
        ),
        "6057freql": this.getFrequencyLimitation(
          "implant_services",
          "implant_abutments_custom"
        ),
      },

      d6065: {
        frequency_unit: this.getFrequencyUnit(
          "implant_services",
          "implant_supported_crowns"
        ),
        "6065freql": this.getFrequencyLimitation(
          "implant_services",
          "implant_supported_crowns"
        ),
        isDowngrade: this.getDowngradeFlag(
          "implant_services",
          "implant_supported_crowns"
        ),
      },

      d9230: {
        frequency_unit: this.getFrequencyUnit("adjunctive_services", "nitrous"),
        "9230freql": this.getFrequencyLimitation(
          "adjunctive_services",
          "nitrous"
        ),
      },
      d9230guide: this.getGuidanceText("d9230"),
      norestrictions_5: this.getNoRestrictionsFlag(
        "adjunctive_services",
        "nitrous"
      ),

      d9944: {
        frequency_unit: this.getFrequencyUnit(
          "adjunctive_services",
          "occlusal_guard_adjustment_repair"
        ),
        "9944freql": this.getFrequencyLimitation(
          "adjunctive_services",
          "occlusal_guard_adjustment_repair"
        ),
      },
      d9944guide: this.getGuidanceText("d9944"),
      norestrictions_6: this.getNoRestrictionsFlag(
        "adjunctive_services",
        "occlusal_guard_adjustment_repair"
      ),
    };
  }

  // Helping function for parsing data

  private buildEmptyObject(): datatype {
    return {};
  }

  private getCoins(category: string, node: string): string {
    const ben = this.pickInNetworkBenefits();
    if (!ben) return "";
    const n = ben?.coverages?.[category]?.[node] ?? ben?.[category]?.[node];

    const val =
      n?.coinsurance_percentage ??
      this.dot(
        this.data,
        `benefits.0.coverages.${category}.${node}.coinsurance_percentage`
      );
    return this.percentToString(val);
  }

  public getFrequencyUnit(category: string, node: string): string {
    const rule = this.getFrequencyRule(category, node);
    if (!rule) return "";
    const lower = String(rule).toLowerCase();
    if (lower.includes("month")) return "months";
    if (lower.includes("year")) return "years";
    if (lower.includes("day")) return "days";
    if (lower.includes("week")) return "weeks";
    if (lower.includes("visit")) return "visits";
    return "";
  }

  private getFrequencyLimitation(category: string, node: string): string {
    const ben = this.pickInNetworkBenefits();
    if (!ben) return "";
    const n = ben?.coverages?.[category]?.[node] ?? ben?.[category]?.[node];
    const lim = n?.limitation;
    if (lim) {
      if (lim.frequency_rule) return String(lim.frequency_rule);
      if (lim.quantity_qualifier) return String(lim.quantity_qualifier);
    }
    const lims = n?.limitations;
    if (Array.isArray(lims)) {
      for (const l of lims) {
        if (l?.frequency_rule) return String(l.frequency_rule);
        if (l?.quantity_qualifier) return String(l.quantity_qualifier);
      }
    }
    return "";
  }

  private getGuidanceText(procCode: string): string {
    const planDisclaimers = this.data?.plan?.disclaimers ?? [];
    if (Array.isArray(planDisclaimers)) {
      const hit = planDisclaimers.find((d: any) => {
        const text = String(d?.text ?? "").toLowerCase();
        return (
          text.includes(procCode.toLowerCase()) || text.includes("guidance")
        );
      });
      if (hit) return String(hit.text ?? "");
    }
    const ben = this.pickInNetworkBenefits();
    const benDisclaimers = ben?.disclaimers ?? [];
    if (Array.isArray(benDisclaimers)) {
      const hit = benDisclaimers.find((d: any) => {
        const text = String(d?.text ?? "").toLowerCase();
        return (
          text.includes(procCode.toLowerCase()) || text.includes("guidance")
        );
      });
      if (hit) return String(hit.text ?? "");
    }
    return "";
  }

  private getNoRestrictionsFlag(category: string, node: string): string {
    const ben = this.pickInNetworkBenefits();
    if (!ben) return "No";
    const n = ben?.coverages?.[category]?.[node] ?? ben?.[category]?.[node];
    if (!n) return "No";
    const lim = n?.limitation;
    const lims = n?.limitations;
    const hasAny =
      (lim && Object.keys(lim).length > 0) ||
      (Array.isArray(lims) && lims.length > 0);
    return hasAny ? "No" : "Yes";
  }

  private getQuadLimitation(category: string, node: string): string {
    const ben = this.pickInNetworkBenefits();
    if (!ben) return "";
    const n = ben?.coverages?.[category]?.[node] ?? ben?.[category]?.[node];
    const texts: string[] = [];
    if (n?.limitation?.frequency_rule)
      texts.push(String(n.limitation.frequency_rule));
    const lims = n?.limitations;
    if (Array.isArray(lims)) {
      for (const l of lims) {
        if (l?.frequency_rule) texts.push(String(l.frequency_rule));
      }
    }
    const hit = texts.some((t) => {
      const s = t.toLowerCase();
      return s.includes("quad") || s.includes("quadrant");
    });
    return hit ? "Yes" : "No";
  }

  private getArestinFlag(): string {
    const planDisclaimers = this.data?.plan?.disclaimers ?? [];
    if (Array.isArray(planDisclaimers)) {
      if (
        planDisclaimers.some((d: any) =>
          String(d?.text ?? "")
            .toLowerCase()
            .includes("arestin")
        )
      ) {
        return "Yes";
      }
    }
    const ben = this.pickInNetworkBenefits();
    const benDisclaimers = ben?.disclaimers ?? [];
    if (Array.isArray(benDisclaimers)) {
      if (
        benDisclaimers.some((d: any) =>
          String(d?.text ?? "")
            .toLowerCase()
            .includes("arestin")
        )
      ) {
        return "Yes";
      }
    }
    return "No";
  }

  private getProphyPerioSharedFlag(): string {
    const prophy = this.getFrequencyRule("preventive", "prophy");
    const perio = this.getFrequencyRule(
      "periodontics",
      "periodontal_maintenance"
    );
    if (prophy && perio && prophy === perio) return "Yes";
    return "No";
  }

  private getDentOrMedFlag(): string {
    const plan = this.data?.plan ?? {};
    const planType = String((plan as any)?.plan_type ?? "").toLowerCase();
    if (planType.includes("medical")) return "Medical";
    if (planType.includes("dental")) return "Dental";
    return "Dental";
  }

  private getDowngradeFlag(category: string, node: string): string {
    const alt = this.data?.rules?.alternative_benefits_may_apply;
    if (typeof alt === "string" && alt.toUpperCase() === "YES") return "Yes";
    return "No";
  }

  private getDowngradeCode(
    category: string,
    node: string
  ): { value: string; label: string } {
    const isDown = this.getDowngradeFlag(category, node);
    if (isDown === "Yes" && node.includes("composite")) {
      return { value: "D2140", label: "Amalgam Filling" };
    }
    return { value: "", label: "" };
  }

  private getDowngradeApplied(category: string, node: string): string {
    return this.getDowngradeFlag(category, node);
  }

  private getSealDPrepFlag(procCode: string): string {
    const ben = this.pickInNetworkBenefits();
    if (!ben) return "No";
    const seal = ben?.coverages?.preventive?.sealants;
    const texts: string[] = [];
    if (seal?.limitation?.frequency_rule)
      texts.push(String(seal.limitation.frequency_rule));
    const lims = seal?.limitations;
    if (Array.isArray(lims)) {
      for (const l of lims) {
        if (l?.frequency_rule) texts.push(String(l.frequency_rule));
      }
    }
    const hit = texts.some((t) => {
      const s = t.toLowerCase();
      return s.includes("prep") || s.includes("preparation");
    });
    return hit ? "Yes" : "No";
  }

  private getUnitQualifier(category: string, node: string): string {
    const ben = this.pickInNetworkBenefits();
    if (!ben) return "";
    const n = ben?.coverages?.[category]?.[node] ?? ben?.[category]?.[node];
    const unit = n?.limitation?.remaining_component?.unit_qualifier;
    if (typeof unit === "string") {
      const u = unit.toLowerCase();
      if (u.includes("month")) return "months";
      if (u.includes("year")) return "years";
      if (u.includes("day")) return "days";
      if (u.includes("week")) return "weeks";
      if (u.includes("visit")) return "visits";
    }
    return "";
  }

  private getUnitByMonths(category: string, node: string): string {
    const freq = this.getFrequencyRule(category, node);
    if (!freq) return "";
    const lower = String(freq).toLowerCase();
    return lower.includes("month") ? "months" : "";
  }

  private getAgeHigh(category: string, node: string): string {
    const ben = this.pickInNetworkBenefits();
    if (!ben) return "";
    const n = ben?.coverages?.[category]?.[node] ?? ben?.[category]?.[node];
    const lim = n?.limitation;
    if (
      lim &&
      lim.age_high_value !== undefined &&
      lim.age_high_value !== null
    ) {
      return String(lim.age_high_value);
    }
    const lims = n?.limitations;
    if (Array.isArray(lims)) {
      for (const l of lims) {
        if (l && l.age_high_value !== undefined && l.age_high_value !== null) {
          return String(l.age_high_value);
        }
      }
    }
    return "";
  }

  private getFrequencyRule(category: string, node: string): string {
    const ben = this.pickInNetworkBenefits();
    if (!ben) return "";
    const n = ben?.coverages?.[category]?.[node] ?? ben?.[category]?.[node];
    const lim = n?.limitation;
    if (lim && typeof lim.frequency_rule === "string")
      return lim.frequency_rule;
    const lims = n?.limitations;
    if (Array.isArray(lims)) {
      const f = lims.find((l: any) => typeof l?.frequency_rule === "string");
      if (f) return f.frequency_rule;
    }
    return "";
  }

  private percentToString(val: any): string {
    if (val === null || val === undefined) return "";
    const n = Number(val);
    if (Number.isFinite(n)) return String(n);
    const s = String(val);
    const m = s.match(/(\d{1,3})\s*%/);
    return m ? m[1] : "";
  }

  private pickInNetworkBenefits(): datatype | null {
    const benefits: datatype[] = this.data?.benefits ?? [];
    if (!Array.isArray(benefits) || benefits.length === 0) return null;
    const inn = benefits.find(
      (b) => String(b?.network ?? "").toUpperCase() === "IN_NETWORK"
    );
    return inn ?? benefits[0] ?? null;
  }

  private dot(obj: datatype, path: string): any {
    return path
      .split(".")
      .reduce((acc, key) => (acc && key in acc ? acc[key] : undefined), obj);
  }

  private getFMXPanoSharedFlag(): string {
    const ben = this.pickInNetworkBenefits();
    if (!ben) return "";
    const fmxFreq = this.getFrequencyRule("diagnostic", "fmx");
    const panoFreq = this.getFrequencyRule("diagnostic", "panoramic_images");
    if (fmxFreq && panoFreq && fmxFreq === panoFreq) return "Yes";
    const disclaimers = ben?.disclaimers ?? [];
    if (Array.isArray(disclaimers)) {
      const hasSharedImaging = disclaimers.some((d: any) => {
        const text = String(d?.text ?? "").toLowerCase();
        return (
          text.includes("combined") &&
          (text.includes("imaging") ||
            text.includes("x-ray") ||
            text.includes("radiograph"))
        );
      });
      if (hasSharedImaging) return "Yes";
    }
    return "No";
  }
}
