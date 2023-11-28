import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import React from "react";

interface DeleteFormProps<T> {
  id: T;
}

const deleteTaskById = async (formData: FormData) => {
  "use server";
  const id = formData.get("id");
  // console.log(id);
  await prisma.task.delete({
    where: {
      id: id as string,
    },
  });
  revalidatePath("/tasks");
};

const DeleteForm: React.FC<DeleteFormProps<string>> = ({ id }) => {
  return (
    <form action={deleteTaskById}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-xs btn-error">delete</button>
    </form>
  );
};

export default DeleteForm;
