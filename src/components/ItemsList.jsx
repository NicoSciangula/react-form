export default function ItemsList({ item }) {
  return (
    <ul>
      {item.map((singleItem, index) => (
        <li key={index} className="fs-4">
          {singleItem}
        </li>
      ))}
    </ul>
  );
}
