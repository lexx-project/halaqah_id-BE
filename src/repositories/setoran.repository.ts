import prisma from "../prisma";

export const createSetoran = async (data: any) => {
  return await prisma.setoran.create({ data });
};

export const getSetoranBySantri = async (santriId: number) => {
  return await prisma.setoran.findMany({
    where: {
      santri_id: santriId,
    },
    orderBy: {
      tanggal_setoran: "desc",
    },
  });
};

export const getAllSetoran = async () => {
  return await prisma.setoran.findMany({
    where: {
      santri: {
        deleted_at: null,
      },
    },
    include: {
      santri: {
        select: {
          nama_santri: true,
          halaqah: {
            select: {
              name_halaqah: true,
            },
          },
        },
      },
    },
    orderBy: {
      tanggal_setoran: "desc",
    },
  });
};
