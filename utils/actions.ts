"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { z } from "zod";
import { redirect } from "next/navigation";

export const getTask = async (id: string) => {
  return prisma.task.findUnique({
    where: {
      id: id as string,
    },
  });
};

export const createTaskCustom = async (
  prevState: { message: string },
  formData: FormData
) => {
  const content = formData.get("content");
  // console.log(content);

  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content: content as string,
      },
    });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    console.log(error);
    return { message: "error" };
  }
};

export const deleteTaskById = async (formData: FormData) => {
  // "use server";
  const id = formData.get("id");
  // console.log(id);
  await prisma.task.delete({
    where: {
      id: id as string,
    },
  });
  revalidatePath("/tasks");
};

export const editTask = async (formData: FormData) => {
  // "use server";
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: {
      id: id as string,
    },
    data: {
      content: content as string,
      completed: (completed === "on" ? true : false) as boolean,
    },
  });

  redirect("/tasks");
};
