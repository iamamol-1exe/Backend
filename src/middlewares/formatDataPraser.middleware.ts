import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../utils/responseUtils";

import axios from "axios";


export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const client_id = process.env.CLIENT_ID;
    const client_secret= process.env.CLIENT_SECRET;
    const url: any = process.env.AUTH_URL;
    if (!client_id || !client_secret || !url) {
    console.error("Authentication environment variables are not set.");
    return HttpResponse.internalServerError(res, "Server configuration error.");
  }
    const response = await axios.post(url, {
      client_id: client_id,
      client_secret: client_secret,
    });
    if (response && response.data) {
      const { access_token } = response.data;
      req.body.token = access_token;
      next();
    }
  } catch (error) {
    console.error(error);
    return HttpResponse.internalServerError(res,"innternal error is acurrred ");
  }
};
