import { Request, Response } from "express";
import { asyncHandler } from "../utils/async.handler";
import * as santriRepo from "../repositories/santri.repository";
import * as absensiRepo from "../repositories/absensi.repository";
import * as halaqahRepo from "../repositories/halaqah.repository";
import * as setoranRepo from "../repositories/setoran.repository";
import { successResponse } from "../utils/response";

export const getPublicHalaqah = asyncHandler(
  async (req: Request, res: Response) => {
    const halaqahs = await halaqahRepo.getAllHalaqah();
    return successResponse(res, "Data halaqah berhasil diambil", halaqahs);
  },
);

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

export const getAllSetoranPublic = asyncHandler(
  async (req: Request, res: Response) => {
    const data = await setoranRepo.getAllSetoran();

    const formattedData = data.map((item: any) => ({
      id_setoran: item.id_setoran,
      nama_santri: item.santri?.nama_santri || "Anonim",
      nama_halaqah: item.santri?.halaqah?.nama_halaqah || "Tanpa Halaqah",
      surah: item.surah,
      ayat: item.ayat,
      tanggal: item.tanggal,
    }));

    return successResponse(
      res,
      "Berhasil mengambil semua data setoran",
      formattedData,
    );
  },
);

export const getPublicSantri = asyncHandler(
  async (req: Request, res: Response) => {
    const santri = await santriRepo.getAllSantri(undefined);
    return successResponse(res, "Daftar santri berhasil diambil", santri);
  },
);
