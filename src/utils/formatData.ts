
// infetface for the mapping rule basic structure

interface MappingRule {
  path: string;
  default: any;
}

type MappingSchema = Record<string, MappingRule>;

// function takes the input as path and input object
// and returns the value at that path in 
function getValueByPath(obj: any, path: string): any {
  return path.split('.').reduce((acc, key) => {

    const match = key.match(/^(\w+)\[(\d+)]$/);
    if (match) {
      const arrayKey = match[1];
      const index = parseInt(match[2], 10);
      return acc?.[arrayKey]?.[index];
    }
    return acc?.[key];
  }, obj);
}

// main function fomats data based on the Provided Schema
export function formatData(input: any, schema: MappingSchema): Record<string, any> {
  const result: Record<string, any> = {};

 // iterrates over the Schema and get path and find is value in the input object
  for (const targetField of Object.keys(schema)) {
    const rule = schema[targetField];
    const value = getValueByPath(input, rule.path);
    result[targetField] = value !== undefined && value !== null ? value : rule.default;
  }

  return result;
  // return the formameted data
}
