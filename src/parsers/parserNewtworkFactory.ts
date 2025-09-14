import { error } from "console";
import parserNetworkRegistry from "./parserNetworkRegistry";

const networkParser = (
  data: any,
  network: string,
  onederfulPayerId: string,
  formPayload: any
) => {
  const parserClass = parserNetworkRegistry[network];
  if (!parserClass)
    throw new Error(`No parser class is avaible for  ${network}`);
  return new parserClass(data, onederfulPayerId, formPayload);
};

export default networkParser;
