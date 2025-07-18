import { schema1 } from "./schema1";
import { JsonTransformer } from "./parser";

// input data types 


export class TransformerFactory {
  static create(): JsonTransformer {
   return new JsonTransformer(schema1);
  }
}