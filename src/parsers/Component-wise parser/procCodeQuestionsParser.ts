type datatype = Record<string, any>;

export class ProcCodeQuestionsParser {
  protected data: datatype;
  protected networkidentifiers: string;

  constructor(data: datatype, networkidentifiers: string) {
    this.data = data ?? {};
    this.networkidentifiers = networkidentifiers;
  }
  private get networkIdentifier(): number {
    return this.networkidentifiers === "IN_NETWORK" ? 0 : 1;
  }
  // Public API
  parse(): datatype {
    return {
      d0140: {
        percentage: this.getCoins("diagnostic", "exams"),
        frequency: this.getFrequency("diagnostic", "exams"),
        frequency_unit: this.getFrequencyUnit("diagnostic", "exams"), // ok
        "0140freql": this.getFrequencyLimitationRadio("diagnostic", "exams"),
      },

      d0120: {
        percentage: this.getCoins("diagnostic", "exams"),
        frequency: this.getFrequency("diagnostic", "exams"),
        frequency_unit: this.getFrequencyUnit("diagnostic", "exams"),
        "0120freql": this.getFrequencyLimitationRadio("diagnostic", "exams"),
      },

      d1110: {
        frequency_unit: this.getFrequencyUnit("preventive", "prophy"), // ok
        frequency: this.getFrequency("preventive", "prophy"),
        percentage: this.getCoins("preventive", "prophy"),
        prophcv: this.getFrequencyLimitationRadio("preventive", "prophy"),
      },

      d0272: {
        frequency_unit: this.getFrequencyUnit("diagnostic", "bitewings"),
        FrequencyLimitation: this.getFrequencyLimitation(
          "diagnostic",
          "bitewings"
        ),
        frequency: this.getFrequency("diagnostic", "bitewings"),
        percentage: this.getCoins("diagnostic", "bitewings"),
      },

      d0220: {
        frequency_unit: this.getFrequencyUnit("diagnostic", "periapicals"),
        frequency: this.getFrequency("diagnostic", "periapicals"),
        percentage: this.getCoins("diagnostic", "periapicals"),
        "0220freql": this.getFrequencyLimitationRadio(
          "diagnostic",
          "periapicals"
        ),
      },

      d0210: {
        frequency_unit: this.getFrequencyUnit("diagnostic", "fmx"),
        frequency: this.getFrequency("diagnostic", "fmx"),
        "0210freql": this.getFrequencyLimitationRadio("diagnostic", "fmx"),
        percentage: this.getCoins("diagnostic", "fmx"),
      },
      d3120: {
        percentage: this.getCoins("endodontics", "pulp_capping"),
        frequency_unit: this.getFrequencyUnit("endodontics", "pulp_capping"),
        frequency: this.getFrequency("endodontics", "pulp_capping"),
        "3120freql": this.getFrequencyLimitationRadio(
          "endodontics",
          "pulp_capping"
        ),
      },
      fmxpanoshared: "",
      d3331: {
        percentage: this.getCoins("endodontics", "endo_therapy_special"),
        frequency: this.getFrequency("endodontics", "endo_therapy_special"),
        frequency_unit: this.getFrequencyUnit(
          "endodontics",
          "endo_therapy_special"
        ),
        "3331freql": this.getFrequencyLimitationRadio(
          "endodontics",
          "endo_therapy_special"
        ),
      },
      d4249: {
        percentage: this.getCoins(
          "periodontics",
          "crown_lengthening_procedures"
        ),
        frequency_unit: this.getFrequencyUnit(
          "periodontics",
          "crown_lengthening_procedures"
        ),
        frequency: this.getFrequency(
          "periodontics",
          "crown_lengthening_procedures"
        ),
        "4249freql": this.getFrequencyLimitationRadio(
          "periodontics",
          "crown_lengthening_procedures"
        ),
      },

      d4267: {
        percentage: this.getCoins("periodontics", "guided_tissue_regeneration"),
        frequency_unit: this.getFrequencyUnit(
          "periodontics",
          "guided_tissue_regeneration"
        ),
        frequency: this.getFrequency(
          "periodontics",
          "guided_tissue_regeneration"
        ),
        "4267freql": this.getFrequencyLimitationRadio(
          "periodontics",
          "guided_tissue_regeneration"
        ),
      },

      d4346: {
        percentage: this.getCoins(
          "periodontics",
          "scaling_presence_of_inflammation"
        ),
        frequency_unit: this.getFrequencyUnit(
          "periodontics",
          "scaling_presence_of_inflammation"
        ),
        frequency: this.getFrequency(
          "periodontics",
          "scaling_presence_of_inflammation"
        ),
        "4346freql": this.getFrequencyLimitationRadio(
          "periodontics",
          "scaling_presence_of_inflammation"
        ),
      },
      d4921: {
        percentage: "",
        frequency_unit: "",
        frequency: "",
      },

      d7922: {
        percentage: this.getCoins(
          "oral_maxillofacial_surgery",
          "regeneration_procedures"
        ),
        frequency_unit: this.getFrequencyUnit(
          "oral_maxillofacial_surgery",
          "regeneration_procedures"
        ),
        frequency: this.getFrequency(
          "oral_maxillofacial_surgery",
          "regeneration_procedures"
        ),
        "7922freql": this.getFrequencyLimitationRadio(
          "oral_maxillofacial_surgery",
          "regeneration_procedures"
        ),
      },

      d0330: {
        frequency_unit: this.getFrequencyUnit("diagnostic", "panoramic_images"),
        frequency: this.getFrequency("diagnostic", "panoramic_images"),
        percentage: this.getCoins("diagnostic", "panoramic_images"),
      },

      d1206: {
        frequency_unit: this.getFrequencyUnit("preventive", "fluoride"),
        percentage: this.getCoins("preventive", "fluoride"),
        fluoridecv: this.getFrequencyLimitationRadio("preventive", "fluoride"),
        frequency: this.getFrequency("preventive", "fluoride"),
        // age_limit: this.getAgeHigh("preventive", "fluoride"),
      },
      d1208: {
        frequency_unit: this.getFrequencyUnit("preventive", "fluoride"),
        percentage: this.getCoins("preventive", "fluoride"),
        flage: "",
        frequency: this.getFrequency("preventive", "fluoride"),
        fluoridecv: this.getFrequencyLimitationRadio("preventive", "fluoride"),
        // age_limit: this.getAgeHigh("preventive", "fluoride"),
      },

      d1351: {
        percentage: this.getCoins("preventive", "sealants"),
        frequency_unit: this.getFrequencyUnit("preventive", "sealants"),
        FrequencyLimitations: this.getFrequencyLimitationRadio(
          "preventive",
          "sealants"
        ),
        frequency: this.getFrequency("preventive", "sealants"),
        sealage: this.getAgeHigh("preventive", "sealants"),
        // age_limit: this.getAgeHigh("preventive", "sealants"),
      },
      d1352: {
        percentage: this.getCoins("preventive", "sealants"),
        frequency_unit: this.getFrequencyUnit("preventive", "sealants"),
        FrequencyLimitations: this.getFrequencyLimitationRadio(
          "preventive",
          "sealants"
        ),
        frequency: this.getFrequency("preventive", "sealants"),
        sealage: this.getAgeHigh("preventive", "sealants"),
        // age_limit: this.getAgeHigh("preventive", "sealants"),
      },
      d1353: {
        percentage: this.getCoins("preventive", "sealants"),
        frequency_unit: this.getFrequencyUnit("preventive", "sealants"),
        FrequencyLimitations: this.getFrequencyLimitationRadio(
          "preventive",
          "sealants"
        ),
        frequency: this.getFrequency("preventive", "sealants"),
        sealage: this.getAgeHigh("preventive", "sealants"),
        // age_limit: this.getAgeHigh("preventive", "sealants"),
      },

      d4266: {
        percentage: this.getCoins("periodontics", "guided_tissue_regeneration"),
        frequency_unit: this.getFrequencyUnit(
          "periodontics",
          "guided_tissue_regeneration"
        ),
        frequency: this.getFrequency(
          "periodontics",
          "guided_tissue_regeneration"
        ),
        "4266freql": this.getFrequencyLimitationRadio(
          "periodontics",
          "guided_tissue_regeneration"
        ),
      },

      d4266guide: "",

      norestrictions_3: "",

      d4341: {
        percentage: this.getCoins("periodontics", "scaling_and_root_planing"),
        frequency_unit: this.getFrequencyUnit(
          "periodontics",
          "scaling_and_root_planing"
        ),
        frequency: this.getFrequency(
          "periodontics",
          "scaling_and_root_planing"
        ),
        "4341freql": this.getFrequencyLimitationRadio(
          "periodontics",
          "scaling_and_root_planing"
        ),
      },
      D4341quads: "",
      norestrictions_0: "",

      d4355: {
        percentage: this.getCoins("periodontics", "full_mouth_debridement"),
        frequency_unit: this.getFrequencyUnit(
          "periodontics",
          "full_mouth_debridement"
        ),
        frequency: this.getFrequency("periodontics", "full_mouth_debridement"),

        debridefreql: this.getFrequencyLimitationRadio(
          "periodontics",
          "full_mouth_debridement"
        ),
      },

      arestinFL: "",
      norestrictions_1: "",

      d4910: {
        frequency_unit: this.getFrequencyUnit(
          "periodontics",
          "periodontal_maintenance"
        ),
        "4910freql": this.getFrequencyLimitationRadio(
          "periodontics",
          "periodontal_maintenance"
        ),
        frequency: this.getFrequency("periodontics", "periodontal_maintenance"),
        percentage: this.getCoins("periodontics", "periodontal_maintenance"),
      },
      d4910guide: "",
      norestrictions_2: "",

      prophyperioshared: "",

      d7140: {
        percentage: this.getCoins(
          "oral_maxillofacial_surgery",
          "extractions_and_removals"
        ),
        frequency_unit: this.getFrequencyUnit(
          "oral_maxillofacial_surgery",
          "extractions_and_removals"
        ),
        frequency: this.getFrequency(
          "oral_maxillofacial_surgery",
          "extractions_and_removals"
        ),
        "7140freql": this.getFrequencyLimitationRadio(
          "oral_maxillofacial_surgery",
          "extractions_and_removals"
        ),
      },

      d7210: {
        percentage: this.getCoins(
          "oral_maxillofacial_surgery",
          "extractions_and_removals"
        ),
        frequency_unit: this.getFrequencyUnit(
          "oral_maxillofacial_surgery",
          "extractions_and_removals"
        ),
        frequency: this.getFrequency(
          "oral_maxillofacial_surgery",
          "extractions_and_removals"
        ),
        "7210freql": this.getFrequencyLimitationRadio(
          "oral_maxillofacial_surgery",
          "extractions_and_removals"
        ),
      },

      d7240: {
        percentage: this.getCoins(
          "oral_maxillofacial_surgery",
          "extractions_and_removals"
        ),
        frequency_unit: this.getFrequencyUnit(
          "oral_maxillofacial_surgery",
          "extractions_and_removals"
        ),
        frequency: this.getFrequency(
          "oral_maxillofacial_surgery",
          "extractions_and_removals"
        ),

        "7240freql": this.getFrequencyLimitationRadio(
          "oral_maxillofacial_surgery",
          "extractions_and_removals"
        ),
      },

      dentmed7210: "",
      d7953: {
        percentage: this.getCoins(
          "oral_maxillofacial_surgery",
          "extract_bone_graft"
        ),
        frequency_unit: this.getFrequencyUnit(
          "oral_maxillofacial_surgery",
          "extract_bone_graft"
        ),
        frequency: this.getFrequency(
          "oral_maxillofacial_surgery",
          "extract_bone_graft"
        ),
        "7953freql": this.getFrequencyLimitationRadio(
          "oral_maxillofacial_surgery",
          "extract_bone_graft"
        ),
      },

      d7953guide: "",
      norestrictions_4: "",

      d2391: {
        percentage: this.getCoins(
          "restorative",
          "posterior_composite_fillings"
        ),
        frequency_unit: this.getFrequencyUnit(
          "restorative",
          "posterior_composite_fillings"
        ),
        frequency: this.getFrequency(
          "restorative",
          "posterior_composite_fillings"
        ),
        compositefreql: this.getFrequencyLimitationRadio(
          "restorative",
          "posterior_composite_fillings"
        ),

        isDowngrade: "",
        downgrade_code: {
          value: "",
          label: "",
        },
        downgradeApplied: "",
      },

      d2392: {
        percentage: this.getCoins(
          "restorative",
          "posterior_composite_fillings"
        ),
        compositefreql: this.getFrequencyLimitationRadio(
          "restorative",
          "posterior_composite_fillings"
        ),

        frequency_unit: this.getFrequencyUnit(
          "restorative",
          "posterior_composite_fillings"
        ),
        frequency: this.getFrequency(
          "restorative",
          "posterior_composite_fillings"
        ),
        isDowngrade: "",
        downgrade_code: {
          value: "",
          label: "",
        },
        downgradeApplied: "",
      },

      d2393: {
        percentage: this.getCoins("restorative", "anterior_composite_fillings"),

        frequency_unit: this.getFrequencyUnit(
          "restorative",
          "posterior_composite_fillings"
        ),
        frequency: this.getFrequency(
          "restorative",
          "posterior_composite_fillings"
        ),
        compositefreql: this.getFrequencyLimitationRadio(
          "restorative",
          "posterior_composite_fillings"
        ),
        isDowngrade: "",
        downgrade_code: {
          value: "",
          label: "",
        },
        downgradeApplied: "",
      },

      d2394: {
        percentage: this.getCoins(
          "restorative",
          "posterior_composite_fillings"
        ),

        frequency_unit: this.getFrequencyUnit(
          "restorative",
          "posterior_composite_fillings"
        ),
        frequency: this.getFrequency(
          "restorative",
          "posterior_composite_fillings"
        ),
        compositefreql: this.getFrequencyLimitationRadio(
          "restorative",
          "posterior_composite_fillings"
        ),
        isDowngrade: "",
        downgrade_code: {
          value: "",
          label: "",
        },
        downgradeApplied: "",
      },

      d2644: {
        percentage: this.getCoins("restorative", "composite_onlays"),
        frequency_unit: this.getFrequencyUnit(
          "restorative",
          "composite_onlays"
        ),
        frequency: this.getFrequency("restorative", "composite_onlays"),
        FrequencyLimitations: this.getFrequencyLimitationRadio(
          "restorative",
          "composite_onlays"
        ),
        isDowngrade: "",
        downgrade_code: {
          value: "",
          label: "",
        },
      },
      sealdprepd2644: "",

      d2740: {
        percentage: this.getCoins("restorative", "porcelain_crowns"),
        frequency_unit: this.getFrequencyUnit(
          "restorative",
          "porcelain_crowns"
        ),
        frequency: this.getFrequency("restorative", "porcelain_crowns"),
        FrequencyLimitations: this.getFrequencyLimitationRadio(
          "restorative",
          "porcelain_crowns"
        ),
        isDowngrade: "",
        downgrade_code: {
          value: "",
          label: "",
        },
      },
      sealdprepd: "",

      d2950: {
        percentage: this.getCoins("restorative", "core_buildup"),
        frequency_unit: this.getFrequencyUnit("restorative", "core_buildup"),
        frequency: this.getFrequency("restorative", "core_buildup"),
        "2950freql": this.getFrequencyLimitationRadio(
          "restorative",
          "core_buildup"
        ),
      },

      // Implants-related
      d6010: {
        percentage: this.getCoins(
          "implant_services",
          "surgical_implant_placement"
        ),
        frequency_unit: this.getFrequencyUnit(
          "implant_services",
          "surgical_implant_placement"
        ),
        frequency: this.getFrequency(
          "implant_services",
          "surgical_implant_placement"
        ),
        "6010freql": this.getFrequencyLimitationRadio(
          "implant_services",
          "surgical_implant_placement"
        ),
      },

      d6241: {
        frequency_unit: this.getFrequencyUnit(
          "prosthodontics_fixed",
          "pontics_porcelain_fused_to_metal"
        ),
        percentage: this.getCoins(
          "prosthodontics_fixed",
          "pontics_porcelain_fused_to_metal"
        ),
        frequency: this.getFrequency(
          "prosthodontics_fixed",
          "pontics_porcelain_fused_to_metal"
        ),
        FrequencyLimitations: this.getFrequencyLimitationRadio(
          "prosthodontics_fixed",
          "pontics_porcelain_fused_to_metal"
        ),
        isDowngrade: "",
        downgrade_code: {
          value: "",
          label: "",
        },
      },

      d6057: {
        percentage: this.getCoins(
          "implant_services",
          "implant_crowns_restorations"
        ),
        frequency_unit: this.getFrequencyUnit(
          "implant_services",
          "implant_crowns_restorations"
        ),
        frequency: this.getFrequency(
          "implant_services",
          "implant_crowns_restorations"
        ),
        "6057freql": this.getFrequencyLimitationRadio(
          "implant_services",
          "implant_crowns_restorations"
        ),
      },

      d6065: {
        percentage: this.getCoins(
          "implant_services",
          "implant_supported_crowns"
        ),
        frequency_unit: this.getFrequencyUnit(
          "implant_services",
          "implant_supported_crowns"
        ),
        frequency: this.getFrequency(
          "implant_services",
          "implant_supported_crowns"
        ),
        "6065freql": this.getFrequencyLimitationRadio(
          "implant_services",
          "implant_supported_crowns"
        ),
        isDowngrade: "",
        downgrade_code: {
          value: "",
          label: "",
        },
      },

      d9230: {
        percentage: this.getCoins("adjunctive_services", "nitrous"),
        frequency_unit: this.getFrequencyUnit("adjunctive_services", "nitrous"),
        frequency: this.getFrequency("adjunctive_services", "nitrous"),
        "9230freql": this.getFrequencyLimitationRadio(
          "adjunctive_services",
          "nitrous"
        ),
      },
      d9230guide: "",
      norestrictions_5: "",

      d9944: {
        percentage: this.getCoins("adjunctive_services", "occlusal_guards"),
        frequency_unit: this.getFrequencyUnit(
          "adjunctive_services",
          "occlusal_guards"
        ),
        frequency: this.getFrequency("adjunctive_services", "occlusal_guards"),
        "9944freql": this.getFrequencyLimitationRadio(
          "adjunctive_services",
          "occlusal_guards"
        ),
      },
      d9944guide: "",
      norestrictions_6: "",
      d5110: {
        percentage: this.getCoins(
          "prosthodontics_removable",
          "complete_dentures"
        ),
      },
      d5130: {
        percentage: this.getCoins(
          "prosthodontics_removable",
          "immediate_dentures"
        ),
      },
      d5213: {
        percentage: this.getCoins(
          "prosthodontics_removable",
          "partial_dentures"
        ),
      },
      d5225: {
        percentage: this.getCoins(
          "prosthodontics_removable",
          "partial_dentures"
        ),
      },

      d9910: {
        percentage: this.getCoins(
          "adjunctive_services",
          "miscellaneous_services_preventive_protective"
        ),
        frequency: this.getFrequency(
          "adjunctive_services",
          "miscellaneous_services_preventive_protective"
        ),
        frequenct_unit: this.getFrequencyUnit(
          "adjunctive_services",
          "miscellaneous_services_preventive_protective"
        ),
        "9910freql": this.getFrequencyLimitationRadio(
          "adjunctive_services",
          "miscellaneous_services_preventive_protective"
        ),
      },
    };
  }

  // Helping function for parsing data

  private getFrequency(category: string, node: string): number | string {
    const ben =
      this.networkIdentifier === 0
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();
    if (!ben) return "";
    const n = ben?.coverages?.[category]?.[node] ?? ben?.[category]?.[node];
    const val =
      n?.limitation?.frequency_count ??
      n?.limitation?.frequency_component?.quantity;

    const time_period_value =
      n?.limitation?.frequency_component?.time_period_value ??
      n?.limitation?.frequency_component?.unit;

    const time_period_qualifier =
      n?.limitation?.frequency_component?.time_period_qualifier;

    if (time_period_qualifier === "lifetime") return val;

    if (!val) return "";

    if (time_period_qualifier === "day" && val === 1) return "";

    return time_period_value === "1" ? val : time_period_value;
    // const num = Number(val);
    // if (Number.isFinite(num)) return num;
    // else return 0;
  }

  pickOutOfNetWork(): datatype | null {
    const benefits: datatype[] = this.data?.benefits ?? [];
    if (!Array.isArray(benefits) || benefits.length === 0) return null;
    const inn = benefits.find(
      (b) => String(b?.network ?? "").toUpperCase() === "OUT_OF_NETWORK"
    );
    return inn ?? benefits[1] ?? null;
  }
  private getCoins(category: string, node: string): string {
    const ben =
      this.networkIdentifier === 0
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();

    if (!ben) return "";
    const n = ben?.coverages?.[category]?.[node] ?? ben?.[category]?.[node];

    const val = n?.coinsurance_percentage;
    return this.percentToString(val);
  }

  public getFrequencyUnit(category: string, node: string): number | string {
    const rule = this.getFrequencyRule(category, node);
    if (!rule) return "";
    const lower = String(rule).toLowerCase();
    if (lower.includes("every") && lower.includes("month")) return 5;
    if (lower.includes("every") && lower.includes("year")) return 4;
    if (lower.includes("every") && lower.includes("calendar")) return 4;
    if (lower.includes("per") && lower.includes("year")) return 1;
    if (lower.includes("per") && lower.includes("day")) return "";
    if (lower.includes("per") && lower.includes("lifetime")) return 7;
    if (lower.includes("every") && lower.includes("months")) return 5;

    return "";
  }

  private getFrequencyLimitation(category: string, node: string): string {
    const benefits =
      this.networkIdentifier === 0
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();
    if (!benefits) return "";
    const n =
      benefits?.coverages?.[category]?.[node] ?? benefits?.[category]?.[node];
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

  private getFrequencyLimitationRadio(
    category: string,
    node: string
  ): string | boolean {
    // const coinsurance_percentage = this.getCoins(category, node);
    // if (Number(coinsurance_percentage)) return false;

    const freqRule = this.getFrequencyUnit(category, node);
    if (!freqRule) return true;
    const benefits =
      this.networkIdentifier === 0
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();
    const Node =
      benefits?.coverages?.[category]?.[node] ?? benefits?.[category]?.[node];
    const frequency_component = Node?.limitation?.frequency_component ?? {};
    const result = this.isEmptyObject(frequency_component);

    return result ? true : false;
  }
  private isEmptyObject(obj: object): boolean {
    return Object.keys(obj).length === 0;
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
    const ben =
      this.networkIdentifier === 0
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();

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
    const ben =
      this.networkIdentifier === 0
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();
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
    const ben =
      this.networkIdentifier === 0
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();
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
    const ben =
      this.networkIdentifier === 0
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();
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
    const benefits =
      this.networkIdentifier === 1
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();
    const n = benefits?.coverages?.[category]?.[node];
    const val = n?.alternate_benefit_applies;
    return val === true ? "Yes" : "No";
  }

  private getDowngradeCode(
    category: string,
    node: string,
    code: string
  ): { value: string; label: string } {
    const isDown = this.getDowngradeFlag(category, node);
    if (isDown !== "Yes") return { value: "", label: "" };

    const map: Record<string, { value: string; label: string }> = {
      d2391: { value: "D2140", label: "Amalgam Filling" },
      d2392: { value: "D2150", label: "Amalgam Filling" },
      d2393: { value: "D2160", label: "Amalgam Filling" },
      d2394: { value: "D2161", label: "Amalgam Filling" },
      d2644: { value: "D2544", label: "metallic_onlays" },
      d2740: { value: "D2750", label: "porcelain_crowns" },
      d6241: { value: "D6211", label: "pontics_cast_metal" },
      d6065: { value: "D2740", label: "porcelain_crowns" },
    };

    return map[code] || { value: "", label: "" };
  }

  private getSealDPrepFlag(procCode: string): string {
    const ben =
      this.networkIdentifier === 0
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();
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
    const ben =
      this.networkIdentifier === 0
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();
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
    const ben =
      this.networkIdentifier === 0
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();
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
    const ben =
      this.networkIdentifier === 0
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();
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
    const ben =
      this.networkIdentifier === 0
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();
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
