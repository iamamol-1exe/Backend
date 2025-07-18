
interface IApiResponse {
  status: 'success' | 'fail' | 'error';
  message: string;
  data?: unknown;
  error?: unknown;
  statusCode: number;
}


 export const formatResponse = (
  status: 'success' | 'fail' | 'error',
  message: string,
  data: unknown,
  error: unknown,
  statusCode: number
): IApiResponse => {
  const response: IApiResponse = {
    status,
    message,
    statusCode,
  };

  if (data) {
    response.data = data;
  }

  if (error) {
    response.error = error;
  }

  return response;
};