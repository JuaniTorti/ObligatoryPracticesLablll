import { useState } from "react";
import NewTask from "./components/newTask/NewTask";
import Tasks from "./components/tasks/Tasks";

const TASKS = [
  {
    key: 1,
    id: 1,
    task: "lavar los platos",
    hour: "18:30",
    day: "11/5",
  },
  {
    key: 2,
    id: 2,
    task: "hacer la cama",
    hour: "8:00",
    day: "12/5",
  },
  {
    key: 3,
    id: 3,
    task: "limpiar el baño",
    hour: "10:00",
    day: "12/5",
  },
  {
    key: 4,
    id: 4,
    task: "hacer la compra",
    hour: "16:00",
    day: "12/5",
  },
  {
    key: 5,
    id: 5,
    task: "sacar la basura",
    hour: "20:00",
    day: "12/5",
  },
  {
    key: 6,
    id: 6,
    task: "planchar la ropa",
    hour: "9:00",
    day: "13/5",
  },
  {
    key: 7,
    id: 7,
    task: "regar las plantas",
    hour: "19:00",
    day: "13/5",
  },
  {
    key: 8,
    id: 8,
    task: "preparar la cena",
    hour: "19:30",
    day: "13/5",
  },
];

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const addTaskHandler = (newTask) => {
    const taskData = { ...newTask };
    setTasks((prevTasks) => [taskData, ...prevTasks]);
  };

  const deleteTaskHandler = (taskId) => {
    const tasksNonEliminated = tasks.filter((task) => task.id != taskId);
    setTasks(tasksNonEliminated);
  };

  return (
    <>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks tasks={tasks} onDeleteTask={deleteTaskHandler} />
    </>
  );
}

export default App;
