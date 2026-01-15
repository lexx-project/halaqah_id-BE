import prisma from "../prisma";
import * as setoranRepo from "../repositories/setoran.repository";

export const inputSetoran = async (
  user: { id: number; role: string },
  data: any
) => {
  const validKategori = ["HAFALAN", "MURAJAAH"];
  if (data.kategori && !validKategori.includes(data.kategori)) {
    const error: any = new Error(
      `Kategori harus salah satu dari: ${validKategori.join(", ")}`
    );
    error.status = 400;
    throw error;
  }

  const santri = await prisma.santri.findUnique({
    where: {
      id_santri: data.santri_id,
    },
    include: {
      halaqah: true,
    },
  });

  if (!santri) {
    const error: any = new Error("Santri tidak ditemukan");
    error.status = 404;
    throw error;
  }

  if (user.role === "muhafiz") {
    const halaqahMuhafiz = await prisma.halaqah.findFirst({
      where: {
        muhafiz_id: Number(user.id),
      },
    });
    if (!halaqahMuhafiz || santri.halaqah_id !== halaqahMuhafiz.id_halaqah) {
      const error: any = new Error(
        "Akses ditolak: Santri ini bukan anggota halaqah Anda!"
      );
      error.status = 403;
      throw error;
    }
  }
  return await setoranRepo.createSetoran(data);
};
