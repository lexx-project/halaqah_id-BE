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
