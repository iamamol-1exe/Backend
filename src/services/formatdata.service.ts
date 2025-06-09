import  DataProcessor  from '../utils/dataProcessor';
interface MappingRule {
  path: string;
  default: any;
}
type MappingSchema = Record<string, MappingRule>;

export const formatDataService = async (data: any, schema: MappingSchema): Promise<Record<string, any>> => {
  const processor = new DataProcessor(schema);
  processor.setData(data);
  processor.processInChunks();
  return processor.getProcessedData();
};
