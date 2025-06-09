import { schema1 } from "./schema1";
import { schema2 } from "./schema2";
import { JsonTransformer } from "./parser";
import { schema3 } from "./schema3";
// input data types 
export type PatientType = "patient" | "patient2" | "patient3";

export class TransformerFactory {
  static create(type: PatientType): JsonTransformer {
    switch (type) {
      case "patient":
         return new JsonTransformer(schema1);
      case "patient2":
        return new JsonTransformer(schema2);
      case "patient3":
        return new JsonTransformer(schema3);
      default:
        throw new Error("Unknown transformer type");
    }
  }
}