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

export const getAllMuhafidz = asyncHandler(
  async (_req: Request, res: Response) => {
    const result = await authService.getAllMuhafidz();
    return successResponse(res, "Data muhafidz berhasil diambil", result);
  }
);

export const deleteMuhafidz = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await authService.deleteMuhafiz(Number(id));
    return successResponse(res, "Data muhafidz berhasil dihapus", result);
  }
);

export const updateMuhafiz = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { username, email } = req.body;

    const result = await authService.updateMuhafiz(Number(id), {
      username,
      email,
    });

    return successResponse(res, "Data muhafidz berhasil diupdate", result);
  }
);

export const impersonate = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await authService.impersonateMuhafiz(Number(id));

  return successResponse(res, "Impersonate berhasil", result);
});
