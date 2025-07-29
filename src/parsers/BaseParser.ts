export default abstract class BaseParser {
  protected data: any;

  constructor(data : any) {
    this.data = data;
  }
  abstract parsePatient(): any;
  abstract parseProvider(): any;
  abstract parsePlan(): any;
  abstract parseBalance() : any;
  abstract parseToResultFormat () : any;
}
