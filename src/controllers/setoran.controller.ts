import * as setoranService from "../services/setoran.service";
import { asyncHandler } from "../utils/async.handler";
import { Response } from "express";
import { successResponse } from "../utils/response";

export const create = asyncHandler(async (req: any, res: Response) => {
  const result = await setoranService.inputSetoran(req.user, req.body);
  return successResponse(
    res,
    "Setoran berhasil dicatat",
    result,
    undefined,
    201
  );
});

export const getBySantri = asyncHandler(async (req: any, res: Response) => {
  const { santriId } = req.params;
  const result = await setoranService.getSantriHistory(
    Number(santriId),
    req.user
  );
  return successResponse(
    res,
    "History setoran santri berhasil diambil",
    result
  );
});

export const getAll = asyncHandler(async (_req: any, res: Response) => {
  const result = await setoranService.getAllSetoran();
  return successResponse(res, "Semua data setoran berhasil diambil", result);
});
