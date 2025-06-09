import { Request, Response } from 'express';
import { formatDataParser } from '../services/formatDataParser.service';

export const formatDataParser1 = (req :Request,res : Response) => {
    try {
        const data = {
    "onederfulId": "cc3cf5b0-421c-11f0-959c-5dd0fa12dd74",
    "patient": {
        "name": "Christina Marie Barrera",
        "first_name": "Christina",
        "middle_name": "Marie",
        "last_name": "Barrera",
        "age": "47",
        "dob": "10/05/1977",
        "member_id": "124799369401",
        "address": {
            "street1": "700 Ely Ct",
            "city": "McKinney",
            "zip": "750720230",
            "state": "TX"
        },
        "coverage": {
            "effective_date": "05/20/2024",
            "end_date": "12/31/2025",
            "status": "active"
        },
        "relationship": "self",
        "is_subscriber": true,
        "metadata": [
            {
                "type": "eligibility_begin",
                "value": "05/20/2024",
                "eligibility_begin": "05/20/2024"
            },
            {
                "type": "plan",
                "value": "01/01/2025-12/31/2025",
                "plan": "01/01/2025-12/31/2025"
            }
        ]
    },
    "plan": {
        "group_number": "18996-00001",
        "name": "Southwest Research Institute",
        "number": "18996-00001",
        "group_name": "Southwest Research Institute",
        "metadata": [
            {
                "description": "Southwest Research Institute",
                "value": "18996-00001",
                "qualifier": "group_number"
            }
        ]
    },
    "subscriber": {
        "name": "Christina Marie Barrera",
        "first_name": "Christina",
        "middle_name": "Marie",
        "last_name": "Barrera",
        "age": "47",
        "dob": "10/05/1977",
        "member_id": "124799369401",
        "address": {
            "street1": "700 Ely Ct",
            "city": "McKinney",
            "zip": "750720230",
            "state": "TX"
        },
        "coverage": {
            "effective_date": "05/20/2024",
            "end_date": "12/31/2025",
            "status": "active"
        },
        "relationship": "self",
        "is_subscriber": true,
        "metadata": [
            {
                "type": "eligibility_begin",
                "value": "05/20/2024",
                "eligibility_begin": "05/20/2024"
            },
            {
                "type": "plan",
                "value": "01/01/2025-12/31/2025",
                "plan": "01/01/2025-12/31/2025"
            }
        ]
    },
    "payer": {
        "id": "94276",
        "name": "Delta Dental Ins. Co. - Georgia",
        "received_id": "GA"
    },
    "provider": {
        "npi": "1114290798",
        "tax_id": "043212345",
        "first_name": "BADER",
        "last_name": "ABDEEN"
    },
    "limitations": [
        {
            "service_type": "oral_evaluation",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "07/31/2024",
                    "latest_visit_or_consultation": "07/31/2024",
                    "service_date": "07/31/2024"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "limitation": "2 visits in 1 years"
        },
        {
            "service_type": "prophylaxis",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "limitation": "2 visits in 1 years"
        },
        {
            "service_type": "diagnostic_dental",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "service_type": "periodontics",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "36"
                }
            ],
            "limitation": "1 visits in 36 month"
        },
        {
            "service_type": "panoramic_images",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "36"
                }
            ],
            "limitation": "1 visits in 36 month"
        },
        {
            "service_type": "restorative",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "07/31/2024",
                    "latest_visit_or_consultation": "07/31/2024",
                    "service_date": "07/31/2024"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "limitation": "1 visits in 24 month"
        },
        {
            "service_type": "dental_crowns",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "quantity": "12",
            "quantity_qualifier": "age_low_value",
            "age_limit": {
                "age_low_value": "12"
            },
            "limitation": "1 visits in 60 month"
        },
        {
            "service_type": "sealants",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "quantity": "8",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "8"
            },
            "limitation": "1 visits in 24 month"
        },
        {
            "service_type": "endodontics",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "limitation": "1 visits in 24 month"
        },
        {
            "service_type": "fluoride",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "limitation": "2 visits in 1 years"
        },
        {
            "service_type": "dental_implants",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "service_type": "orthodontics",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "service_type": "adjunctive_dental_services",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "service_type": "diagnostic_lab",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "day",
                    "time_period_value": "1"
                }
            ],
            "limitation": "1 visits in 1 day"
        },
        {
            "service_type": "anesthesia",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "4",
                    "time_period_qualifier": "day",
                    "time_period_value": "1"
                }
            ],
            "limitation": "4 visits in 1 day"
        },
        {
            "service_type": "oral_surgery",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "07/31/2024",
                    "latest_visit_or_consultation": "07/31/2024",
                    "service_date": "07/31/2024"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "service_type": "diagnostic_imaging",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "12"
                }
            ],
            "limitation": "1 visits in 12 month"
        },
        {
            "service_type": "preventive",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "quantity": "13",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "13"
            },
            "limitation": "1 visits in lifetime"
        },
        {
            "service_type": "prosthodontics_fixed",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "quantity": "16",
            "quantity_qualifier": "age_low_value",
            "age_limit": {
                "age_low_value": "16"
            },
            "limitation": "1 visits in 60 month"
        },
        {
            "service_type": "prosthodontics_removable",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "6"
                }
            ],
            "limitation": "1 visits in 6 month"
        },
        {
            "service_type": "fmx",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "36"
                }
            ],
            "limitation": "1 visits in 36 month"
        },
        {
            "procedure_code": "AD:D0145",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "quantity": "2",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "2"
            },
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D0145",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "quantity": "2",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "2"
            },
            "limitation": "2 visits in 1 years"
        },
        {
            "procedure_code": "AD:D0150",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "07/31/2024",
                    "latest_visit_or_consultation": "07/31/2024",
                    "service_date": "07/31/2024"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D0160",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D0180",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D0190",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "12"
                }
            ],
            "limitation": "1 visits in 12 month"
        },
        {
            "procedure_code": "AD:D0191",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "12"
                }
            ],
            "limitation": "1 visits in 12 month"
        },
        {
            "procedure_code": "AD:D0460",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "day",
                    "time_period_value": "1"
                }
            ],
            "limitation": "1 visits in 1 day"
        },
        {
            "procedure_code": "AD:D4283",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "month",
                    "time_period_value": "36"
                }
            ],
            "limitation": "2 visits in 36 month"
        },
        {
            "procedure_code": "AD:D4285",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "month",
                    "time_period_value": "36"
                }
            ],
            "limitation": "2 visits in 36 month"
        },
        {
            "procedure_code": "AD:D4341",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "07/31/2024",
                    "latest_visit_or_consultation": "07/31/2024",
                    "service_date": "07/31/2024"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D4342",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D4355",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D4910",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "4",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "limitation": "4 visits in 1 years"
        },
        {
            "procedure_code": "AD:D2928",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "quantity": "15",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "15"
            },
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D2930",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "quantity": "15",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "15"
            },
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D2931",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "quantity": "15",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "15"
            },
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D2932",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "quantity": "15",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "15"
            },
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D2933",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "quantity": "15",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "15"
            },
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D2934",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "quantity": "15",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "15"
            },
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D2910",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D2915",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D2920",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D2950",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D2952",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D2954",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D2971",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D2976",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D2980",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "2 visits in 60 month"
        },
        {
            "procedure_code": "AD:D2753",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "quantity": "12",
            "quantity_qualifier": "age_low_value",
            "age_limit": {
                "age_low_value": "12"
            },
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D2542",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "quantity": "12",
            "quantity_qualifier": "age_low_value",
            "age_limit": {
                "age_low_value": "12"
            },
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D2543",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "quantity": "12",
            "quantity_qualifier": "age_low_value",
            "age_limit": {
                "age_low_value": "12"
            },
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D2544",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "quantity": "12",
            "quantity_qualifier": "age_low_value",
            "age_limit": {
                "age_low_value": "12"
            },
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D2940",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D2955",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D1351",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "quantity": "15",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "15"
            },
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D1352",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "quantity": "15",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "15"
            },
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D1353",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "quantity": "15",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "15"
            },
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D3450",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D3351",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "quantity": "18",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "18"
            },
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D3352",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "quantity": "18",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "18"
            },
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D3353",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "quantity": "18",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "18"
            },
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D3110",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "12"
                }
            ],
            "limitation": "1 visits in 12 month"
        },
        {
            "procedure_code": "AD:D3920",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D3921",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D3220",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D3221",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D3222",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D3230",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D3240",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D3310",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D3320",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D3330",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D3332",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D3333",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D6080",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "36"
                }
            ],
            "limitation": "1 visits in 36 month"
        },
        {
            "procedure_code": "AD:D6081",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D6089",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D6090",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D6096",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D6100",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D6101",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "36"
                }
            ],
            "limitation": "1 visits in 36 month"
        },
        {
            "procedure_code": "AD:D6102",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "36"
                }
            ],
            "limitation": "1 visits in 36 month"
        },
        {
            "procedure_code": "AD:D6105",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D6180",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "36"
                }
            ],
            "limitation": "1 visits in 36 month"
        },
        {
            "procedure_code": "AD:D6193",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D6197",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D8660",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "limitation": "2 visits in 1 years"
        },
        {
            "procedure_code": "AD:D9942",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D9943",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "12"
                }
            ],
            "limitation": "1 visits in 12 month"
        },
        {
            "procedure_code": "AD:D9120",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "day",
                    "time_period_value": "1"
                }
            ],
            "limitation": "1 visits in 1 day"
        },
        {
            "procedure_code": "AD:D9310",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D9310",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "limitation": "2 visits in 1 years"
        },
        {
            "procedure_code": "AD:D9110",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "day",
                    "time_period_value": "1"
                }
            ],
            "limitation": "1 visits in 1 day"
        },
        {
            "procedure_code": "AD:D7284",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "day",
                    "time_period_value": "1"
                }
            ],
            "limitation": "1 visits in 1 day"
        },
        {
            "procedure_code": "AD:D7285",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "day",
                    "time_period_value": "1"
                }
            ],
            "limitation": "1 visits in 1 day"
        },
        {
            "procedure_code": "AD:D7286",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "day",
                    "time_period_value": "1"
                }
            ],
            "limitation": "1 visits in 1 day"
        },
        {
            "procedure_code": "AD:D0340",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D0350",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D0230",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "07/31/2024",
                    "latest_visit_or_consultation": "07/31/2024",
                    "service_date": "07/31/2024"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "day",
                    "time_period_value": "1"
                }
            ],
            "limitation": "1 visits in 1 day"
        },
        {
            "procedure_code": "AD:D0240",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "day",
                    "time_period_value": "1"
                }
            ],
            "limitation": "2 visits in 1 day"
        },
        {
            "procedure_code": "AD:D0270",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "quantity": "18",
            "quantity_qualifier": "age_low_value",
            "age_limit": {
                "age_low_value": "18"
            },
            "limitation": "1 visits in 1 years"
        },
        {
            "procedure_code": "AD:D0270",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "quantity": "17",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "17"
            },
            "limitation": "2 visits in 1 years"
        },
        {
            "procedure_code": "AD:D0272",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "quantity": "18",
            "quantity_qualifier": "age_low_value",
            "age_limit": {
                "age_low_value": "18"
            },
            "limitation": "1 visits in 1 years"
        },
        {
            "procedure_code": "AD:D0272",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "quantity": "17",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "17"
            },
            "limitation": "2 visits in 1 years"
        },
        {
            "procedure_code": "AD:D0273",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "quantity": "18",
            "quantity_qualifier": "age_low_value",
            "age_limit": {
                "age_low_value": "18"
            },
            "limitation": "1 visits in 1 years"
        },
        {
            "procedure_code": "AD:D0273",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "quantity": "17",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "17"
            },
            "limitation": "2 visits in 1 years"
        },
        {
            "procedure_code": "AD:D0274",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "07/31/2024",
                    "latest_visit_or_consultation": "07/31/2024",
                    "service_date": "07/31/2024"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "quantity": "18",
            "quantity_qualifier": "age_low_value",
            "age_limit": {
                "age_low_value": "18"
            },
            "limitation": "1 visits in 1 years"
        },
        {
            "procedure_code": "AD:D0274",
            "service_dates": [
                {
                    "type": "latest_visit_or_consultation",
                    "value": "07/31/2024",
                    "latest_visit_or_consultation": "07/31/2024",
                    "service_date": "07/31/2024"
                }
            ],
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "quantity": "17",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "17"
            },
            "limitation": "2 visits in 1 years"
        },
        {
            "procedure_code": "AD:D0277",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "quantity": "18",
            "quantity_qualifier": "age_low_value",
            "age_limit": {
                "age_low_value": "18"
            },
            "limitation": "1 visits in 1 years"
        },
        {
            "procedure_code": "AD:D0277",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "quantity": "17",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "17"
            },
            "limitation": "2 visits in 1 years"
        },
        {
            "procedure_code": "AD:D1354",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "limitation": "2 visits in 1 years"
        },
        {
            "procedure_code": "AD:D1551",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D1552",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D1553",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D1556",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D1556",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "day",
                    "time_period_value": "1"
                }
            ],
            "limitation": "1 visits in 1 day"
        },
        {
            "procedure_code": "AD:D1557",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D1558",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D1575",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "quantity": "8",
            "quantity_qualifier": "age_high_value",
            "age_limit": {
                "age_high_value": "8"
            },
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D6930",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "lifetime"
                }
            ],
            "limitation": "1 visits in lifetime"
        },
        {
            "procedure_code": "AD:D6940",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D6980",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "2 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5410",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "limitation": "2 visits in 1 years"
        },
        {
            "procedure_code": "AD:D5411",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "limitation": "2 visits in 1 years"
        },
        {
            "procedure_code": "AD:D5421",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "limitation": "2 visits in 1 years"
        },
        {
            "procedure_code": "AD:D5422",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "years",
                    "time_period_value": "1"
                }
            ],
            "limitation": "2 visits in 1 years"
        },
        {
            "procedure_code": "AD:D5110",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5120",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5130",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5140",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5710",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D5711",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D5720",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D5721",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D5725",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "24"
                }
            ],
            "limitation": "1 visits in 24 month"
        },
        {
            "procedure_code": "AD:D5820",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5821",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5211",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5212",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5213",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5214",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5221",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5222",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5223",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5224",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5225",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5226",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5227",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5228",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5282",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5283",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5284",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5286",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "month",
                    "time_period_value": "60"
                }
            ],
            "limitation": "1 visits in 60 month"
        },
        {
            "procedure_code": "AD:D5850",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "month",
                    "time_period_value": "12"
                }
            ],
            "limitation": "2 visits in 12 month"
        },
        {
            "procedure_code": "AD:D5851",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "2",
                    "time_period_qualifier": "month",
                    "time_period_value": "12"
                }
            ],
            "limitation": "2 visits in 12 month"
        }
    ],
    "deductible": [
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "oral_evaluation",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "prophylaxis",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "diagnostic_dental",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "periodontics",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "panoramic_images",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "restorative",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "dental_crowns",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "sealants",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "endodontics",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "fluoride",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "dental_implants",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "orthodontics",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "adjunctive_dental_services",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "amount": "0.00",
            "network": "in_network",
            "procedure_code": "AD:D9110",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "diagnostic_lab",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "anesthesia",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "oral_surgery",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "diagnostic_imaging",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "preventive",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "prosthodontics_fixed",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "prosthodontics_removable",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "fmx",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "dental_care",
            "plan_period": "calendar",
            "amount": "150.00",
            "coverage_level": "family",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "dental_care",
            "plan_period": "calendar",
            "amount": "50.00",
            "coverage_level": "individual",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "dental_care",
            "plan_period": "remaining",
            "amount": "150.00",
            "coverage_level": "family",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "dental_care",
            "plan_period": "remaining",
            "amount": "50.00",
            "coverage_level": "individual",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "oral_evaluation",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "prophylaxis",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "diagnostic_dental",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "periodontics",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "panoramic_images",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "restorative",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "dental_crowns",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "sealants",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "endodontics",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "fluoride",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "dental_implants",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "orthodontics",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "adjunctive_dental_services",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "amount": "0.00",
            "network": "in_network",
            "procedure_code": "AD:D9110",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "diagnostic_lab",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "anesthesia",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "oral_surgery",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "diagnostic_imaging",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "preventive",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "prosthodontics_fixed",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "prosthodontics_removable",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "fmx",
            "amount": "0.00",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "dental_care",
            "plan_period": "calendar",
            "amount": "150.00",
            "coverage_level": "family",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "dental_care",
            "plan_period": "calendar",
            "amount": "50.00",
            "coverage_level": "individual",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "dental_care",
            "plan_period": "remaining",
            "amount": "150.00",
            "coverage_level": "family",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "dental_care",
            "plan_period": "remaining",
            "amount": "50.00",
            "coverage_level": "individual",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "service_type": "oral_evaluation",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "prophylaxis",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "diagnostic_dental",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "periodontics",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "panoramic_images",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "restorative",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "dental_crowns",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "sealants",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "endodontics",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "fluoride",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "dental_implants",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "orthodontics",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "adjunctive_dental_services",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "amount": "0.00",
            "network": "out_of_network",
            "procedure_code": "AD:D9110"
        },
        {
            "service_type": "diagnostic_lab",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "anesthesia",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "oral_surgery",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "diagnostic_imaging",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "preventive",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "prosthodontics_fixed",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "prosthodontics_removable",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "fmx",
            "amount": "0.00",
            "network": "out_of_network"
        },
        {
            "service_type": "dental_care",
            "plan_period": "calendar",
            "amount": "150.00",
            "coverage_level": "family",
            "network": "out_of_network"
        },
        {
            "service_type": "dental_care",
            "plan_period": "calendar",
            "amount": "50.00",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "dental_care",
            "plan_period": "remaining",
            "amount": "150.00",
            "coverage_level": "family",
            "network": "out_of_network"
        },
        {
            "service_type": "dental_care",
            "plan_period": "remaining",
            "amount": "50.00",
            "coverage_level": "individual",
            "network": "out_of_network"
        }
    ],
    "maximums": [
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "dental_care",
            "plan_period": "calendar",
            "amount": "2000.00",
            "coverage_level": "individual",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "orthodontics",
            "plan_period": "lifetime",
            "amount": "1500.00",
            "coverage_level": "individual",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "dental_care",
            "plan_period": "remaining",
            "amount": "2000.00",
            "coverage_level": "individual",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "orthodontics",
            "plan_period": "lifetime_remaining",
            "amount": "1500.00",
            "coverage_level": "individual",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "dental_care",
            "plan_period": "calendar",
            "amount": "2000.00",
            "coverage_level": "individual",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "orthodontics",
            "plan_period": "lifetime",
            "amount": "1500.00",
            "coverage_level": "individual",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "dental_care",
            "plan_period": "remaining",
            "amount": "2000.00",
            "coverage_level": "individual",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "orthodontics",
            "plan_period": "lifetime_remaining",
            "amount": "1500.00",
            "coverage_level": "individual",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "service_type": "dental_care",
            "plan_period": "calendar",
            "amount": "2000.00",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "orthodontics",
            "plan_period": "lifetime",
            "amount": "1500.00",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "dental_care",
            "plan_period": "remaining",
            "amount": "2000.00",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "orthodontics",
            "plan_period": "lifetime_remaining",
            "amount": "1500.00",
            "coverage_level": "individual",
            "network": "out_of_network"
        }
    ],
    "coinsurance": [
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "oral_evaluation",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "prophylaxis",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "diagnostic_dental",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "periodontics",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "80",
            "network": "in_network",
            "procedure_code": "AD:D4322",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "80",
            "network": "in_network",
            "procedure_code": "AD:D4323",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "panoramic_images",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "restorative",
            "percent": "80",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2950",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2952",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2954",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2980",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2753",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2542",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2543",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2544",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2955",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "dental_crowns",
            "percent": "50",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "sealants",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "endodontics",
            "percent": "80",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "fluoride",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "dental_implants",
            "percent": "50",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "80",
            "network": "in_network",
            "procedure_code": "AD:D6081",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "80",
            "network": "in_network",
            "procedure_code": "AD:D6105",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "80",
            "network": "in_network",
            "procedure_code": "AD:D6197",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "orthodontics",
            "percent": "50",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "adjunctive_dental_services",
            "percent": "80",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "100",
            "network": "in_network",
            "procedure_code": "AD:D9110",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "diagnostic_lab",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "anesthesia",
            "percent": "80",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "oral_surgery",
            "percent": "80",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D7283",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "diagnostic_imaging",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D0364",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D0365",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D0366",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D0367",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D0391",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "preventive",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "prosthodontics_fixed",
            "percent": "50",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "80",
            "network": "in_network",
            "procedure_code": "AD:D6930",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "prosthodontics_removable",
            "percent": "80",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5110",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5120",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5130",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5140",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5820",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5821",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5211",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5212",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5213",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5214",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5221",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5222",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5223",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5224",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5225",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5226",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5227",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5228",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5282",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5283",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5284",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5286",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5850",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5851",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "20",
                    "plan_network_identification_number": "20"
                }
            ],
            "service_type": "fmx",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "20",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PPO"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "oral_evaluation",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "prophylaxis",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "diagnostic_dental",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "periodontics",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "80",
            "network": "in_network",
            "procedure_code": "AD:D4322",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "80",
            "network": "in_network",
            "procedure_code": "AD:D4323",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "panoramic_images",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "restorative",
            "percent": "80",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2950",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2952",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2954",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2980",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2753",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2542",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2543",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2544",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D2955",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "dental_crowns",
            "percent": "50",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "sealants",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "endodontics",
            "percent": "80",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "fluoride",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "dental_implants",
            "percent": "50",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "80",
            "network": "in_network",
            "procedure_code": "AD:D6081",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "80",
            "network": "in_network",
            "procedure_code": "AD:D6105",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "80",
            "network": "in_network",
            "procedure_code": "AD:D6197",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "orthodontics",
            "percent": "50",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "adjunctive_dental_services",
            "percent": "80",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "100",
            "network": "in_network",
            "procedure_code": "AD:D9110",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "diagnostic_lab",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "anesthesia",
            "percent": "80",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "oral_surgery",
            "percent": "80",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D7283",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "diagnostic_imaging",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D0364",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D0365",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D0366",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D0367",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D0391",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "preventive",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "prosthodontics_fixed",
            "percent": "50",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "80",
            "network": "in_network",
            "procedure_code": "AD:D6930",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "prosthodontics_removable",
            "percent": "80",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5110",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5120",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5130",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5140",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5820",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5821",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5211",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5212",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5213",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5214",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5221",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5222",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5223",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5224",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5225",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5226",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5227",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5228",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5282",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5283",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5284",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5286",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5850",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "percent": "50",
            "network": "in_network",
            "procedure_code": "AD:D5851",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "references": [
                {
                    "reference_qualifier": "plan_network_identification_number",
                    "reference_value": "01",
                    "plan_network_identification_number": "01"
                }
            ],
            "service_type": "fmx",
            "percent": "100",
            "network": "in_network",
            "metadata": [
                {
                    "value": "01",
                    "qualifier": "plan_network_identification_number"
                }
            ],
            "payer_specific_description": "PREMIER"
        },
        {
            "service_type": "oral_evaluation",
            "percent": "100",
            "network": "out_of_network"
        },
        {
            "service_type": "prophylaxis",
            "percent": "100",
            "network": "out_of_network"
        },
        {
            "service_type": "diagnostic_dental",
            "percent": "100",
            "network": "out_of_network"
        },
        {
            "service_type": "periodontics",
            "percent": "100",
            "network": "out_of_network"
        },
        {
            "percent": "80",
            "network": "out_of_network",
            "procedure_code": "AD:D4322"
        },
        {
            "percent": "80",
            "network": "out_of_network",
            "procedure_code": "AD:D4323"
        },
        {
            "service_type": "panoramic_images",
            "percent": "100",
            "network": "out_of_network"
        },
        {
            "service_type": "restorative",
            "percent": "80",
            "network": "out_of_network"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D2950"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D2952"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D2954"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D2980"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D2753"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D2542"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D2543"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D2544"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D2955"
        },
        {
            "service_type": "dental_crowns",
            "percent": "50",
            "network": "out_of_network"
        },
        {
            "service_type": "sealants",
            "percent": "100",
            "network": "out_of_network"
        },
        {
            "service_type": "endodontics",
            "percent": "80",
            "network": "out_of_network"
        },
        {
            "service_type": "fluoride",
            "percent": "100",
            "network": "out_of_network"
        },
        {
            "service_type": "dental_implants",
            "percent": "50",
            "network": "out_of_network"
        },
        {
            "percent": "80",
            "network": "out_of_network",
            "procedure_code": "AD:D6081"
        },
        {
            "percent": "80",
            "network": "out_of_network",
            "procedure_code": "AD:D6105"
        },
        {
            "percent": "80",
            "network": "out_of_network",
            "procedure_code": "AD:D6197"
        },
        {
            "service_type": "orthodontics",
            "percent": "50",
            "network": "out_of_network"
        },
        {
            "service_type": "adjunctive_dental_services",
            "percent": "80",
            "network": "out_of_network"
        },
        {
            "percent": "100",
            "network": "out_of_network",
            "procedure_code": "AD:D9110"
        },
        {
            "service_type": "diagnostic_lab",
            "percent": "100",
            "network": "out_of_network"
        },
        {
            "service_type": "anesthesia",
            "percent": "80",
            "network": "out_of_network"
        },
        {
            "service_type": "oral_surgery",
            "percent": "80",
            "network": "out_of_network"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D7283"
        },
        {
            "service_type": "diagnostic_imaging",
            "percent": "100",
            "network": "out_of_network"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D0364"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D0365"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D0366"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D0367"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D0391"
        },
        {
            "service_type": "preventive",
            "percent": "100",
            "network": "out_of_network"
        },
        {
            "service_type": "prosthodontics_fixed",
            "percent": "50",
            "network": "out_of_network"
        },
        {
            "percent": "80",
            "network": "out_of_network",
            "procedure_code": "AD:D6930"
        },
        {
            "service_type": "prosthodontics_removable",
            "percent": "80",
            "network": "out_of_network"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5110"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5120"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5130"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5140"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5820"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5821"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5211"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5212"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5213"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5214"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5221"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5222"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5223"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5224"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5225"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5226"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5227"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5228"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5282"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5283"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5284"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5286"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5850"
        },
        {
            "percent": "50",
            "network": "out_of_network",
            "procedure_code": "AD:D5851"
        },
        {
            "service_type": "fmx",
            "percent": "100",
            "network": "out_of_network"
        }
    ],
    "active_coverage": [
        {
            "insurance_type": "group_policy",
            "disclaimers": [
                "URL=http%3A%2F%2Fdeltadentalins.com",
                "Link=Click Here For Support"
            ],
            "coverage_level": "family",
            "payer_specific_description": "Delta Dental PPO"
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


export const formatDataParser2 = (req : Request,res : Response) =>{
    try {
        const type = "patient2";
        const data = {
    "onederfulId": "5f2943b0-421d-11f0-bf99-2ff188113c5c",
    "patient": {
        "name": "HILLARY CUEVAS",
        "first_name": "HILLARY",
        "gender": "female",
        "last_name": "CUEVAS",
        "age": "24",
        "dob": "02/27/2001",
        "member_id": "U0464363305",
        "address": {
            "street1": "617 MCINTYRE AVE",
            "city": "TAFT",
            "zip": "783902825",
            "state": "TX"
        },
        "coverage": {
            "effective_date": "04/01/2004",
            "end_date": "12/31/2025",
            "status": "active"
        },
        "relationship": "self",
        "is_subscriber": true,
        "metadata": [
            {
                "type": "plan_begin",
                "value": "01/01/2025",
                "plan_begin": "01/01/2025"
            },
            {
                "type": "plan_end",
                "value": "12/31/2025",
                "plan_end": "12/31/2025"
            },
            {
                "type": "eligibility_begin",
                "value": "04/01/2004",
                "eligibility_begin": "04/01/2004"
            }
        ]
    },
    "plan": {
        "group_number": "3208168",
        "prior_identifier_number": "U04643633",
        "plan_network_identification_number": "DENTL",
        "name": "REPUBLIC SERVICES, INC.",
        "number": "3208168",
        "group_name": "REPUBLIC SERVICES, INC.",
        "payer_plan_name": "TOTAL",
        "payer_plan_identifier": "DENTL",
        "insurance_type": "ppo",
        "payer_specific_description": "Dental PPO",
        "metadata": [
            {
                "description": "REPUBLIC SERVICES, INC.",
                "value": "3208168",
                "qualifier": "group_number"
            },
            {
                "value": "U04643633",
                "qualifier": "prior_identifier_number"
            },
            {
                "description": "TOTAL",
                "value": "DENTL",
                "qualifier": "plan_network_identification_number"
            }
        ]
    },
    "subscriber": {
        "name": "HILLARY CUEVAS",
        "first_name": "HILLARY",
        "gender": "female",
        "last_name": "CUEVAS",
        "age": "24",
        "dob": "02/27/2001",
        "member_id": "U0464363305",
        "address": {
            "street1": "617 MCINTYRE AVE",
            "city": "TAFT",
            "zip": "783902825",
            "state": "TX"
        },
        "coverage": {
            "effective_date": "04/01/2004",
            "end_date": "12/31/2025",
            "status": "active"
        },
        "relationship": "self",
        "is_subscriber": true,
        "metadata": [
            {
                "type": "plan_begin",
                "value": "01/01/2025",
                "plan_begin": "01/01/2025"
            },
            {
                "type": "plan_end",
                "value": "12/31/2025",
                "plan_end": "12/31/2025"
            },
            {
                "type": "eligibility_begin",
                "value": "04/01/2004",
                "eligibility_begin": "04/01/2004"
            }
        ]
    },
    "payer": {
        "name": "CHLIC",
        "id": "62308"
    },
    "provider": {
        "npi": "1114290798",
        "tax_id": "043212345",
        "first_name": "BADER",
        "last_name": "ABDEEN"
    },
    "limitations": [
        {
            "service_type": "diagnostic_x_ray",
            "disclaimers": [
                "D0210 D0330",
                "TOTAL",
                "NO NETWORK"
            ],
            "coverage_level": "individual",
            "network": "in_network",
            "health_service_descriptions": [
                {
                    "unit_qualifier": "months",
                    "unit": "60",
                    "time_period_qualifier": "remaining",
                    "time_period_value": "1"
                }
            ],
            "quantity": "1",
            "quantity_qualifier": "visits",
            "limitation": "1 remaining per 60 months"
        },
        {
            "service_type": "diagnostic_x_ray",
            "disclaimers": [
                "D0270 D0272 D0273 D0274 D0277",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "calendar",
            "coverage_level": "individual",
            "network": "in_network",
            "quantity": "1",
            "quantity_qualifier": "visits"
        },
        {
            "service_type": "diagnostic_x_ray",
            "disclaimers": [
                "D0270 D0272 D0273 D0274 D0277",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "remaining",
            "coverage_level": "individual",
            "network": "in_network",
            "quantity": "1",
            "quantity_qualifier": "visits"
        },
        {
            "service_type": "diagnostic_x_ray",
            "disclaimers": [
                "D0210 D0330"
            ],
            "coverage_level": "individual",
            "network": "out_of_network",
            "health_service_descriptions": [
                {
                    "unit_qualifier": "months",
                    "unit": "60",
                    "time_period_qualifier": "remaining",
                    "time_period_value": "1"
                }
            ],
            "quantity": "1",
            "quantity_qualifier": "visits",
            "limitation": "1 remaining per 60 months"
        },
        {
            "service_type": "diagnostic_x_ray",
            "disclaimers": [
                "D0270 D0272 D0273 D0274 D0277"
            ],
            "plan_period": "calendar",
            "coverage_level": "individual",
            "network": "out_of_network",
            "quantity": "1",
            "quantity_qualifier": "visits"
        },
        {
            "service_type": "diagnostic_x_ray",
            "disclaimers": [
                "D0270 D0272 D0273 D0274 D0277"
            ],
            "plan_period": "remaining",
            "coverage_level": "individual",
            "network": "out_of_network",
            "quantity": "1",
            "quantity_qualifier": "visits"
        }
    ],
    "deductible": [
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "AMOUNTS APPLY TO BOTH IN-NETWORK AND OUT-OF-NETWORK",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "calendar",
            "amount": "75.00",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "AMOUNTS APPLY TO BOTH IN-NETWORK AND OUT-OF-NETWORK",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "calendar",
            "amount": "175.00",
            "coverage_level": "family",
            "network": "in_network"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "AMOUNTS APPLY TO BOTH IN-NETWORK AND OUT-OF-NETWORK"
            ],
            "plan_period": "calendar",
            "amount": "75.00",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "AMOUNTS APPLY TO BOTH IN-NETWORK AND OUT-OF-NETWORK"
            ],
            "plan_period": "calendar",
            "amount": "175.00",
            "coverage_level": "family",
            "network": "out_of_network"
        },
        {
            "service_type": "diagnostic_dental",
            "disclaimers": [
                "D0120 D0140 D0145 D0150 D0160 D0170 D0180 D0372 D0373 D0374 D0387 D0388 D0389 D0415 D0600 D0606 D4910 D4920 D9995 D9996",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "diagnostic_dental",
            "disclaimers": [
                "D0120 D0140 D0145 D0150 D0160 D0170 D0180 D0372 D0373 D0374 D0387 D0388 D0389 D0415 D0600 D0606 D4910 D4920 D9995 D9996",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "family",
            "network": "in_network"
        },
        {
            "service_type": "diagnostic_dental",
            "disclaimers": [
                "D0120 D0140 D0145 D0150 D0160 D0170 D0180 D0372 D0373 D0374 D0387 D0388 D0389 D0415 D0600 D0606 D4910 D4920 D9995 D9996"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "diagnostic_dental",
            "disclaimers": [
                "D0120 D0140 D0145 D0150 D0160 D0170 D0180 D0372 D0373 D0374 D0387 D0388 D0389 D0415 D0600 D0606 D4910 D4920 D9995 D9996"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "family",
            "network": "out_of_network"
        },
        {
            "service_type": "periodontics",
            "disclaimers": [
                "D4346",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "periodontics",
            "disclaimers": [
                "D4346",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "family",
            "network": "in_network"
        },
        {
            "service_type": "periodontics",
            "disclaimers": [
                "D4346"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "periodontics",
            "disclaimers": [
                "D4346"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "family",
            "network": "out_of_network"
        },
        {
            "service_type": "adjunctive_dental_services",
            "disclaimers": [
                "D9110 D9912",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "adjunctive_dental_services",
            "disclaimers": [
                "D9110 D9912",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "family",
            "network": "in_network"
        },
        {
            "service_type": "adjunctive_dental_services",
            "disclaimers": [
                "D9110 D9912"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "adjunctive_dental_services",
            "disclaimers": [
                "D9110 D9912"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "family",
            "network": "out_of_network"
        },
        {
            "service_type": "diagnostic_x_ray",
            "disclaimers": [
                "D0210 D0220 D0230 D0240 D0251 D0270 D0272 D0273 D0274 D0277 D0330 D0391 D0701 D0705 D0706 D0707 D0708 D0709",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "diagnostic_x_ray",
            "disclaimers": [
                "D0210 D0220 D0230 D0240 D0251 D0270 D0272 D0273 D0274 D0277 D0330 D0391 D0701 D0705 D0706 D0707 D0708 D0709",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "family",
            "network": "in_network"
        },
        {
            "service_type": "diagnostic_x_ray",
            "disclaimers": [
                "D0210 D0220 D0230 D0240 D0251 D0270 D0272 D0273 D0274 D0277 D0330 D0391 D0701 D0705 D0706 D0707 D0708 D0709"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "diagnostic_x_ray",
            "disclaimers": [
                "D0210 D0220 D0230 D0240 D0251 D0270 D0272 D0273 D0274 D0277 D0330 D0391 D0701 D0705 D0706 D0707 D0708 D0709"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "family",
            "network": "out_of_network"
        },
        {
            "service_type": "preventive",
            "disclaimers": [
                "D1110 D1555 D1556 D1557 D1558 D1701 D1702 D1703 D1704 D1705 D1706 D1707 D1708 D1709 D1710 D1711 D1712 D1713 D1714 D1781 D1782 D1783",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "preventive",
            "disclaimers": [
                "D1110 D1555 D1556 D1557 D1558 D1701 D1702 D1703 D1704 D1705 D1706 D1707 D1708 D1709 D1710 D1711 D1712 D1713 D1714 D1781 D1782 D1783",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "family",
            "network": "in_network"
        },
        {
            "service_type": "preventive",
            "disclaimers": [
                "D1110 D1555 D1556 D1557 D1558 D1701 D1702 D1703 D1704 D1705 D1706 D1707 D1708 D1709 D1710 D1711 D1712 D1713 D1714 D1781 D1782 D1783"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "preventive",
            "disclaimers": [
                "D1110 D1555 D1556 D1557 D1558 D1701 D1702 D1703 D1704 D1705 D1706 D1707 D1708 D1709 D1710 D1711 D1712 D1713 D1714 D1781 D1782 D1783"
            ],
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "family",
            "network": "out_of_network"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "AMOUNTS APPLY TO BOTH IN-NETWORK AND OUT-OF-NETWORK",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "remaining",
            "amount": "75.00",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "AMOUNTS APPLY TO BOTH IN-NETWORK AND OUT-OF-NETWORK",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "remaining",
            "amount": "175.00",
            "coverage_level": "family",
            "network": "in_network"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "AMOUNTS APPLY TO BOTH IN-NETWORK AND OUT-OF-NETWORK"
            ],
            "plan_period": "remaining",
            "amount": "75.00",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "AMOUNTS APPLY TO BOTH IN-NETWORK AND OUT-OF-NETWORK"
            ],
            "plan_period": "remaining",
            "amount": "175.00",
            "coverage_level": "family",
            "network": "out_of_network"
        }
    ],
    "maximums": [
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "AMOUNTS APPLY TO BOTH IN-NETWORK AND OUT-OF-NETWORK",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "calendar",
            "amount": "2000.00",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "AMOUNTS APPLY TO BOTH IN-NETWORK AND OUT-OF-NETWORK"
            ],
            "plan_period": "calendar",
            "amount": "2000.00",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "AMOUNTS APPLY TO BOTH IN-NETWORK AND OUT-OF-NETWORK",
                "TOTAL",
                "NO NETWORK"
            ],
            "plan_period": "remaining",
            "amount": "2000.00",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "disclaimers": [
                "AMOUNTS APPLY TO BOTH IN-NETWORK AND OUT-OF-NETWORK"
            ],
            "plan_period": "remaining",
            "amount": "2000.00",
            "coverage_level": "individual",
            "network": "out_of_network"
        }
    ],
    "coinsurance": [
        {
            "service_type": "diagnostic_dental",
            "disclaimers": [
                "D0120 D0140 D0145 D0150 D0160 D0170 D0180 D0372 D0373 D0374 D0387 D0388 D0389 D0415 D0600 D0606 D4910 D4920 D9995 D9996",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "100",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "diagnostic_dental",
            "disclaimers": [
                "D0120 D0140 D0145 D0150 D0160 D0170 D0180 D0372 D0373 D0374 D0387 D0388 D0389 D0415 D0600 D0606 D4910 D4920 D9995 D9996"
            ],
            "percent": "100",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "periodontics",
            "disclaimers": [
                "D4346",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "100",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "periodontics",
            "disclaimers": [
                "D3428 D3429 D3431 D3432 D4210 D4211 D4212 D4240 D4241 D4245 D4249 D4260 D4261 D4263 D4264 D4265 D4266 D4267 D4268 D4270 D4271 D4273 D4274 D4275 D4276 D4277 D4278 D4283 D4285 D4286 D4341 D4342 D4355 D4381",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "periodontics",
            "disclaimers": [
                "D4346"
            ],
            "percent": "100",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "periodontics",
            "disclaimers": [
                "D3428 D3429 D3431 D3432 D4210 D4211 D4212 D4240 D4241 D4245 D4249 D4260 D4261 D4263 D4264 D4265 D4266 D4267 D4268 D4270 D4271 D4273 D4274 D4275 D4276 D4277 D4278 D4283 D4285 D4286 D4341 D4342 D4355 D4381"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "restorative",
            "disclaimers": [
                "D2140 D2150 D2160 D2161 D2330 D2331 D2332 D2335 D2391 D2392 D2393 D2394 D2910 D2915 D2940 D2941 D2951 D2976 D2989 D2991 D5725",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "restorative",
            "disclaimers": [
                "D2410 D2420 D2430 D2510 D2520 D2530 D2542 D2543 D2544 D2610 D2620 D2630 D2642 D2643 D2644 D2650 D2651 D2652 D2662 D2663 D2664 D2949 D5227 D5228",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "50",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "restorative",
            "disclaimers": [
                "D2140 D2150 D2160 D2161 D2330 D2331 D2332 D2335 D2391 D2392 D2393 D2394 D2910 D2915 D2940 D2941 D2951 D2976 D2989 D2991 D5725"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "restorative",
            "disclaimers": [
                "D2410 D2420 D2430 D2510 D2520 D2530 D2542 D2543 D2544 D2610 D2620 D2630 D2642 D2643 D2644 D2650 D2651 D2652 D2662 D2663 D2664 D2949 D5227 D5228"
            ],
            "percent": "50",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "endodontics",
            "disclaimers": [
                "D3110 D3120 D3220 D3221 D3230 D3240 D3310 D3320 D3330 D3331 D3332 D3333 D3346 D3347 D3348 D3351 D3352 D3353 D3355 D3356 D3357 D3410 D3421 D3425 D3426 D3427 D3430 D3450 D3471 D3472 D3473 D3501 D3502 D3503 D3911 D3920 D3921 D3950",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "endodontics",
            "disclaimers": [
                "D3110 D3120 D3220 D3221 D3230 D3240 D3310 D3320 D3330 D3331 D3332 D3333 D3346 D3347 D3348 D3351 D3352 D3353 D3355 D3356 D3357 D3410 D3421 D3425 D3426 D3427 D3430 D3450 D3471 D3472 D3473 D3501 D3502 D3503 D3911 D3920 D3921 D3950"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "adjunctive_dental_services",
            "disclaimers": [
                "D9110 D9912",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "100",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "adjunctive_dental_services",
            "disclaimers": [
                "D9910 D9911 D9930 D9942 D9943 D9944 D9945 D9946 D9950 D9951 D9952",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "adjunctive_dental_services",
            "disclaimers": [
                "D9938 D9939 D9940 D9947 D9948 D9949 D9954 D9955 D9956 D9957 D9959",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "50",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "adjunctive_dental_services",
            "disclaimers": [
                "D9110 D9912"
            ],
            "percent": "100",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "adjunctive_dental_services",
            "disclaimers": [
                "D9910 D9911 D9930 D9942 D9943 D9944 D9945 D9946 D9950 D9951 D9952"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "adjunctive_dental_services",
            "disclaimers": [
                "D9938 D9939 D9940 D9947 D9948 D9949 D9954 D9955 D9956 D9957 D9959"
            ],
            "percent": "50",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "dental_crowns",
            "disclaimers": [
                "D2920 D2980",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "dental_crowns",
            "disclaimers": [
                "D2710 D2712 D2720 D2721 D2722 D2740 D2750 D2751 D2752 D2753 D2780 D2781 D2782 D2783 D2790 D2791 D2792 D2794 D2799 D2928 D2929 D2930 D2931 D2932 D2933 D2934 D2950 D2952 D2953 D2954 D2957 D2960 D2961 D2962 D2970 D2971 D2975 D5863 D5864 D5865 D5866 D6085",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "50",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "dental_crowns",
            "disclaimers": [
                "D2920 D2980"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "dental_crowns",
            "disclaimers": [
                "D2710 D2712 D2720 D2721 D2722 D2740 D2750 D2751 D2752 D2753 D2780 D2781 D2782 D2783 D2790 D2791 D2792 D2794 D2799 D2928 D2929 D2930 D2931 D2932 D2933 D2934 D2950 D2952 D2953 D2954 D2957 D2960 D2961 D2962 D2970 D2971 D2975 D5863 D5864 D5865 D5866 D6085"
            ],
            "percent": "50",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "prosthodontics",
            "disclaimers": [
                "D5410 D5411 D5421 D5422 D5510 D5511 D5512 D5520 D5610 D5611 D5612 D5620 D5621 D5622 D5630 D5640 D5650 D5660 D5670 D5671 D5710 D5711 D5720 D5721 D5730 D5731 D5740 D5741 D5750 D5751 D5760 D5761 D5765 D5850 D5851 D6930 D6980 D9120",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "prosthodontics",
            "disclaimers": [
                "D5110 D5120 D5130 D5140 D5211 D5212 D5213 D5214 D5221 D5222 D5223 D5224 D5225 D5226 D5281 D5282 D5283 D5284 D5286 D5810 D5811 D5820 D5821 D5860 D5861 D5876 D5999 D6053 D6054 D6058 D6059 D6060 D6061 D6062 D6063 D6064 D6065 D6066 D6067 D6068 D6069 D6070 D6071 D6072",
                "D6073 D6074 D6075 D6076 D6077 D6078 D6079 D6082 D6083 D6084 D6086 D6087 D6088 D6089 D6090 D6092 D6093 D6094 D6096 D6097 D6098 D6099 D6110 D6111 D6112 D6113 D6114 D6115 D6116 D6117 D6118 D6119 D6120 D6121 D6122 D6123 D6193 D6194 D6195 D6197 D6198 D6205 D6210 D6211",
                "D6212 D6214 D6240 D6241 D6242 D6243 D6245 D6250 D6251 D6252 D6545 D6548 D6549 D6600 D6601 D6602 D6603 D6604 D6605 D6606 D6607 D6608 D6609 D6610 D6611 D6612 D6613 D6614 D6615 D6624 D6634 D6710 D6720 D6721 D6722 D6740 D6750 D6751 D6752 D6753 D6780 D6781 D6782 D6783",
                "D6784 D6790 D6791 D6792 D6793 D6794 D6795 D6970 D6972 D6973 D6975 D6976 D6977",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "50",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "prosthodontics",
            "disclaimers": [
                "D5410 D5411 D5421 D5422 D5510 D5511 D5512 D5520 D5610 D5611 D5612 D5620 D5621 D5622 D5630 D5640 D5650 D5660 D5670 D5671 D5710 D5711 D5720 D5721 D5730 D5731 D5740 D5741 D5750 D5751 D5760 D5761 D5765 D5850 D5851 D6930 D6980 D9120"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "prosthodontics",
            "disclaimers": [
                "D5110 D5120 D5130 D5140 D5211 D5212 D5213 D5214 D5221 D5222 D5223 D5224 D5225 D5226 D5281 D5282 D5283 D5284 D5286 D5810 D5811 D5820 D5821 D5860 D5861 D5876 D5999 D6053 D6054 D6058 D6059 D6060 D6061 D6062 D6063 D6064 D6065 D6066 D6067 D6068 D6069 D6070 D6071 D6072",
                "D6073 D6074 D6075 D6076 D6077 D6078 D6079 D6082 D6083 D6084 D6086 D6087 D6088 D6089 D6090 D6092 D6093 D6094 D6096 D6097 D6098 D6099 D6110 D6111 D6112 D6113 D6114 D6115 D6116 D6117 D6118 D6119 D6120 D6121 D6122 D6123 D6193 D6194 D6195 D6197 D6198 D6205 D6210 D6211",
                "D6212 D6214 D6240 D6241 D6242 D6243 D6245 D6250 D6251 D6252 D6545 D6548 D6549 D6600 D6601 D6602 D6603 D6604 D6605 D6606 D6607 D6608 D6609 D6610 D6611 D6612 D6613 D6614 D6615 D6624 D6634 D6710 D6720 D6721 D6722 D6740 D6750 D6751 D6752 D6753 D6780 D6781 D6782 D6783",
                "D6784 D6790 D6791 D6792 D6793 D6794 D6795 D6970 D6972 D6973 D6975 D6976 D6977"
            ],
            "percent": "50",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "diagnostic_x_ray",
            "disclaimers": [
                "D0210 D0220 D0230 D0240 D0251 D0270 D0272 D0273 D0274 D0277 D0330 D0391 D0701 D0705 D0706 D0707 D0708 D0709",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "100",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "diagnostic_x_ray",
            "disclaimers": [
                "D0210 D0220 D0230 D0240 D0251 D0270 D0272 D0273 D0274 D0277 D0330 D0391 D0701 D0705 D0706 D0707 D0708 D0709"
            ],
            "percent": "100",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "oral_surgery",
            "disclaimers": [
                "D7111 D7140 D7210 D7250 D7251 D7252 D7261 D7270 D7272 D7280 D7282 D7285 D7286 D7288 D7290 D7310 D7311 D7320 D7321 D7340 D7350 D7410 D7411 D7412 D7413 D7414 D7415 D7440 D7441 D7450 D7451 D7465 D7471 D7472 D7473 D7485 D7490 D7510 D7511 D7520 D7521 D7550 D7560 D7950",
                "D7951 D7952 D7960 D7961 D7963 D7970 D7971 D7972 D7995 D7996",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "oral_surgery",
            "disclaimers": [
                "D7220 D7230 D7240 D7241",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "50",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "oral_surgery",
            "disclaimers": [
                "D7111 D7140 D7210 D7250 D7251 D7252 D7261 D7270 D7272 D7280 D7282 D7285 D7286 D7288 D7290 D7310 D7311 D7320 D7321 D7340 D7350 D7410 D7411 D7412 D7413 D7414 D7415 D7440 D7441 D7450 D7451 D7465 D7471 D7472 D7473 D7485 D7490 D7510 D7511 D7520 D7521 D7550 D7560 D7950",
                "D7951 D7952 D7960 D7961 D7963 D7970 D7971 D7972 D7995 D7996"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "oral_surgery",
            "disclaimers": [
                "D7220 D7230 D7240 D7241"
            ],
            "percent": "50",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "preventive",
            "disclaimers": [
                "D1110 D1555 D1556 D1557 D1558 D1701 D1702 D1703 D1704 D1705 D1706 D1707 D1708 D1709 D1710 D1711 D1712 D1713 D1714 D1781 D1782 D1783",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "100",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "preventive",
            "disclaimers": [
                "D1354 D1355 D1550 D1551 D1552 D1553",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "preventive",
            "disclaimers": [
                "D1110 D1555 D1556 D1557 D1558 D1701 D1702 D1703 D1704 D1705 D1706 D1707 D1708 D1709 D1710 D1711 D1712 D1713 D1714 D1781 D1782 D1783"
            ],
            "percent": "100",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "preventive",
            "disclaimers": [
                "D1354 D1355 D1550 D1551 D1552 D1553"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "out_of_network"
        },
        {
            "service_type": "anesthesia",
            "disclaimers": [
                "D9220 D9221 D9222 D9223 D9239 D9241 D9242 D9243",
                "TOTAL",
                "NO NETWORK"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "in_network"
        },
        {
            "service_type": "anesthesia",
            "disclaimers": [
                "D9220 D9221 D9222 D9223 D9239 D9241 D9242 D9243"
            ],
            "percent": "80",
            "coverage_level": "individual",
            "network": "out_of_network"
        }
    ],
    "active_coverage": [
        {
            "service_type": "health_benefit_plan_coverage",
            "insurance_type": "ppo",
            "payer_specific_description": "Dental PPO"
        },
        {
            "service_type": "dental_care"
        },
        {
            "service_type": "diagnostic_dental",
            "network": "applies_all"
        },
        {
            "service_type": "periodontics",
            "network": "applies_all"
        },
        {
            "service_type": "restorative",
            "network": "applies_all"
        },
        {
            "service_type": "endodontics",
            "network": "applies_all"
        },
        {
            "service_type": "adjunctive_dental_services",
            "network": "applies_all"
        },
        {
            "service_type": "dental_crowns",
            "network": "applies_all"
        },
        {
            "service_type": "prosthodontics",
            "network": "applies_all"
        },
        {
            "service_type": "diagnostic_x_ray",
            "network": "applies_all"
        },
        {
            "service_type": "oral_surgery",
            "network": "applies_all"
        },
        {
            "service_type": "preventive",
            "network": "applies_all"
        },
        {
            "service_type": "anesthesia",
            "network": "applies_all"
        }
    ],
    "not_covered": [
        {
            "service_type": "maxillofacial_prosthetics",
            "network": "applies_all"
        },
        {
            "service_type": "orthodontics",
            "network": "applies_all"
        }
    ]
}
        const result = formatDataParser(data,type);
        res.status(200).json(result);

    }
    catch (error : any){
        res.status(500).json({error : error.message});
    }
}