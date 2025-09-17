// Complete, corrected parser for procCodeQuestions (Aetna-style)

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
        frequency: this.getFrequency("diagnostic", "exams") || 0,
        frequency_unit: this.getFrequencyUnit("diagnostic", "exams"), // ok
      },

      d0120: {
        percentage: this.getCoins("diagnostic", "exams"),
        frequency: this.getFrequency("diagnostic", "exams") || 0,
        frequency_unit: this.getFrequencyUnit("diagnostic", "exams"), // ok
      },

      d1110: {
        frequency_unit: this.getFrequencyUnit("preventive", "prophy"), // ok
        frequency: this.getFrequency("preventive", "prophy"),
        percentage: this.getCoins("preventive", "prophy"),
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
      },

      d0210: {
        frequency_unit: this.getFrequencyUnit("diagnostic", "fmx"),
        frequency: this.getFrequency("diagnostic", "fmx"),
        "0210freql": "",
        percentage: this.getCoins("diagnostic", "fmx"),
      },
      d3120: {
        percentage: this.getCoins("endodontics", "pulp_capping"),
        frequency_unit: this.getFrequencyUnit("endodontics", "pulp_capping"),
        frequency: this.getFrequency("endodontics", "pulp_capping"),
      },
      fmxpanoshared: this.getFMXPanoSharedFlag(),
      d3331: {
        percentage: this.getCoins("endodontics", "endo_therapy_special"),
        frequency: this.getFrequency("endodontics", "endo_therapy_special"),
        frequency_unit: this.getFrequencyUnit(
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
      },

      d0330: {
        frequency_unit:
          this.getUnitQualifier("diagnostic", "panoramic_images") ||
          this.getFrequencyUnit("diagnostic", "panoramic_images"),
        frequency: this.getFrequency("diagnostic", "panoramic_images"),
        percentage: this.getCoins("diagnostic", "panoramic_images"),
      },

      d1206: {
        frequency_unit: this.getFrequencyUnit("preventive", "fluoride"),
        percentage: this.getCoins("preventive", "fluoride"),
        flage: "",
        frequency: this.getFrequency("preventive", "fluoride"),
        age_limit: this.getAgeHigh("preventive", "fluoride"),
      },

      d1351: {
        percentage: this.getCoins("preventive", "sealants"),
        frequency_unit: this.getFrequencyUnit("preventive", "sealants"),
        FrequencyLimitations: this.getFrequencyLimitation(
          "preventive",
          "sealants"
        ),
        frequency: this.getFrequency("preventive", "sealants"),
        sealage: this.getAgeHigh("preventive", "sealants"),
        age_limit: this.getAgeHigh("preventive", "sealants"),
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
        "4266freql": "",
      },

      d4266guide: this.getGuidanceText("d4266"),

      norestrictions_3: this.getNoRestrictionsFlag(
        "periodontics",
        "guided_tissue_regeneration"
      ),

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
        "4341freql": "",
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
        percentage: this.getCoins("periodontics", "full_mouth_debridement"),
        frequency_unit: this.getFrequencyUnit(
          "periodontics",
          "full_mouth_debridement"
        ),
        frequency: this.getFrequency("periodontics", "full_mouth_debridement"),

        debridefreql: "",
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
        "4910freql": "",
        frequency: this.getFrequency("periodontics", "periodontal_maintenance"),
        percentage: this.getCoins("periodontics", "periodontal_maintenance"),
      },
      d4910guide: this.getGuidanceText("d4910"),
      norestrictions_2: this.getNoRestrictionsFlag(
        "periodontics",
        "periodontal_maintenance"
      ),

      prophyperioshared: this.getProphyPerioSharedFlag(),

      d7140: {
        percentage: this.getCoins(
          "oral_maxillofacial_surgery",
          "extractions_and_removals"
        ),
        frequency_unit:
          this.getUnitQualifier(
            "oral_maxillofacial_surgery",
            "extractions_and_removals"
          ) ||
          this.getFrequencyUnit(
            "oral_maxillofacial_surgery",
            "extractions_and_removals"
          ),
        frequency: this.getFrequency(
          "oral_maxillofacial_surgery",
          "extractions_and_removals"
        ),
        "7140freql": "",
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
        frequency:
          this.getFrequency(
            "oral_maxillofacial_surgery",
            "extractions_and_removals"
          ) || "",
        "7210freql": "",
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

        "7240freql": "",
      },

      dentmed7210: this.getDentOrMedFlag(),
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
        "7953freql": "",
      },

      d7953guide: this.getGuidanceText("d7953"),
      norestrictions_4: this.getNoRestrictionsFlag(
        "oral_maxillofacial_surgery",
        "extract_bone_graft"
      ),

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
        compositefreql: "",

        isDowngrade: this.getDowngradeFlag(
          "restorative",
          "posterior_composite_fillings"
        ),
        downgrade_code: this.getDowngradeCode(
          "restorative",
          "posterior_composite_fillings",
          "d2391"
        ),
        downgradeApplied: this.getDowngradeFlag(
          "restorative",
          "posterior_composite_fillings"
        ),
      },

      d2392: {
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
        isDowngrade: this.getDowngradeFlag(
          "restorative",
          "posterior_composite_fillings"
        ),
        downgrade_code: this.getDowngradeCode(
          "restorative",
          "posterior_composite_fillings",
          "d2392"
        ),
        downgradeApplied: this.getDowngradeFlag(
          "restorative",
          "posterior_composite_fillings"
        ),
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
        isDowngrade: this.getDowngradeFlag(
          "restorative",
          "posterior_composite_fillings"
        ),
        downgrade_code: this.getDowngradeCode(
          "restorative",
          "posterior_composite_fillings",
          "d2393"
        ),
        downgradeApplied: this.getDowngradeFlag(
          "restorative",
          "posterior_composite_fillings"
        ),
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
        isDowngrade: this.getDowngradeFlag(
          "restorative",
          "posterior_composite_fillings"
        ),
        downgrade_code: this.getDowngradeCode(
          "restorative",
          "posterior_composite_fillings",
          "d2394"
        ),
        downgradeApplied: this.getDowngradeFlag(
          "restorative",
          "posterior_composite_fillings"
        ),
      },

      d2644: {
        percentage: this.getCoins("restorative", "composite_onlays"),
        frequency_unit: this.getFrequencyUnit(
          "restorative",
          "composite_onlays"
        ),
        frequency: this.getFrequency("restorative", "composite_onlays"),
        FrequencyLimitations: this.getFrequencyLimitation(
          "restorative",
          "composite_onlays"
        ),
        isDowngrade: this.getDowngradeFlag("restorative", "composite_onlays"),
        downgrade_code: this.getDowngradeCode(
          "restorative",
          "composite_onlays",
          "d2644"
        ),
      },
      sealdprepd2644: this.getSealDPrepFlag("d2644"),

      d2740: {
        percentage: this.getCoins("restorative", "porcelain_crowns"),
        frequency_unit: this.getFrequencyUnit(
          "restorative",
          "porcelain_crowns"
        ),
        frequency: this.getFrequency("restorative", "porcelain_crowns"),
        FrequencyLimitations: this.getFrequencyLimitation(
          "restorative",
          "porcelain_crowns"
        ),
        isDowngrade: this.getDowngradeFlag("restorative", "porcelain_crowns"),
        downgrade_code: this.getDowngradeCode(
          "restorative",
          "porcelain_crowns",
          "d2740"
        ),
      },
      sealdprepd: this.getSealDPrepFlag("d2740"),

      d2950: {
        percentage: this.getCoins("restorative", "core_buildup"),
        frequency_unit: this.getFrequencyUnit("restorative", "core_buildup"),
        frequency: this.getFrequency("restorative", "core_buildup"),
        Freql: "",
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
        "6010freql": "",
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
        d6241freql: "",
        isDowngrade: this.getDowngradeFlag(
          "prosthodontics_fixed",
          "pontics_porcelain_fused_to_metal"
        ),
        downgrade_code: this.getDowngradeCode(
          "prosthodontics_fixed",
          "pontics_porcelain_fused_to_metal",
          "d6241"
        ),
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
        "6057freql": "",
      }, //

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
        "6065freql": "",
        isDowngrade: this.getDowngradeFlag(
          "implant_services",
          "implant_supported_crowns"
        ),
        downgrade_code: this.getDowngradeCode(
          "implant_services",
          "implant_supported_crowns",
          "d6065"
        ),
      },

      d9230: {
        percentage: this.getCoins("adjunctive_services", "nitrous"),
        frequency_unit: this.getFrequencyUnit("adjunctive_services", "nitrous"),
        frequency: this.getFrequency("adjunctive_services", "nitrous"),
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
        percentage: this.getCoins("adjunctive_services", "occlusal_guards"),
        frequency_unit: this.getFrequencyUnit(
          "adjunctive_services",
          "occlusal_guards"
        ),
        frequency: this.getFrequency("adjunctive_services", "occlusal_guards"),
        "9944freql": "",
      },
      d9944guide: this.getGuidanceText("d9944"),
      norestrictions_6: this.getNoRestrictionsFlag(
        "adjunctive_services",
        "occlusal_guards"
      ),
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

    return time_period_value === "1" ? val : time_period_value;
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
    if (lower.includes("per") && lower.includes("lifetime")) return 6;
    if (lower.includes("every") && lower.includes("months")) return 5;

    return "";
  }

  private getFrequencyLimitation(category: string, node: string): string {
    const ben =
      this.networkIdentifier === 0
        ? this.pickInNetworkBenefits()
        : this.pickOutOfNetWork();
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
