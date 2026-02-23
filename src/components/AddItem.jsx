export default function AddItem({ addItems, item, setNewItem }) {
  return (
    <>
      <form onSubmit={addItems} className="d-flex flex-column">
        <input
          type="text"
          value={item}
          onChange={(event) => {
            setNewItem(event.target.value);
          }}
        />
        <button type="submit" className="btn btn-primary mt-3">
          Aggiungi
        </button>
      </form>
    </>
  );
}
