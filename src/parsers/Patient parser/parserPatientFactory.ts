import parserRegistry from "./parserPatientRegistry";


const createPatientParser = (data: any, provider: string, network: string) => {
  const ParserClass = parserRegistry[provider];
  if (!ParserClass) {
    throw new Error(`No parser class is avaible for  ${provider}`);
  }
  return new ParserClass(data, network);
};

export default createPatientParser;
