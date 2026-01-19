import * as absensiRepo from "../repositories/absensi.repository";
import prisma from "../prisma";

export const inputAbsensi = async (
  user: { id: number; role: string },
  data: any,
) => {
  const santri = await prisma.santri.findUnique({
    where: { id_santri: Number(data.santri_id) },
  });

  if (!santri) {
    const error: any = new Error("Santri tidak ditemukan");
    error.status = 404;
    throw error;
  }

  if (user.role === "muhafiz") {
    const halaqah = await prisma.halaqah.findFirst({
      where: { muhafiz_id: Number(user.id), deleted_at: null },
    });

    if (!halaqah || santri.halaqah_id !== halaqah.id_halaqah) {
      const error: any = new Error(
        "Akses ditolak: Santri ini bukan anggota halaqah Anda!",
      );
      error.status = 403;
      throw error;
    }
  }

  const validStatus = ["HADIR", "IZIN", "SAKIT", "ALFA", "TERLAMBAT"];
  if (!validStatus.includes(data.status)) {
    const error: any = new Error(
      `Status tidak valid. Gunakan: ${validStatus.join(", ")}`,
    );
    error.status = 400;
    throw error;
  }

  return await absensiRepo.createAbsensi({
    santri_id: Number(data.santri_id),
    status: data.status,
    keterangan: data.keterangan || null,
    tanggal: data.tanggal ? new Date(data.tanggal) : new Date(),
  });
};

export const getSantriAbsensiHistory = async (
  santriId: number,
  user: { id: number; role: string },
) => {
  const santri = await prisma.santri.findUnique({
    where: { id_santri: santriId },
  });

  if (!santri) {
    const error: any = new Error("Santri tidak ditemukan");
    error.status = 404;
    throw error;
  }

  if (user.role === "muhafiz") {
    const halaqah = await prisma.halaqah.findFirst({
      where: { muhafiz_id: Number(user.id) },
    });

    if (!halaqah || santri.halaqah_id !== halaqah.id_halaqah) {
      const error: any = new Error(
        "Akses ditolak: Anda tidak berhak melihat absensi santri ini!",
      );
      error.status = 403;
      throw error;
    }
  }

  return await absensiRepo.getAbsensiBySantri(santriId);
};
