import React from "react";
// import FlashCard from "./components/FlashCard";

export default function App() {
  const [items, setItems] = React.useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]); // we cannot mutate state
  }

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItems = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item?.packed } : item
      )
    );
  };

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        initialItems={items}
        onToogleItems={handleToggleItems}
        onDeleteItem={handleDeleteItems}
      />
      <Stats items={items} />

      {/* exercise */}
      {/* <FlashCard /> */}

      {/* date counter */}
    </>
  );
}

function Logo() {
  return <h1>🌴Far Away💼</h1>;
}

function Form({ onAddItems }) {
  const [quantity, setQuantity] = React.useState(1);
  const [description, setDescription] = React.useState("");

  const formSubmit = (value) => {
    value.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem); //added items

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className='add-form' onSubmit={formSubmit}>
      <h3>What do you need for your 😍 trips? </h3>

      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type='text'
        placeholder='item...'
        // name="tripName"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

function PackingList({ initialItems, onDeleteItem, onToogleItems }) {
  return (
    <div className='list'>
      <ul>
        {initialItems.map((item, index) => {
          return (
            <li key={index}>
              <input
                type='checkbox'
                value={item?.packed}
                onChange={() => {
                  onToogleItems(item?.id);
                }}
              />
              <label
                for={item?.description}
                style={
                  item?.packed
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {" "}
                {item?.quantity} {item?.description}{" "}
                <button onClick={() => onDeleteItem(item?.id)}>❌</button>
              </label>
            </li>
          );
        })}
      </ul>

      {/* <Items /> */}
    </div>
  );
}

// function Items() {
//   return <div>logo</div>;
// }

function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numPacked}
        (${percentage}%)`}
      </em>
    </footer>
  );
}
