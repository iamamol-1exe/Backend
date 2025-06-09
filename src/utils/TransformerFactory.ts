import { schema1 } from "./schema1";
import { schema2 } from "./schema2";
import { JsonTransformer } from "./parser";

export type PatientType = "patient" | "patient2";

export class TransformerFactory {
  static create(type: PatientType): JsonTransformer {
    switch (type) {
      case "patient":
         return new JsonTransformer(schema1);
      case "patient2":
        return new JsonTransformer(schema2);
      default:
        throw new Error("Unknown transformer type");
    }
  }
}