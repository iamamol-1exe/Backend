import { TransformerFactory, PatientType } from "../utils/TransformerFactory";

export const formatDataParser = (data: any, type: PatientType): any => {
    const transformer = TransformerFactory.create(type);
    return transformer.transform(data);
}