import { editTask } from "@/utils/actions";

interface IEditTaskProps {
  id: string;
  content: string;
  createdAt: Date;
  completed: boolean;
}

const EditTaskPage = ({ task }: { task?: IEditTaskProps | null }) => {
  if (!task) {
    return <div>there is no task...</div>;
  }
  const { id, content, completed } = task;

  return (
    <form action={editTask} className="max-w-sm p-12 border border-base-300">
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full"
      />
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text"> completed</span>
          <input
            type="checkbox"
            name="completed"
            defaultChecked={completed}
            id="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-sm">
        edit
      </button>
    </form>
  );
};

export default EditTaskPage;
