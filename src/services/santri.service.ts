import prisma from "../prisma";
import * as santriRepo from "../repositories/santri.repository";

export const getSantriList = async (user: {
  id_user: number;
  role: string;
}) => {
  let halaqahId: number | undefined;

  if (user.role === "muhafiz") {
    const halaqah = await prisma.halaqah.findFirst({
      where: {
        muhafiz_id: user.id_user,
        deleted_at: null,
      },
    });
    if (!halaqah) {
      throw new Error("Anda tidak ditugaskan ke halaqah manapun");
    }
    halaqahId = halaqah.id_halaqah;
  }
  return await santriRepo.getAllSantri();
};

export const createNewSantri = async (
  user: {
    id_user: number;
    role: string;
  },
  data: {
    nama_santri: string;
    nomor_telepon: string;
    target: any;
    halaqah_id: number;
  }
) => {
  let finalHalaqahId = data.halaqah_id;

  if (user.role === "muhafiz") {
    const halaqah = await prisma.halaqah.findFirst({
      where: {
        muhafiz_id: user.id_user,
        deleted_at: null,
      },
    });
    if (!halaqah)
      throw new Error("Akses ditolak: Anda tidak memiliki halaqah!");
    finalHalaqahId = halaqah.id_halaqah;
  }
  return await santriRepo.createSantri({ ...data, halaqah_id: finalHalaqahId });
};

export const updateExistingSantri = async (
  id: number,
  user: { id_user: number; role: string },
  data: any
) => {
  const santri = await santriRepo.getSantriById(id);
  if (!santri) throw new Error("Santri tidak ditemukan");

  if (user.role === "muhafiz") {
    const halaqah = await prisma.halaqah.findFirst({
      where: {
        muhafiz_id: user.id_user,
      },
    });
    if (santri.halaqah_id !== halaqah?.id_halaqah) {
      throw new Error("Akses ditolak: Santri ini bukan anggota halaqah Anda!");
    }
    delete data.halaqah_id;
  }
  return await santriRepo.updateSantri(id, data);
};

export const deleteSantri = async (
  id: number,
  user: { id_user: number; role: string }
) => {
  const santri = await santriRepo.getSantriById(id);
  if (!santri) throw new Error("Santri tidak ditemukan!!");

  if (user.role === "muhafiz") {
    const halaqah = await prisma.halaqah.findFirst({
      where: { muhafiz_id: user.id_user },
    });
    if (santri.halaqah_id !== halaqah?.id_halaqah) {
      throw new Error("Akses ditolak: Santri ini bukan anggota halaqah Anda!");
    }
  }
  return await santriRepo.deleteSantri(id);
};

export const restoreSantri = async (
  id: number,
  user: { id_user: number; role: string }
) => {
  const santri = await santriRepo.getSantriById(id);
  if (!santri) throw new Error("Santri tidak ditemukan!!");

  if (user.role === "muhafiz") {
    const halaqah = await prisma.halaqah.findFirst({
      where: { muhafiz_id: user.id_user },
    });
    if (santri.halaqah_id !== halaqah?.id_halaqah) {
      throw new Error("Akses ditolak: Santri ini bukan anggota halaqah Anda!");
    }
  }
  return await santriRepo.restoreSantri(id);
};
