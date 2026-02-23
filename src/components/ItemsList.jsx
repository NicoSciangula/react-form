export default function ItemsList({ item, remove }) {
  return (
    <ul>
      {item.map((singleItem, index) => (
        <li key={index} className="fs-4">
          {singleItem}
          <button
            onClick={() => {
              remove(index);
            }}
            className="btn btn-danger ms-3"
          >
            &#10008;
          </button>
        </li>
      ))}
    </ul>
  );
}
