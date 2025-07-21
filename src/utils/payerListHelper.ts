import { PayerData } from "../interface/PayerData";
import fs from 'fs'
import path from "path";

const loadData =() : PayerData[] =>{
        const datapath = path.resolve(__dirname, "../data/payers.json");
        const rawData = fs.readFileSync(datapath,"utf8")
        return  JSON.parse(rawData) as PayerData[];
};


export const getOnederfulPayerId =(identifier : string) : string | null =>{
    const PayerData = loadData();
    for(const provider of PayerData){
        if(provider.id === identifier){
            return provider.onederfulPayerId;
        }
        if(provider.alt_payer_ids.includes(identifier)){
            return provider.onederfulPayerId;
        }

    }
    return null;
};
