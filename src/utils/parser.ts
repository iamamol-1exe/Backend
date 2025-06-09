// File: types.ts
export interface FieldMapping {
  path: string;
  default: any;
}

// File: Parser.ts
export class Parser {
  private input: any;

  constructor(input: any) {
    this.input = input;
  }

  getValue(path: string): any {
    const keys = path.split(".");
    let current = this.input;
    for (const key of keys) {
      if (current == null) return undefined;
      current = current[key];
    }
    return current;
  }

  getArray(path: string): any[] {
    const value = this.getValue(path);
    return Array.isArray(value) ? value : [];
  }
}


export class JsonTransformer {
  private mapping: { [key: string]: FieldMapping };

  constructor(mapping: { [key: string]: FieldMapping }) {
    this.mapping = mapping;
  }

  public transform(input: any): any {
    const parser = new Parser(input);
    return this.buildObject(parser, this.mapping);
  }

  private buildObject(parser: Parser, mapping: { [key: string]: FieldMapping }): any {
    const result: any = {};

    for (const key in mapping) {
      const field = mapping[key];

      result[key] = parser.getValue(field.path) !== undefined
        ? parser.getValue(field.path)
        : field.default;
    }

    return result;
  }
}