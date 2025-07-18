import { TransformerFactory } from "../utils/TransformerFactory";

export const formatDataParser = (data: any,): any => {
   try {
     const transformer = TransformerFactory.create();
    return transformer.transform(data);
   } catch (error) {
        console.error(error);
        return;
   }
}