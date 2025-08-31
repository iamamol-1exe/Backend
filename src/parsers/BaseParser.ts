import { FormioData } from "../utils/formioDataMapper";

export default abstract class BaseParser {
  protected data: any;
  protected onederfulPayerId: string;
  protected formDataIO: FormioData;

  constructor(data: any, onederfulPayerId: string, formDataIO: FormioData) {
    this.data = data;
    this.onederfulPayerId = onederfulPayerId;
    this.formDataIO = formDataIO;
  }
  // this method will return parsed data result
  abstract parseTicketData(): any;
  abstract parseOrtho(): any;
  abstract parseToResultFormat(): any;
}
