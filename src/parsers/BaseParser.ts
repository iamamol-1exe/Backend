export default abstract class BaseParser {
  protected data: any;

  constructor(data : any) {
    this.data = data;
  }
  abstract parsePatient(): any;
  abstract parseProvider(): any;
  abstract parsePlan(): any;
  abstract parseDeductibles(): any;
  abstract parseMaximums(): any;
  abstract parseCoinsurances(): any;
  abstract parseLimitations(): any;
  
  parse() {
    return {
      patient: this.parsePatient(),
      provider: this.parseProvider(),
      plan: this.parsePlan(),
      deductibles: this.parseDeductibles(),
      maximums: this.parseMaximums(),
      coinsurances: this.parseCoinsurances(),
      limitations: this.parseLimitations(),
    };
  }
}
