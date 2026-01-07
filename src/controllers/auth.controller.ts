import { Request, Response } from "express";
import { asyncHandler } from "../utils/async.handler";
import * as authService from "../services/auth.service";
import { successResponse } from "../utils/response";

export const login = asyncHandler(async (req: Request, res: Response) => {
  const result = await authService.login(req.body);
  return successResponse(res, "Login berhasil", result);
});

export const register = asyncHandler(async (req: Request, res: Response) => {
  const result = await authService.registerMuhafiz(req.body);
  return successResponse(res, "Register berhasil", result);
});
