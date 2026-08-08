export type TaskStatus = "Completed" | "Incomplete";

export interface Task {
  id: number;
  name: string;
  description: string;
  status: TaskStatus;
}

const API_URL = "http://localhost:5008/api/data";

export async function getTasks(): Promise<Task[]> {
  const response = await fetch(API_URL);
  return response.json();
}

export async function addTask(task: Omit<Task, "id">) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  return response.json();
}

export async function updateTask(task: Task) {
  await fetch(`${API_URL}/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
}

export async function deleteTask(id: number) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}
