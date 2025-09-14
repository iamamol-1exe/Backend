import InNetworkParser from "./InNetworkParser";
import OutOfNetworkPraser from "./OutOfNetworkPraser";

const parserNetworkRegistry: { [key: string]: any } = {
  OUT_OF_NETWORK: OutOfNetworkPraser,
  IN_NETWORK: InNetworkParser,
};

export default parserNetworkRegistry;
