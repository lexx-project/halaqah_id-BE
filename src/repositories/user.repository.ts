import prisma from "../prisma";

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
