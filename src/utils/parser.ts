// // old logic for dataparsing


// import { FieldMapping } from "../types/fieldmapping";

// export class Parser {
//   private input: any;

//   constructor(input: any) {
//     this.input = input;
//   }

//   getValue(path: string | string[]): any {
//     if (Array.isArray(path)) {
//       // Try each path in the array until a value is found
//       for (const p of path) {
//         const value = this.getValueFromPath(p);
//         if (value !== undefined) {
//           return value;
//         }
//       }
//       return undefined;
//     }
//     return this.getValueFromPath(path);
//   }

//   private getValueFromPath(path: string): any {
//     if (!path) return undefined;

//     // Handle concatenation with '+'
//     if (path.includes("+")) {
//       const parts = path.split("+").map((p) => p.trim());
//       return parts
//         .map((p) => this.getValueFromPath(p))
//         .filter((v) => v !== undefined)
//         .join(" ");
//     }

//     const keys = path.split(".");
//     let current = this.input;
//     for (const key of keys) {
//       if (current == null) return undefined;
//       current = current[key];
//     }
//     return current;
//   }

//   getArray(path: string): any[] {
//     const value = this.getValue(path);
//     return Array.isArray(value) ? value : [];
//   }
// }

// export class JsonTransformer {
//   private mapping: { [key: string]: FieldMapping };

//   constructor(mapping: { [key: string]: FieldMapping }) {
//     this.mapping = mapping;
//   }

//   public transform(input: any): any {
//     const parser = new Parser(input);
//     return this.buildObject(parser, this.mapping);
//   }

//   private buildObject(
//     parser: Parser,
//     mapping: { [key: string]: FieldMapping }
//   ): any {
//     const result: any = {};

//     for (const key in mapping) {
//       const field = mapping[key];
//       const value = parser.getValue(field.path);
//       result[key] = value !== undefined ? value : field.default;
//     }

//     return result;
//   }
// }
