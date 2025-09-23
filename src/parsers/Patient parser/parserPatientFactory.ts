import AetnaParser from "./AtenaParser";
import parserRegistry from "./parserPatientRegistry";

const createPatientParser = (data: any, provider: string, network: string) => {
  let ParserClass = parserRegistry[provider];
  if (!ParserClass) {
    ParserClass = AetnaParser;
    console.log("default class is applied for patient parser");
  }
  return new ParserClass(data, network);
};

export default createPatientParser;
