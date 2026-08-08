import { useState } from "react";
import { deleteTask, updateTask, type Task } from "./TaskApi";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface Props {
  tasks: Task[];
  refreshTasks: () => void;
}

const TaskList = ({ tasks, refreshTasks }: Props) => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState<
    "All" | "Completed" | "Incomplete"
  >("All");

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    refreshTasks();
  };

  const handleStatusToggle = async (task: Task) => {
    const newStatus =
      task.status === "Completed" ? "Incomplete" : "Completed";
    await updateTask({ ...task, status: newStatus });
    refreshTasks();
  };

  return (
    <div>
      <h1 className="header">Task List</h1>

      <Button onClick={() => navigate("/AddTask")}>
        New Task
      </Button>

      <div className="dropdown">
        <button className="dropbtn">
          Filter Tasks
        </button>

        <div className="dropdown-content">
          <Button onClick={() => setFilter("All")}>
            All Tasks
          </Button>

          <Button onClick={() => setFilter("Completed")}>
            Completed Tasks
          </Button>

          <Button onClick={() => setFilter("Incomplete")}>
            Incomplete Tasks
          </Button>
        </div>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <h3>{task.name}</h3>

            <p>{task.description}</p>

            <p
              className={
                task.status === "Completed"
                  ? "status-completed"
                  : task.status === "Incomplete"
                    ? "status-incomplete"
                    : "status-null"
              }
              onClick={() => handleStatusToggle(task)}
            >
              {task.status === "Completed"
                ? "Completed"
                : task.status === "Incomplete"
                  ? "Incomplete"
                  : "(null)"}
            </p>

            <Button
              onClick={() =>
                navigate(`/EditTask/${task.id}`)
              }
            >
              Edit
            </Button>

            <Button
              variant="danger"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;