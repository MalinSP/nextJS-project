import EditTask from "@/components/EditTask";
import { getTask } from "@/utils/actions";
import Link from "next/link";

interface IEditPageProps {
  params: {
    id: string;
  };
}

const EditTaskPage: React.FC<IEditPageProps> = async ({ params }) => {
  const task = await getTask(params.id);
  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          back to tasks
        </Link>
      </div>
      <EditTask task={task} />
    </>
  );
};

export default EditTaskPage;
