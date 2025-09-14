// Test file for ProcCodeQuestionsParser
import { ProcCodeQuestionsParser } from './parsers/Component-wise parser/procCodeQuestionsParser';
import * as fs from 'fs';
import * as path from 'path';

// Read demo data
const demoDataPath = path.join(__dirname, '../../Demodata.json');
const demoData = JSON.parse(fs.readFileSync(demoDataPath, 'utf8'));

// Test the parser
const parser = new ProcCodeQuestionsParser(demoData);
const result = parser.parse();

console.log('ProcCodeQuestionsParser Test Results:');
console.log('=====================================');

// Test some key fields
console.log('D1110 (Prophy):');
console.log('  Coinsurance:', result.d1110.prophcv);
console.log('  Frequency Unit:', result.d1110.frequency_unit);

console.log('D0272 (Bitewings):');
console.log('  Coinsurance:', result.d0272.bitwingcv);
console.log('  Frequency Unit:', result.d0272.frequency_unit);

console.log('D0210 (FMX):');
console.log('  Coinsurance:', result.d0210.fmxcv);
console.log('  Frequency Unit:', result.d0210.frequency_unit);

console.log('D1206 (Fluoride):');
console.log('  Coinsurance:', result.d1206.fluoridecv);
console.log('  Age Limit:', result.d1206.age_limit);

console.log('FMX/Pano Shared:', result.fmxpanoshared);

console.log('\nParser completed successfully!');
