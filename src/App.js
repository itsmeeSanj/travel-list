import React from "react";
import FlashCard from "./components/FlashCard";

export default function App() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];

  return (
    <>
      <Logo />
      <Form />
      <PackingList initialItems={initialItems} />
      <Stats />

      {/*  */}
      <FlashCard />
    </>
  );
}

function Logo() {
  return <h1>🌴Far Away💼</h1>;
}

function Form() {
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
    console.log(newItem);

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
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

function PackingList({ initialItems }) {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <div className='list'>
      <ul>
        {initialItems.map((item, index) => {
          return (
            <>
              <li key={item?.id}>
                <input
                  type='checkbox'
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                />
                <label
                  for={item?.description}
                  style={
                    item?.packed
                      ? {
                          textDecoration: "line-through",
                        }
                      : { textDecoration: "none" }
                  }
                >
                  {" "}
                  {item?.quantity} {item?.description} <button>❌</button>
                </label>
              </li>
            </>
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

function Stats() {
  return (
    <footer className='stats'>
      <em>💼 You have 5 items on your list, and you already packed 0 (0%)</em>
    </footer>
  );
}
