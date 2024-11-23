import React from "react";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";
// import { Accordion } from "./components/Accordion";
import { TipCalculator } from "./components/tips/TipCalculator";
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

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items?"
    );

    confirmed && setItems([]);
  };

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        initialItems={items}
        onToogleItems={handleToggleItems}
        onDeleteItem={handleDeleteItems}
        onClearList={handleClearList}
      />
      <Stats items={items} />

      {/* accordion */}
      {/* <Accordion /> */}

      {/* exercise */}
      {/* <FlashCard /> */}

      {/* date counter */}

      {/* tip calculator */}
      {/* <TipCalculator /> */}
    </>
  );
}
