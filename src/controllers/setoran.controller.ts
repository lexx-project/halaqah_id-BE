import * as setoranService from "../services/setoran.service";
import { asyncHandler } from "../utils/async.handler";
import { Response } from "express";
import { successResponse } from "../utils/response";

export const create = asyncHandler(async (req: any, res: Response) => {
  const result = await setoranService.inputSetoran(req.user, req.body);
  return successResponse(res, "Setoran berhasil dicatat", result, 200);
});
