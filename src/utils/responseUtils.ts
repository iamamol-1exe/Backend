import { Response } from 'express';
import {formatResponse} from './responseHelper'

export class HttpResponse {
  public static success(res: Response, data: unknown, message = 'Success'): void {
    const response = formatResponse('success', message, data, undefined, 200);
    res.status(200).json(response);
  }
  public static badRequest(res: Response, error: string, message = 'Bad Request'): void {
    const response = formatResponse('fail', message, undefined, error, 400);
    res.status(400).json(response);
  }



  public static internalServerError(res: Response, error: string, message = 'Internal Server Error'): void {
    const response = formatResponse('error', message, undefined, error, 500);
    res.status(500).json(response);
  }

  
}