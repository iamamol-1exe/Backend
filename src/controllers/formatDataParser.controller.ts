import { Request, Response } from 'express';
import { formatDataParser } from '../services/formatDataParser.service';

export const formatDataParser1 = (req :Request,res : Response) => {
    try {
        const data ={
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
       }; 
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

export const  formatDataParser3 = (req : Request,res :Response) =>{
    try{ 
        const type = "patient3";
        const data = {
    "onederfulId": "8cd60450-4223-11f0-bf99-2ff188113c5c",
    "patient": {
        "name": "VICKIE A RIVERS",
        "first_name": "VICKIE",
        "gender": "female",
        "middle_name": "A",
        "last_name": "RIVERS",
        "age": "71",
        "dob": "07/29/1953",
        "member_id": "989393288",
        "address": {
            "street1": "667 OLD DOVER RD",
            "city": "MORRIS PLAINS",
            "zip": "07950",
            "state": "NJ"
        },
        "coverage": {
            "effective_date": "01/01/2025",
            "end_date": "12/31/2025",
            "status": "active"
        },
        "is_subscriber": false,
        "metadata": [
            {
                "type": "plan_begin",
                "value": "01/01/2025-12/31/2025",
                "plan_begin": "01/01/2025-12/31/2025"
            }
        ]
    },
    "plan": {
        "group_number": "1500980",
        "number": "1500980",
        "insurance_type": "ppo",
        "payer_specific_description": "UHC DENTAL D0035137 (53116)",
        "metadata": [
            {
                "value": "1500980",
                "qualifier": "group_number"
            }
        ]
    },
    "subscriber": {
        "name": "VICKIE A RIVERS",
        "first_name": "VICKIE",
        "gender": "female",
        "middle_name": "A",
        "last_name": "RIVERS",
        "age": "71",
        "dob": "07/29/1953",
        "member_id": "989393288",
        "address": {
            "street1": "667 OLD DOVER RD",
            "city": "MORRIS PLAINS",
            "zip": "07950",
            "state": "NJ"
        },
        "coverage": {
            "effective_date": "01/01/2025",
            "end_date": "12/31/2025",
            "status": "active"
        },
        "is_subscriber": false,
        "metadata": [
            {
                "type": "plan_begin",
                "value": "01/01/2025-12/31/2025",
                "plan_begin": "01/01/2025-12/31/2025"
            }
        ]
    },
    "payer": {
        "id": "52133",
        "name": "UNITEDHEALTHCARE DENTAL",
        "received_id": "52133"
    },
    "provider": {
        "npi": "1841787769",
        "tax_id": "043212345",
        "first_name": "AZADEH",
        "last_name": "DIANAT"
    },
    "limitations": [
        {
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D0120",
            "quantity": "2",
            "quantity_qualifier": "visits"
        },
        {
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D0150",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "years",
                    "time_period_value": "3"
                }
            ],
            "limitation": "1 visits in 3 years"
        },
        {
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D0210",
            "health_service_descriptions": [
                {
                    "quantity_qualifier": "visits",
                    "quantity": "1",
                    "time_period_qualifier": "years",
                    "time_period_value": "3"
                }
            ],
            "limitation": "1 visits in 3 years"
        },
        {
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D0274",
            "quantity": "1",
            "quantity_qualifier": "visits"
        },
        {
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D1110",
            "quantity": "2",
            "quantity_qualifier": "visits"
        },
        {
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D1208",
            "quantity": "2",
            "quantity_qualifier": "visits"
        },
        {
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D4910",
            "quantity": "3",
            "quantity_qualifier": "visits"
        }
    ],
    "deductible": [
        {
            "service_type": "health_benefit_plan_coverage",
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "plan_period": "year_to_date",
            "amount": "0.00",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "plan_period": "year_to_date",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "plan_period": "remaining",
            "amount": "0.00",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "plan_period": "remaining",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0120"
        },
        {
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D0120"
        },
        {
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0150"
        },
        {
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D0150"
        },
        {
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0210"
        },
        {
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D0210"
        },
        {
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D0274"
        },
        {
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D0274"
        },
        {
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D1110"
        },
        {
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D1110"
        },
        {
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D1208"
        },
        {
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D1208"
        },
        {
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "family",
            "network": "applies_all",
            "procedure_code": "AD:D4910"
        },
        {
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D4910"
        },
        {
            "service_type": "diagnostic_dental",
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "preventive",
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "diagnostic_dental",
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "preventive",
            "disclaimers": [
                "PLAN LEVEL DEDUCTIBLE DOES NOT APPLY"
            ],
            "amount": "0.00",
            "coverage_level": "family",
            "network": "applies_all"
        }
    ],
    "coinsurance": [
        {
            "percent": "100",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D0120"
        },
        {
            "percent": "100",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D0150"
        },
        {
            "percent": "100",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D0210"
        },
        {
            "percent": "100",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D0274"
        },
        {
            "percent": "100",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D1110"
        },
        {
            "percent": "100",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D1208"
        },
        {
            "percent": "100",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D4910"
        },
        {
            "service_type": "diagnostic_dental",
            "percent": "100",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "preventive",
            "percent": "100",
            "coverage_level": "individual",
            "network": "applies_all"
        }
    ],
    "active_coverage": [
        {
            "service_type": "health_benefit_plan_coverage",
            "insurance_type": "ppo",
            "payer_specific_description": "UHC DENTAL D0035137 (53116) - UNITEDHEALTHCARE SPECIALTY BENEFITS DENTAL"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D0120"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D0150"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D0210"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D0274"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D1110"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D1208"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D4910"
        },
        {
            "service_type": "diagnostic_dental",
            "network": "applies_all"
        },
        {
            "service_type": "preventive",
            "network": "applies_all"
        }
    ],
    "not_covered": [
        {
            "network": "applies_all",
            "procedure_code": "AD:D1351"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D2393"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D2630"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D2643"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D2750"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D2950"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D2954"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D4341"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D4381"
        },
        {
            "disclaimers": [
                "PRIOR EXTRACTIONS NOT COVERED"
            ],
            "network": "applies_all",
            "procedure_code": "AD:D5110"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D5225"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D5670"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D5751"
        },
        {
            "disclaimers": [
                "PRIOR EXTRACTIONS NOT COVERED"
            ],
            "network": "applies_all",
            "procedure_code": "AD:D6010"
        },
        {
            "disclaimers": [
                "PRIOR EXTRACTIONS NOT COVERED"
            ],
            "network": "applies_all",
            "procedure_code": "AD:D6750"
        },
        {
            "network": "applies_all",
            "procedure_code": "AD:D9910"
        },
        {
            "service_type": "restorative",
            "disclaimers": [
                "BENEFIT CLASS = MAJOR"
            ],
            "network": "applies_all"
        },
        {
            "service_type": "periodontics",
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
            "service_type": "orthodontics",
            "network": "applies_all"
        },
        {
            "service_type": "prosthodontics",
            "network": "applies_all"
        },
        {
            "service_type": "oral_surgery",
            "network": "applies_all"
        }
    ],
    "copayment": [
        {
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D0120"
        },
        {
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D0150"
        },
        {
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D0210"
        },
        {
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D0274"
        },
        {
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D1110"
        },
        {
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D1208"
        },
        {
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all",
            "procedure_code": "AD:D4910"
        },
        {
            "service_type": "diagnostic_dental",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "preventive",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all"
        }
    ],
    "out_of_pocket": [
        {
            "service_type": "health_benefit_plan_coverage",
            "insurance_type": "ppo",
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "insurance_type": "ppo",
            "plan_period": "calendar",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "insurance_type": "ppo",
            "plan_period": "year_to_date",
            "amount": "0.00",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "insurance_type": "ppo",
            "plan_period": "year_to_date",
            "amount": "0.00",
            "coverage_level": "individual",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "insurance_type": "ppo",
            "plan_period": "remaining",
            "amount": "0.00",
            "coverage_level": "family",
            "network": "applies_all"
        },
        {
            "service_type": "health_benefit_plan_coverage",
            "insurance_type": "ppo",
            "plan_period": "remaining",
            "amount": "0.00",
            "coverage_level": "individual",
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