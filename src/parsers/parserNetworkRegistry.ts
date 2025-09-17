import InNetworkParser from "./InNetworkParser";
import OutOfNetworkParser from "./OutOfNetworkParser";

const parserNetworkRegistry: { [key: string]: any } = {
  OUT_OF_NETWORK: OutOfNetworkParser,
  IN_NETWORK: InNetworkParser,
};

export default parserNetworkRegistry;
