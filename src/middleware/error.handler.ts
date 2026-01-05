import { errorResponse } from "../utils/response";

export const errorHandler = (err: any, req: any, res: any, next: any) => {
  const message = err.message || "Internal server error";
  const statusCode = err.statusCode || 500;

  return errorResponse(res, message, statusCode, err);
};
