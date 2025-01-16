import { useParams } from "react-router-dom";

function Task() {
  const { taskID } = useParams();

  return (
    <div className="task-page bg-white min-h-vh rounded-4 px-3 px-lg-5 pt-lg-4 pb-lg-4">
      Task {taskID}{" "}
    </div>
  );
}

export default Task;
