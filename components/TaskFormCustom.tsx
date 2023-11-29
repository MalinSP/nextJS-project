"use client";
import { createTaskCustom } from "@/utils/actions";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

// const createTask = async (formData: FormData) => {
//   "use server";
//   const content = formData.get("content");
//   // console.log(content);
//   await prisma.task.create({
//     data: {
//       content: content as string,
//     },
//   });
//   revalidatePath("/tasks");
// };

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "please wait..." : "create task"}
    </button>
  );
};

const initialState = {
  message: "",
};

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  useEffect(() => {
    if (state.message === "error") {
      toast.error("there was an error");
      return;
    }
    if (state.message === "success") {
      toast.success("task created");
    }
  }, [state]);
  return (
    <form action={formAction}>
      {/* {state.message ? <p className="mb-2">{state.message}</p> : ""} */}
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        {/* <button type="submit" className="btn btn-primary join-item">
          create task
        </button> */}
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskFormCustom;
