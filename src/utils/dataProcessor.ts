import { formatData} from './formatData'
interface MappingRule {
  path: string;
  default: any;
}

type MappingSchema = Record<string, MappingRule>;

class DataProcessor {
    private data: Record<string, any>;  // Updated type
    private schema: MappingSchema;
    private chunkSize: number;
    private processedData: Record<string, any>;  // Updated type

    constructor(schema: MappingSchema, chunkSize: number = 1000) {
        this.data = {};
        this.schema = schema;
        this.chunkSize = chunkSize;
        this.processedData = {};
    }

    public setData(data: Record<string, any>): void {  // Updated type
        this.data = data;
    }

    public processInChunks(): void {
        // Convert object keys into array for chunking
        const keys = Object.keys(this.data);
        
        for (let i = 0; i < keys.length; i += this.chunkSize) {
            // Get chunk of keys
            const chunkKeys = keys.slice(i, i + this.chunkSize);
            
            // Create chunk object from selected keys
            const chunk = chunkKeys.reduce<Record<string, any>>((acc, key) => {  // Added type annotation
                acc[key] = this.data[key];
                return acc;
            }, {});

            // Format chunk
            const formattedChunk = formatData(chunk, this.schema);
            
            // Merge formatted chunk into processed data
            this.processedData = {
                ...this.processedData,
                ...formattedChunk
            };
        }
    }

    public getProcessedData(): Record<string, any> {  // Updated return type
        return this.processedData;
    }

    public getProcessedCount(): number {
        return Object.keys(this.processedData).length;
    }
}

export default DataProcessor;
