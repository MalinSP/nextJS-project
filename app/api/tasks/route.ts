import db from "@utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
  const tasks = await db.task.findMany();
  //return Response.json({ data: tasks });
  return NextResponse.json({ data: tasks });
};

export const POST = async (request: any) => {
  // console.log(request);
  const data = await request.json();
  const task = await db.task.create({
    data: {
      content: data.content,
    },
  });
  return Response.json({ data: task });
};
