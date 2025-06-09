import { Request, Response } from 'express';
import {formatDataService} from '../services/formatdata.service';
import { schema1 } from '../utils/schema1';


 const data1ToResult =async (req :Request,res:Response)=>{
    const data1 = {
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
    // Perform some transformation or processing on data1
    const result = await  formatDataService(data1, schema1);
    res.json(result);
}


export default data1ToResult;