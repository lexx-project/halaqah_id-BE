import { Request, Response } from "express";
import { asyncHandler } from "../utils/async.handler";
import * as santriRepo from "../repositories/santri.repository";
import * as absensiRepo from "../repositories/absensi.repository";
import * as halaqahRepo from "../repositories/halaqah.repository";
import * as setoranRepo from "../repositories/setoran.repository";
import { successResponse } from "../utils/response";

// PUBLIC: Get all halaqah (no auth required)
export const getPublicHalaqah = asyncHandler(
  async (req: Request, res: Response) => {
    const halaqahs = await halaqahRepo.getAllHalaqah();
    return successResponse(res, "Data halaqah berhasil diambil", halaqahs);
  },
);

// PUBLIC: Get absensi by halaqah ID (no auth required)
export const getPublicAbsensiByHalaqah = asyncHandler(
  async (req: Request, res: Response) => {
    const { halaqahId } = req.params;
    const absensi = await absensiRepo.getAbsensiByHalaqah(Number(halaqahId));
    return successResponse(
      res,
      "Data absensi halaqah berhasil diambil",
      absensi,
    );
  },
);

// PUBLIC: Get all setoran globally (no auth required)
export const getPublicAllSetoran = asyncHandler(
  async (req: Request, res: Response) => {
    const setoran = await setoranRepo.getAllSetoran();
    return successResponse(res, "Semua data setoran berhasil diambil", setoran);
  },
);

// PUBLIC: Get all santri (no auth required, no filtering)
export const getPublicSantri = asyncHandler(
  async (req: Request, res: Response) => {
    // Call repository directly without user filtering
    const santri = await santriRepo.getAllSantri(undefined);
    return successResponse(res, "Daftar santri berhasil diambil", santri);
  },
);
