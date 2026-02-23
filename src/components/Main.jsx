import ItemsList from "./ItemsList";
import AddItem from "./AddItem";
import { useState } from "react";

export default function Main() {
  const [tasks, setTasks] = useState(["Pane", "Pesce", "Pasta"]);
  const [newTask, setNewTask] = useState("");

  function addTask(event) {
    event.preventDefault();
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function removeTask(index) {
    const filtraTask = tasks.filter((element, i) => {
      return index !== i;
    });
    setTasks(filtraTask);
  }

  return (
    <>
      <main className="container">
        <div className="p-2 d-flex flex-column align-items-center">
          <h1 className="text-center p-3">Lista Articoli</h1>
          <ItemsList item={tasks} remove={removeTask} />
          <AddItem addItems={addTask} item={newTask} setNewItem={setNewTask} />
        </div>
      </main>
    </>
  );
}
