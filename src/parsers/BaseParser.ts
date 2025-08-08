export default abstract class BaseParser {
  protected data: any;
  protected onederfulPayerId: string;

  constructor(data: any, onederfulPayerId: string) {
    this.data = data;
    this.onederfulPayerId = onederfulPayerId;
  }
  // this method will return parsed data result
  abstract parseTicketData(): any;
  abstract parseOrtho(): any;
  abstract parseToResultFormat(): any;
}
