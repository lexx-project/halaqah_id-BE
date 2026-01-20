import * as absensiRepo from "../repositories/absensi.repository";
import prisma from "../prisma";

export const inputAbsensi = async (
  user: { id: number; role: string },
  data: any,
) => {
  const santriId = Number(data.santri_id);

  // 1. Validasi keberadaan santri
  const santri = await prisma.santri.findUnique({
    where: { id_santri: santriId },
  });

  if (!santri) {
    const error: any = new Error("Santri tidak ditemukan");
    error.status = 404;
    throw error;
  }

  // 2. PROTEKSI RBAC (WAJIB PERTAMA): Cek apakah Muhafiz berhak mengabsen santri ini
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

  // 3. CEK DUPLIKASI: Satu santri hanya boleh absen 1x per hari
  const inputDate = data.tanggal ? new Date(data.tanggal) : new Date();

  // Set range waktu hari tersebut (00:00:00 - 23:59:59)
  const startOfDay = new Date(inputDate);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(inputDate);
  endOfDay.setHours(23, 59, 59, 999);

  const existingAbsensi = await prisma.absensi.findFirst({
    where: {
      santri_id: santriId,
      tanggal: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
  });

  if (existingAbsensi) {
    const error: any = new Error("Santri ini sudah diabsen hari ini!");
    error.status = 400;
    throw error;
  }

  const validStatus = ["HADIR", "IZIN", "SAKIT", "ALFA", "TERLAMBAT"];
  if (!validStatus.includes(data.status)) {
    const error: any = new Error(
      `Status tidak valid. Gunakan salah satu: ${validStatus.join(", ")}`,
    );
    error.status = 400;
    throw error;
  }

  return await absensiRepo.createAbsensi({
    santri_id: santriId,
    status: data.status,
    keterangan: data.keterangan || null,
    tanggal: inputDate,
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
