import AetnaParser from "./parsers/AtenaParser";


const parserRegistry : {[key : string] :any } = {
    aetna_dental_plans  : AetnaParser,
    dd_california : AetnaParser
}

export default parserRegistry;
