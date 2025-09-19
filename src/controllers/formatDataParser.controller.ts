import { Request, response, Response } from "express";
import axios from "axios";
import { HttpResponse } from "../utils/responseUtils";
import { getOnederfulPayerId } from "../utils/payerListHelper";
import { getAuthToken, getTokenFromRedis } from "../services/authToken.service";
import InNetworkParser from "../parsers/InNetworkParser";
import fs from "fs";
import OutOfNetworkPraser from "../parsers/OutOfNetworkPraser";
import networkParser from "../parsers/parserNewtworkFactory";

/**
 * Handles the parsing of formatted data by interacting with external services and utilities.
 *
 * This controller function performs the following steps:
 * 1. Retrieves the URL from environment variables.
 * 2. Extracts the payload from the request body.
 * 3. Obtains an authentication token, either from Redis or by generating a new one.
 * 4. Identifies the payer ID from the payload and maps it to a corresponding Onederful payer ID.
 * 5. Validates the existence of the Onederful payer ID and returns an error response if not found.
 * 6. Sends a POST request to an external service with the payload and authorization token.
 * 7. Parses the response data using a dynamically created parser specific to the Onederful payer ID.
 * 8. Returns the parsed data in a successful HTTP response.
 *
 * If any error occurs during the process, it handles the error gracefully and returns an appropriate
 * HTTP error response.
 *
 * @param req - The Express request object containing the payload in the body.
 * @param res - The Express response object used to send the HTTP response.
 *
 * @returns A successful HTTP response with the parsed data or an error response in case of failure.
 *
 * @throws Will return an internal server error response if an unexpected error occurs.
 */

export const formatDataParser1 = async (req: Request, res: Response) => {
  try {
    const url: any = process.env.URL;
    const { payload, networkQualifier, formPayload } = req.body;
    let token = await getTokenFromRedis();
    if (!token) {
      token = await getAuthToken();
    }
    console.log("Selected network :", networkQualifier);

    const identifier = payload.payer.id;
    const onederfulPayerId =
      getOnederfulPayerId(identifier)?.toLocaleLowerCase() || null;

    if (!onederfulPayerId) {
      return HttpResponse.badRequest(
        res,
        "RESPONSE_MESSAGES.UNABLE_TO_FIND_PROVIDER"
      );
    }

    const { data } = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fs.writeFileSync("data.json", JSON.stringify(data, null, 2), "utf8");
    console.log("Data successfully stored in output.json");

    const parser: any = networkParser(
      data,
      networkQualifier,
      onederfulPayerId,
      formPayload
    );
    const parseredData = parser.parseToResultFormat();
    fs.writeFileSync(
      "output.json",
      JSON.stringify(parseredData, null, 2),
      "utf8"
    );
    return HttpResponse.success(res, parseredData, "Successfull");
  } catch (error) {
    const errorMessage = axios.isAxiosError(error)
      ? error.response?.data?.message
      : (error as Error).message;
    return HttpResponse.internalServerError(
      res,
      "Internal Server error",
      errorMessage
    );
  }
};
