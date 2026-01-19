import prisma from "../prisma";

export const createAbsensi = async (data: any) => {
  return await prisma.absensi.create({ data });
};

export const getAbsensiBySantri = async (santriId: number) => {
  return await prisma.absensi.findMany({
    where: {
      santri_id: santriId,
    },
    orderBy: {
      tanggal: "desc",
    },
  });
};

export const getAbsensiByHalaqah = async (halaqahId: number, date?: string) => {
  const targetData = date ? new Date(date) : new Date();

  return await prisma.absensi.findMany({
    where: {
      santri: { halaqah_id: halaqahId },
      tanggal: {
        gte: new Date(targetData.setHours(0, 0, 0, 0)),
        lte: new Date(targetData.setHours(23, 59, 59, 999)),
      },
    },
    include: {
      santri: {
        select: {
          nama_santri: true,
        },
      },
    },
  });
};
