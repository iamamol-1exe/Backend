import { Request, Response } from "express";
import { formatDataParser } from "../services/formatDataParser.service";
import axios from "axios";
import { HttpResponse } from "../utils/responseUtils";
import { getOnederfulPayerId } from "../utils/payerListHelper";
import createParser from "../parserFactory";

export const formatDataParser1 = async (req: Request, res: Response) => {
  try {
    const url: any = process.env.URL;
    const token = "" // paste your token here 
    const { payload } = req.body;
    const identifier = payload.payer.id;
    const onederfulPayerId =
      getOnederfulPayerId(identifier)?.toLocaleLowerCase() || null;
    if (!onederfulPayerId) {
      return HttpResponse.badRequest(
        res,
        "RESPONSE_MESSAGES.UNABLE_TO_FIND_PROVIDER"
      );
    }

    console.log(onederfulPayerId);

    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    const parser = createParser(data, onederfulPayerId);
    let parseredData = parser.parseToResultFormat();

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
