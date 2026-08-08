import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addTask, type TaskStatus } from "./TaskApi";

const TaskForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("Incomplete");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addTask({
      name,
      description,
      status,
    });

    navigate("/");
  };

return (
  <div>
    <h2>Add Task</h2>

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Task Name</label>

        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter task name"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>

        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Status</label>

        <select
          className="form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
        >
          <option value="Incomplete">Incomplete</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <Button type="submit">
        Add Task
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

export default TaskForm;
