import prisma from "@/utils/db";

const prismaHandlers = async () => {
  // await prisma.task.create({
  //   data: {
  //     content: "hello from prisma",
  //   },
  // });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const PrismaPage = async () => {
  const tasks = await prismaHandlers();
  // console.log(tasks);
  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to display...</h2>;
  }
  return (
    <div>
      <h1 className="text-7xl">Prisma Page</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            {task.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaPage;
