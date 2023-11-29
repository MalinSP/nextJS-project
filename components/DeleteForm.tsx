"use client";
import { deleteTaskById } from "@/utils/actions";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-xs btn-error" disabled={pending}>
      {pending ? "pending..." : "delete"}
    </button>
  );
};

interface DeleteFormProps<T> {
  id: T;
}

// const deleteTaskById = async (formData: FormData) => {
//   "use server";
//   const id = formData.get("id");
//   // console.log(id);
//   await prisma.task.delete({
//     where: {
//       id: id as string,
//     },
//   });
//   revalidatePath("/tasks");
// };

const DeleteForm: React.FC<DeleteFormProps<string>> = ({ id }) => {
  return (
    <form action={deleteTaskById}>
      <input type="hidden" name="id" value={id} />
      {/* <button className="btn btn-xs btn-error">delete</button> */}
      <SubmitButton />
    </form>
  );
};

export default DeleteForm;
