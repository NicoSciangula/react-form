import ItemsList from "./ItemsList";
import AddItem from "./AddItem";
import { useState } from "react";

export default function Main() {
  const [item, setItem] = useState(["Pane", "Pesce", "Pasta"]);
  const [newItem, setNewItem] = useState("");

  return (
    <>
      <main className="container">
        <div className="p-2 d-flex flex-column align-items-center">
          <h1 className="text-center p-3">Lista Articoli</h1>
          <ItemsList />
          <AddItem />
        </div>
      </main>
    </>
  );
}
