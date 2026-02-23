import ItemsList from "./ItemsList";

export default function Main() {
  return (
    <>
      <main className="container">
        <div className="p-2 d-flex flex-column align-items-center">
          <h1 className="text-center p-3">Lista Articoli</h1>
          <ItemsList />
        </div>
      </main>
    </>
  );
}
