import parserRegistry from "./parserRegistry";



const createParser =(data :any, provider : string) =>{
    const ParserClass = parserRegistry[provider];
    if(!ParserClass){
        throw new Error(`No parser class is avaible ${provider}`);
    }
   return new ParserClass(data);
    
}


export default createParser;