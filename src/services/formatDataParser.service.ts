import { TransformerFactory } from "../utils/TransformerFactory";

export const formatDataParser = (data: any,): any => {
    const transformer = TransformerFactory.create();
    return transformer.transform(data);
}