
export default function ItemsList() {

  return (
    <ul>
      {item.map((singleItem) => (
        <li className="fs-4">{singleItem}</li>
      ))}
    </ul>
  );
}
