export default abstract class BaseParser {
    protected data : any ;
    protected onederfulPayerId : string;


    constructor(data : any,onederfulPayerId: string){
        this.data = data;
        this.onederfulPayerId = onederfulPayerId;
    }
    
    abstract parseToResultFormat () : any;

}