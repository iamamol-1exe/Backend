import { NextFunction, Request, Response } from "express";

import axios from "axios";
import { access } from "node:fs/promises";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { client_id, client_secret } = req.body;

  try {
    const url: any = process.env.AUTH_URL;
    const response = await axios.post(url, {
      client_id: client_id,
      client_secret: client_secret,
    });
    if (response && response.data) {
      const { access_token } = response.data;
      req.body.token = access_token;
    }
  } catch (error) {
    console.error(error);
  }

  next();
};
