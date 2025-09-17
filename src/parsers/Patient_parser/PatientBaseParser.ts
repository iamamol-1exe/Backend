/**
 * Abstract base class for parsing patient-related data.
 * This class serves as a blueprint for creating parsers that handle
 * patient, provider, plan, balance, and result formatting sections
 * from the data received from the Eligibility API.
 *
 * @abstract
 */

export default abstract class PatientBaseParser {
  /**
   * The raw data received from the Eligibility API.
   * This data will be processed and parsed by the implementing class.
   */
  protected data: any;
  protected network: string;

  /**
   * Initializes the parser with the raw data.
   *
   * @param data - The raw data received from the Eligibility API.
   */
  constructor(data: any, network: string) {
    this.data = data;
    this.network = network;
  }

  /**
   * Parses the patient section of the data.
   * This method must be implemented by subclasses to extract and process
   * patient-specific information.
   *
   * @returns The parsed patient data.
   */
  abstract parsePatient(): any;

  /**
   * Parses the provider section of the data.
   * This method must be implemented by subclasses to extract and process
   * provider-specific information.
   *
   * @returns The parsed provider data.
   */
  abstract parseProvider(): any;

  /**
   * Parses the plan section of the data.
   * This method must be implemented by subclasses to extract and process
   * plan-specific information.
   *
   * @returns The parsed plan data.
   */
  abstract parsePlan(): any;

  /**
   * Parses the balance section of the data.
   * This method must be implemented by subclasses to extract and process
   * balance-specific information.
   *
   * @returns The parsed balance data.
   */
  abstract parseBalance(): any;

  /**
   * Converts the parsed data into a standardized result format.
   * This method must be implemented by subclasses to ensure the parsed
   * data is returned in a consistent and usable format.
   *
   * @returns The data formatted into the desired result structure.
   */
  abstract parseToResultFormat(): any;
}
