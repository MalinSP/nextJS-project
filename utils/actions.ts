import prisma from "./db";

export const getTask = async (id: string) => {
  return prisma.task.findUnique({
    where: {
      id: id as string,
    },
  });
};

export const editTask = async (formData: FormData) => {};
