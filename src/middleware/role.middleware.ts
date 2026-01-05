import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/response";

export const roleMiddleware = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (!roles.includes(user.role)) {
      return errorResponse(
        res,
        "Anda tidak memiliki akses ke fitur ini",
        403,
        null
      );
    }
    next();
  };
};
