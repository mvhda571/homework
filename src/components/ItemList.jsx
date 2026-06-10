import { useState } from "react";

function ItemList() {
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Orange",
  ]);

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Item List</h2>

      {items.map((item, index) => (
        <div key={index}>
          <span
            onClick={() => console.log(item)}
            style={{ cursor: "pointer", marginRight: "10px" }}
          >
            {item}
          </span>

          <button onClick={() => deleteItem(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;