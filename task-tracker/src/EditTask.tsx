import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getTasks, updateTask, type Task, type TaskStatus } from "./TaskApi";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState<Task | null>(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("Incomplete");

  useEffect(() => {
    const loadTask = async () => {
      const tasks = await getTasks();

      const foundTask = tasks.find(
        (task) => task.id === Number(id)
      );

      if (foundTask) {
        setTask(foundTask);
        setName(foundTask.name);
        setDescription(foundTask.description);
        setStatus(foundTask.status);
      }
    };

    loadTask();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!task) return;

    await updateTask({
      id: task.id,
      name,
      description,
      status,
    });

    navigate("/");
  };

  if (!task) {
    return <p>Loading task...</p>;
  }

return (
  <div>
    <h2>Edit Task</h2>

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Task Name</label>

        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>

        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Status</label>

        <select
          className="form-select"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as TaskStatus)
          }
        >
          <option value="Incomplete">Incomplete</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <Button type="submit">
        Save Changes
      </Button>

      <Button
        variant="secondary"
        className="ms-2"
        onClick={() => navigate("/")}
      >
        Cancel
      </Button>
    </form>
  </div>
);
};

export default EditTask;