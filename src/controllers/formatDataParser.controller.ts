import { Request, Response } from "express";
import { formatDataParser } from "../services/formatDataParser.service";
import axios from "axios";
import { HttpResponse } from "../utils/responseUtils";
import { getOnederfulPayerId } from "../utils/payerListHelper";
import createParser from "../parserFactory";

export const formatDataParser1 = async (req: Request, res: Response) => {
  try {
    const url: any = process.env.URL;
    const token =
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFUWkNNemd4TnpKRk5UZzFSakJDT0RrMlFVTkZOREV3TlRCQlJFRXpNelV4UWpVeFF6bEVRUSJ9.eyJpc3MiOiJodHRwczovL29uZWRlcmZ1bC1kZW50YWwuYXV0aDAuY29tLyIsInN1YiI6InJuc0g4Qk52bUQzMjl4UTU1VmtTRnFheU5qUWlOSVFiQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3Byb2R1Y3Rpb24ub25lZGVyZnVsLmNvIiwiaWF0IjoxNzUzMTgxOTA1LCJleHAiOjE3NTMyMTc5MDUsInNjb3BlIjoiZmVhdHVyZTplbGlnaWJpbGl0eSBmZWF0dXJlOmVuaGFuY2VkLWVsaWdpYmlsaXR5IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXpwIjoicm5zSDhCTnZtRDMyOXhRNTVWa1NGcWF5TmpRaU5JUWIiLCJwZXJtaXNzaW9ucyI6WyJmZWF0dXJlOmVsaWdpYmlsaXR5IiwiZmVhdHVyZTplbmhhbmNlZC1lbGlnaWJpbGl0eSJdfQ.vgZ4gMV6fmY1FXLtAGbDL9EE9yDB6DubrtYQBGU1Zf8OXInUZY4DvD0gA8-dC58viC-NzK6Ic9x68VOpgelH97ZobHnxsEge_SvVWQInSdZVl5HlOaN70vzerfSCZqrTIks4cMjYG64lm0VSUnOux9Vdu6s_qoZ5lApUyPc1knyyOsusHFF0EEM6Ia-Va9DRArfZ62H_uLYvWRL9qF0VbWh2dqs_A6bilWysC0BVMcPJ2xmN9FCQgkf1bz5l2Z_ZPhXrFTkWzpk6VdPbiDPspFRSLSiK-lyfjN-UGnyVRi9HxBGpB9rVaCSxk9JBJ2yJ9vuNoSKumLos1xyDefpK1A";
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
