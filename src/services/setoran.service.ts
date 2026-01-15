import prisma from "../prisma";
import * as setoranRepo from "../repositories/setoran.repository";

export const inputSetoran = async (
  user: { id: number; role: string },
  data: any
) => {
  const santri = await prisma.santri.findUnique({
    where: {
      id_santri: data.santri_id,
    },
    include: {
      halaqah: true,
    },
  });
  if (!santri) throw new Error("Santri tidak ditemukan");

  if (user.role === "muhafiz") {
    const halaqahMuhafiz = await prisma.halaqah.findFirst({
      where: {
        muhafiz_id: Number(user.id),
      },
    });
    if (!halaqahMuhafiz || santri.halaqah_id !== halaqahMuhafiz.id_halaqah) {
      throw {
        status: 403,
        message: "Akses ditolak: Santri ini bukan anggota halaqah Anda!",
      };
    }
  }
  return await setoranRepo.createSetoran(data);
};
