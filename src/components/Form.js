import React from "react";

export function Form({ onAddItems }) {
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
