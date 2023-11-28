interface IEditTaskProps {
  id: string;
  content: string;
  createdAt: Date;
  completed: boolean;
}

const EditTask = ({ task }: { task?: IEditTaskProps | null }) => {
  if (!task) {
    return <div>No task found</div>;
  }
  return <div>edit</div>;
};

export default EditTask;
