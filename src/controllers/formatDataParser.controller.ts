import { Request, Response } from 'express';
import { formatDataParser } from '../services/formatDataParser.service';
import axios, { AxiosResponse } from 'axios';


export const formatDataParser1 = async (req :Request,res : Response) => {
    try {
        const url : any = process.env.URL;
        const {payload,token} = req.body;
        console.log(payload)
        
        const response = await axios.post(url,payload,{
            headers : {
                "Authorization" : `Bearer ${token}`
            },
        })
        // console.log(response.data)
        const data = response.data;
        const result = await formatDataParser(data);
        res.status(200).json(result);

    } catch (error : any) {
        
    }
}


