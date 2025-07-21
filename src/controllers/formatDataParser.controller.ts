import { Request, Response } from "express";
import { formatDataParser } from "../services/formatDataParser.service";
import axios from "axios";
import { HttpResponse } from "../utils/responseUtils";

export const formatDataParser1 = async (req: Request, res: Response) => {
  try {
    const url: any = process.env.URL;
    const { payload, token } = req.body;
    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    const result = await formatDataParser(data);
    return HttpResponse.success(res, result, "Data is Parsed");
  } catch (error) {
    console.error("error is occurred : ", error);
    return HttpResponse.internalServerError(res, "Internal Server error");
  }
};
