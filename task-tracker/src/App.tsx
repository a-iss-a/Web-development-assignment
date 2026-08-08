import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import EditTask from "./EditTask";

import { getTasks, type Task } from "./TaskApi";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") return;

    const loadTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error("Failed to load tasks:", error);
      }
    };

    loadTasks();
  }, [location.pathname, refreshKey]);

  const refreshTasks = () => {
    setRefreshKey((key) => key + 1);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<TaskList tasks={tasks} refreshTasks={refreshTasks} />}
      />

      <Route
        path="/AddTask"
        element={<TaskForm />}
      />

      <Route
        path="/EditTask/:id"
        element={<EditTask />}
      />
    </Routes>
  );
}

export default App;

