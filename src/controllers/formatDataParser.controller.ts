import { Request, Response } from 'express';
import { formatDataParser } from '../services/formatDataParser.service';

export const formatDataParser1 = (req :Request,res : Response) => {
    try {
        const payload = req.body;
        console.log("Received payload:", payload);
        const data =  {
    "onederfulId": "ab556370-45c1-11f0-8c87-9365c0dd71cc",
    "patient": {
        "name": "MARIA C CASAS",
        "first_name": "MARIA",
        "gender": "female",
        "middle_name": "C",
        "last_name": "CASAS",
        "age": "32",
        "dob": "01/28/1993",
        "member_id": "W272528642",
        "address": {
            "street1": "1502 SKYLINE DR.",
            "city": "PORTLAND",
            "zip": "78374",
            "state": "TX"
        },
        "coverage": {
            "effective_date": "03/07/2022",
            "status": "active"
        },
        "relationship": "spouse",
        "is_subscriber": false,
        "metadata": [
            {
                "type": "plan_begin",
                "value": "03/07/2022",
                "plan_begin": "03/07/2022"
            },
            {
                "type": "service",
                "value": "06/10/2025",
                "service": "06/10/2025"
            },
            {
                "type": "eligibility_begin",
                "value": "03/07/2022",
                "eligibility_begin": "03/07/2022"
            }
        ]
    },
    "plan": {
        "group_number": "037029201200001",
        "name": "OCCIDENTAL PETROLEUM CORPORATION",
        "number": "037029201200001",
        "group_name": "OCCIDENTAL PETROLEUM CORPORATION",
        "insurance_type": "ppo",
        "payer_specific_description": "PPO Dental 2000",
        "metadata": [
            {
                "description": "OCCIDENTAL PETROLEUM CORPORATION",
                "value": "037029201200001",
                "qualifier": "group_number"
            }
        ]
    },
    "subscriber": {
        "name": "JONATHON CASAS",
        "first_name": "JONATHON",
        "last_name": "CASAS",
        "member_id": "W272528642",
        "coverage": {
            "status": "active"
        },
        "is_subscriber": false
    },
    "dependents": [
        {
            "name": "MARIA C CASAS",
            "first_name": "MARIA",
            "gender": "female",
            "middle_name": "C",
            "last_name": "CASAS",
            "age": "32",
            "dob": "01/28/1993",
            "member_id": "W272528642",
            "address": {
                "street1": "1502 SKYLINE DR.",
                "city": "PORTLAND",
                "zip": "78374",
                "state": "TX"
            },
            "coverage": {
                "effective_date": "03/07/2022",
                "status": "active"
            },
            "relationship": "spouse",
            "is_subscriber": false,
            "metadata": [
                {
                    "type": "plan_begin",
                    "value": "03/07/2022",
                    "plan_begin": "03/07/2022"
                },
                {
                    "type": "service",
                    "value": "06/10/2025",
                    "service": "06/10/2025"
                },
                {
                    "type": "eligibility_begin",
                    "value": "03/07/2022",
                    "eligibility_begin": "03/07/2022"
                }
            ]
        }
    ],
    "payer": {
        "id": "60054",
        "name": "AETNA INC",
        "received_id": "953402799"
    },
    "provider": {
        "npi": "1508469610",
        "first_name": "Hani",
        "last_name": "Aref"
    },
    "limitations": [
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "MISSING TOOTH CLAUSE DOES NOT APPLY"
            ],
            "coverage_level": "family"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Self Funded,CHLD TO 26 OR 26 IF FT STUDENT"
            ],
            "coverage_level": "family"
        },
        {
            "service_type": "diagnostic_dental",
            "disclaimers": [
                "PER FULL MOUTH"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "2",
                    "time_period_qualifier": "calendar",
                    "time_period_value": "1"
                }
            ],
            "limitation": "2 units in 1 calendar"
        },
        {
            "service_type": "diagnostic_dental",
            "coverage_level": "family",
            "network": "applies_all",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "02/03/2025",
                    "latest_visit_or_consultation": "02/03/2025",
                    "service_date": "02/03/2025"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "time_period_qualifier": "remaining"
                }
            ],
            "limitation": "1 units remaining"
        },
        {
            "service_type": "prosthodontics",
            "disclaimers": [
                "TOOTH NUMBER 01 TO 16"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "unit_qualifier": "months",
                    "unit": "60"
                }
            ],
            "limitation": "1 units per 60 months"
        },
        {
            "service_type": "preventive",
            "disclaimers": [
                "DENTAL PROPHYLAXIS COUNTER"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "3",
                    "time_period_qualifier": "calendar",
                    "time_period_value": "1"
                }
            ],
            "limitation": "3 visits in 1 calendar"
        },
        {
            "service_type": "preventive",
            "coverage_level": "family",
            "network": "applies_all",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "02/03/2025",
                    "latest_visit_or_consultation": "02/03/2025",
                    "service_date": "02/03/2025"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "remaining"
                }
            ],
            "limitation": "2 visits remaining"
        },
        {
            "service_type": "diagnostic_dental",
            "coverage_level": "family",
            "network": "applies_all",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "service_type": "periodontics",
            "coverage_level": "family",
            "network": "applies_all",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "service_type": "restorative",
            "coverage_level": "family",
            "network": "applies_all",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "service_type": "endodontics",
            "coverage_level": "family",
            "network": "applies_all",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "service_type": "adjunctive_dental_services",
            "coverage_level": "family",
            "network": "applies_all",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "service_type": "dental_crowns",
            "coverage_level": "family",
            "network": "applies_all",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "service_type": "orthodontics",
            "coverage_level": "family",
            "network": "applies_all",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "service_type": "prosthodontics",
            "coverage_level": "family",
            "network": "applies_all",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "service_type": "oral_surgery",
            "coverage_level": "family",
            "network": "applies_all",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "service_type": "preventive",
            "coverage_level": "family",
            "network": "applies_all",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "service_type": "diagnostic_dental",
            "disclaimers": [
                "Shares frequency with D0145,D0150,D0180,DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "adjunctive_dental_services",
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "orthodontics",
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "prosthodontics",
            "disclaimers": [
                "Shares frequency with D5130,D6110,D6112,D6114,D6116,D6119,D5284-D5286,D5863-D5864"
            ],
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "preventive",
            "disclaimers": [
                "Shares frequency with D1120,D4346,DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "MISSING TOOTH CLAUSE DOES NOT APPLY"
            ],
            "coverage_level": "family"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Self Funded,CHLD TO 26 OR 26 IF FT STUDENT"
            ],
            "coverage_level": "family"
        },
        {
            "disclaimers": [
                "PER FULL MOUTH"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0120",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "2",
                    "time_period_qualifier": "calendar",
                    "time_period_value": "1"
                }
            ],
            "limitation": "2 units in 1 calendar"
        },
        {
            "disclaimers": [
                "PER FULL MOUTH"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0150",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "2",
                    "time_period_qualifier": "calendar",
                    "time_period_value": "1"
                }
            ],
            "limitation": "2 units in 1 calendar"
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0120",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "02/03/2025",
                    "latest_visit_or_consultation": "02/03/2025",
                    "service_date": "02/03/2025"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "time_period_qualifier": "remaining"
                }
            ],
            "limitation": "1 units remaining"
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0150",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "02/03/2025",
                    "latest_visit_or_consultation": "02/03/2025",
                    "service_date": "02/03/2025"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "time_period_qualifier": "remaining"
                }
            ],
            "limitation": "1 units remaining"
        },
        {
            "disclaimers": [
                "PER FULL MOUTH"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0210",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "unit_qualifier": "months",
                    "unit": "36"
                }
            ],
            "limitation": "1 units per 36 months"
        },
        {
            "disclaimers": [
                "PER FULL MOUTH"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0330",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "unit_qualifier": "months",
                    "unit": "36"
                }
            ],
            "limitation": "1 units per 36 months"
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0210",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "time_period_qualifier": "remaining"
                }
            ],
            "limitation": "1 units remaining"
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0330",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "time_period_qualifier": "remaining"
                }
            ],
            "limitation": "1 units remaining"
        },
        {
            "disclaimers": [
                "PER FULL MOUTH"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0272",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "time_period_qualifier": "calendar",
                    "time_period_value": "1"
                }
            ],
            "limitation": "1 units in 1 calendar"
        },
        {
            "disclaimers": [
                "PER FULL MOUTH"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0274",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "time_period_qualifier": "calendar",
                    "time_period_value": "1"
                }
            ],
            "limitation": "1 units in 1 calendar"
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0272",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "02/03/2025",
                    "latest_visit_or_consultation": "02/03/2025",
                    "service_date": "02/03/2025"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "0",
                    "time_period_qualifier": "remaining"
                }
            ],
            "limitation": "0 units remaining"
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0274",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "02/03/2025",
                    "latest_visit_or_consultation": "02/03/2025",
                    "service_date": "02/03/2025"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "0",
                    "time_period_qualifier": "remaining"
                }
            ],
            "limitation": "0 units remaining"
        },
        {
            "disclaimers": [
                "DENTAL PROPHYLAXIS COUNTER"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D1110",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "3",
                    "time_period_qualifier": "calendar",
                    "time_period_value": "1"
                }
            ],
            "limitation": "3 visits in 1 calendar"
        },
        {
            "disclaimers": [
                "DENTAL PROPHYLAXIS COUNTER"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D1120",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "3",
                    "time_period_qualifier": "calendar",
                    "time_period_value": "1"
                }
            ],
            "limitation": "3 visits in 1 calendar"
        },
        {
            "disclaimers": [
                "DENTAL PROPHYLAXIS COUNTER"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4346",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "3",
                    "time_period_qualifier": "calendar",
                    "time_period_value": "1"
                }
            ],
            "limitation": "3 visits in 1 calendar"
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D1110",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "02/03/2025",
                    "latest_visit_or_consultation": "02/03/2025",
                    "service_date": "02/03/2025"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "remaining"
                }
            ],
            "limitation": "2 visits remaining"
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D1120",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "02/03/2025",
                    "latest_visit_or_consultation": "02/03/2025",
                    "service_date": "02/03/2025"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "remaining"
                }
            ],
            "limitation": "2 visits remaining"
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4346",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "02/03/2025",
                    "latest_visit_or_consultation": "02/03/2025",
                    "service_date": "02/03/2025"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "remaining"
                }
            ],
            "limitation": "2 visits remaining"
        },
        {
            "disclaimers": [
                "TOOTH NUMBER 01 TO 16"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D5110",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "unit_qualifier": "months",
                    "unit": "60"
                }
            ],
            "limitation": "1 units per 60 months"
        },
        {
            "disclaimers": [
                "TOOTH NUMBER 01 TO 16"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D5213",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "unit_qualifier": "months",
                    "unit": "60"
                }
            ],
            "limitation": "1 units per 60 months"
        },
        {
            "disclaimers": [
                "TOOTH NUMBER 17 TO 32"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D5120",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "unit_qualifier": "months",
                    "unit": "60"
                }
            ],
            "limitation": "1 units per 60 months"
        },
        {
            "disclaimers": [
                "TOOTH NUMBER 17 TO 32"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D5214",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "unit_qualifier": "months",
                    "unit": "60"
                }
            ],
            "limitation": "1 units per 60 months"
        },
        {
            "disclaimers": [
                "TOOTH NUMBER 01 TO 32"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6010",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "unit_qualifier": "months",
                    "unit": "60"
                }
            ],
            "limitation": "1 units per 60 months"
        },
        {
            "disclaimers": [
                "TOOTH NUMBER 01 TO 32"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6058",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "unit_qualifier": "months",
                    "unit": "60"
                }
            ],
            "limitation": "1 units per 60 months"
        },
        {
            "disclaimers": [
                "TOOTH NUMBER 01 TO 32"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6750",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "unit_qualifier": "months",
                    "unit": "60"
                }
            ],
            "limitation": "1 units per 60 months"
        },
        {
            "disclaimers": [
                "TOOTH NUMBER 01 TO 32 51 TO 82"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6240",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "unit_qualifier": "months",
                    "unit": "60"
                }
            ],
            "limitation": "1 units per 60 months"
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0120",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0140",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0150",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0210",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0220",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0272",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0274",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0330",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D1110",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D1120",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D1510",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2391",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2392",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2393",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2740",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2750",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2930",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2950",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D3220",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D3310",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D3320",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D3330",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4260",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4341",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4346",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4355",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4381",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4910",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D5110",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D5120",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D5213",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D5214",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6010",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6057",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6058",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6240",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6750",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D7140",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D7210",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D7220",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D7230",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D7240",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8070",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8080",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8090",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D9110",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "disclaimers": [
                "Shares frequency with D0145,D0150,D0180,DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0120"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0140"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0220"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D1510"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8070"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8080"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8090"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D9110"
        },
        {
            "disclaimers": [
                "Shares frequency with D0120,D0145,D0180,DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0150"
        },
        {
            "disclaimers": [
                "Shares frequency with D0330,D0372,D0387,D0701,D0709,DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0210"
        },
        {
            "disclaimers": [
                "Shares frequency with D0270,D0273,D0274,D0373,D0388,D0708,DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0272"
        },
        {
            "disclaimers": [
                "Shares frequency with D0270,D0272,D0273,D0373,D0388,D0708,DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0274"
        },
        {
            "disclaimers": [
                "Shares frequency with D0210,D0372,D0387,D0701,D0709,DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0330"
        },
        {
            "disclaimers": [
                "Shares frequency with D1120,D4346,DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D1110"
        },
        {
            "disclaimers": [
                "Shares frequency with D1110,D4346,DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D1120"
        },
        {
            "disclaimers": [
                "Shares frequency with D1110,D1120,DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4346"
        },
        {
            "disclaimers": [
                "Shares frequency with D5130,D6110,D6112,D6114,D6116,D6119,D5284-D5286,D5863-D5864"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D5110"
        },
        {
            "disclaimers": [
                "Shares frequency with D5140,D6111,D6113,D6115,D6117,D6118,D5284-D5286,D5865-D5866"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D5120"
        },
        {
            "disclaimers": [
                "Shares frequency with D5211,D5221,D5223,D5225,D5227,D5864,D6112,D6116,D5281-D5282"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D5213"
        },
        {
            "disclaimers": [
                "Shares frequency with D5212,D5222,D5224,D5226,D5866,D6113,D6117"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D5214"
        },
        {
            "disclaimers": [
                "Shares frequency with D5110,D5120,D6013,D6112,D6113,D6116,D6117,D5211-D5286,D6205-D6253"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6010"
        },
        {
            "disclaimers": [
                "Shares frequency with D6055,D6549,D6940,D6950,D5211-D5283,D6058-D6920"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6058"
        },
        {
            "disclaimers": [
                "Shares frequency with D6055,D6549,D6940,D6950,D5211-D5283,D6058-D6920"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6750"
        },
        {
            "disclaimers": [
                "Shares frequency with D6010,D6012,D6013,D6040,D6050,D5211-D5283,D6205-D6253"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6240"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "MISSING TOOTH CLAUSE DOES NOT APPLY"
            ],
            "coverage_level": "family"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Self Funded,CHLD TO 26 OR 26 IF FT STUDENT"
            ],
            "coverage_level": "family"
        },
        {
            "disclaimers": [
                "PER FULL MOUTH"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0180",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "2",
                    "time_period_qualifier": "calendar",
                    "time_period_value": "1"
                }
            ],
            "limitation": "2 units in 1 calendar"
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0180",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "02/03/2025",
                    "latest_visit_or_consultation": "02/03/2025",
                    "service_date": "02/03/2025"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "time_period_qualifier": "remaining"
                }
            ],
            "limitation": "1 units remaining"
        },
        {
            "disclaimers": [
                "PER FULL MOUTH"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0273",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "time_period_qualifier": "calendar",
                    "time_period_value": "1"
                }
            ],
            "limitation": "1 units in 1 calendar"
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0273",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "02/03/2025",
                    "latest_visit_or_consultation": "02/03/2025",
                    "service_date": "02/03/2025"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "0",
                    "time_period_qualifier": "remaining"
                }
            ],
            "limitation": "0 units remaining"
        },
        {
            "disclaimers": [
                "TOOTH NUMBER 01 TO 32"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6065",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "unit_qualifier": "months",
                    "unit": "60"
                }
            ],
            "limitation": "1 units per 60 months"
        },
        {
            "disclaimers": [
                "TOOTH NUMBER 01 TO 32"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6740",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "unit_qualifier": "months",
                    "unit": "60"
                }
            ],
            "limitation": "1 units per 60 months"
        },
        {
            "disclaimers": [
                "TOOTH NUMBER 01 TO 32 51 TO 82"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6245",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "units",
                    "quantity": "1",
                    "unit_qualifier": "months",
                    "unit": "60"
                }
            ],
            "limitation": "1 units per 60 months"
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D9222",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D9944",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0160",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0180",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0230",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0273",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0340",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0350",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0351",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0470",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2140",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2150",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2330",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2331",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2620",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2630",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2642",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2643",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D3331",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D3332",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D3450",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4263",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4264",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4342",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6065",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6740",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6245",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8030",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8040",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8220",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8660",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8670",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8680",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8696",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8699",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D9223",
            "quantity": "99",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "99"
            }
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0160"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0230"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0340"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0350"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0351"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0470"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8030"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8040"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8220"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8660"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8670"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8680"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8696"
        },
        {
            "disclaimers": [
                "DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8699"
        },
        {
            "disclaimers": [
                "Shares frequency with D0120,D0145,D0150,DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0180"
        },
        {
            "disclaimers": [
                "Shares frequency with D0270,D0272,D0274,D0373,D0388,D0708,DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0273"
        },
        {
            "disclaimers": [
                "Shares frequency with D6055,D6549,D6940,D6950,D5211-D5283,D6058-D6920"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6065"
        },
        {
            "disclaimers": [
                "Shares frequency with D6055,D6549,D6940,D6950,D5211-D5283,D6058-D6920"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6740"
        },
        {
            "disclaimers": [
                "Shares frequency with D6010,D6012,D6013,D6040,D6050,D5211-D5283,D6205-D6253"
            ],
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6245"
        }
    ],
    "deductible": [
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Dental"
            ],
            "plan_period": "calendar",
            "amount": "150.00",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Dental"
            ],
            "plan_period": "remaining",
            "amount": "150.00",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Dental"
            ],
            "plan_period": "calendar",
            "amount": "50.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Dental"
            ],
            "plan_period": "remaining",
            "amount": "50.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Dental"
            ],
            "plan_period": "calendar",
            "amount": "150.00",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Dental"
            ],
            "plan_period": "remaining",
            "amount": "150.00",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Dental"
            ],
            "plan_period": "calendar",
            "amount": "50.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Dental"
            ],
            "plan_period": "remaining",
            "amount": "50.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Dental"
            ],
            "plan_period": "calendar",
            "amount": "150.00",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Dental"
            ],
            "plan_period": "remaining",
            "amount": "150.00",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Dental"
            ],
            "plan_period": "calendar",
            "amount": "50.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Dental"
            ],
            "plan_period": "remaining",
            "amount": "50.00",
            "coverage_level": "individual",
            "network": "applies_all"
        }
    ],
    "maximums": [
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "DENTAL"
            ],
            "plan_period": "calendar",
            "amount": "2000.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "DENTAL"
            ],
            "plan_period": "remaining",
            "amount": "1641.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Orthodontics"
            ],
            "plan_period": "lifetime",
            "amount": "2500.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Orthodontics"
            ],
            "plan_period": "lifetime_remaining",
            "amount": "2500.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "DENTAL"
            ],
            "plan_period": "calendar",
            "amount": "2000.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "DENTAL"
            ],
            "plan_period": "remaining",
            "amount": "1641.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Orthodontics"
            ],
            "plan_period": "lifetime",
            "amount": "2500.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Orthodontics"
            ],
            "plan_period": "lifetime_remaining",
            "amount": "2500.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "DENTAL"
            ],
            "plan_period": "calendar",
            "amount": "2000.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "DENTAL"
            ],
            "plan_period": "remaining",
            "amount": "1641.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Orthodontics"
            ],
            "plan_period": "lifetime",
            "amount": "2500.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Orthodontics"
            ],
            "plan_period": "lifetime_remaining",
            "amount": "2500.00",
            "coverage_level": "individual",
            "network": "applies_all"
        }
    ],
    "coinsurance": [
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Preventative"
            ],
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Basic"
            ],
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Major,Ortho"
            ],
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "diagnostic_dental",
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "adjunctive_dental_services",
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "preventive",
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "periodontics",
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "restorative",
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "endodontics",
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "oral_surgery",
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "dental_crowns",
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "orthodontics",
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "prosthodontics",
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Preventative"
            ],
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Basic"
            ],
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Major,Ortho"
            ],
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0120"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0140"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0150"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0210"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0220"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0272"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0274"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0330"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D1110"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D1120"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D1510"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4346"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D9110"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2391"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2392"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2393"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D3220"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D3310"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D3320"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D3330"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4260"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4341"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4355"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4381"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4910"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D7140"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D7210"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D7220"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D7230"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D7240"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2740"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2750"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2930"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2950"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D5110"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D5120"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D5213"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D5214"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6010"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6057"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6058"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6240"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6750"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8070"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8080"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8090"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Preventative"
            ],
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Basic"
            ],
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "Major,Ortho"
            ],
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D9222"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2140"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2150"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2330"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2331"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D3331"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D3332"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D3450"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4263"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4264"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4342"
        },
        {
            "percent": "80",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D9223"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D9944"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0340"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0350"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0351"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0470"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2620"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2630"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2642"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D2643"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6065"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6740"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D6245"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8030"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8040"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8220"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8660"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8670"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8680"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8696"
        },
        {
            "percent": "50",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D8699"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0160"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0180"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0230"
        },
        {
            "percent": "100",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0273"
        }
    ],
    "active_coverage": [
        {
            "service_type": "health_benefit_plan_coverage",
            "insurance_type": "ppo",
            "coverage_level": "family",
            "payer_specific_description": "PPO Dental 2000"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "insurance_type": "ppo",
            "coverage_level": "family",
            "payer_specific_description": "PPO Dental 2000"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "insurance_type": "ppo",
            "coverage_level": "family",
            "payer_specific_description": "PPO Dental 2000"
        }
    ],
    "not_covered": [
        {
            "service_type": "maxillofacial_prosthetics",
            "disclaimers": [
                "Shares frequency with D1120,D4346,DEDUCTIBLE DOES NOT APPLY"
            ],
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "coverage_level": "family",
            "procedure_code": "AD:D1206"
        },
        {
            "coverage_level": "family",
            "procedure_code": "AD:D1208"
        },
        {
            "coverage_level": "family",
            "procedure_code": "AD:D1330"
        },
        {
            "coverage_level": "family",
            "procedure_code": "AD:D1351"
        },
        {
            "coverage_level": "family",
            "procedure_code": "AD:D9230"
        },
        {
            "coverage_level": "family",
            "procedure_code": "AD:D9941"
        }
    ],
    "payer_specific_info": [
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "STANDARD DENTAL NETWORK,PPO II NETWORK,DENTAL EXTEND NETWORK"
            ],
            "coverage_level": "family"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "STANDARD DENTAL NETWORK,PPO II NETWORK,DENTAL EXTEND NETWORK"
            ],
            "coverage_level": "family"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "STANDARD DENTAL NETWORK,PPO II NETWORK,DENTAL EXTEND NETWORK"
            ],
            "coverage_level": "family"
        }
    ]
}
        const type = "patient"; 
        const result = formatDataParser(data,type);
        res.status(200).json(result);
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
}


