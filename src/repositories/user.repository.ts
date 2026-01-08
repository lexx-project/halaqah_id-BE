import prisma from "../prisma";

export const findAllMuhafidz = async () => {
  return await prisma.user.findMany({
    where: {
      role: "muhafidz",
      deleted_at: null,
    },
    select: {
      id_user: true,
      email: true,
      role: true,
    },
  });
};

export const findByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const create = async (data: any) => {
  return await prisma.user.create({
    data,
  });
};

export const softDelete = async (id: number) => {
  return await prisma.user.update({
    where: {
      id_user: id,
    },
    data: {
      deleted_at: new Date(),
    },
  });
};
