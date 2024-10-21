import React from "react";

export function PackingList({
  initialItems,
  onDeleteItem,
  onToogleItems,
  onClearList,
}) {
  const [sortBy, setSortBy] = React.useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = initialItems;

  if (sortBy === "description")
    sortedItems = initialItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = initialItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => {
          return (
            <li key={item?.id}>
              <input
                type='checkbox'
                value={item?.packed}
                onChange={() => onToogleItems(item?.id)}
              />
              <label
                htmlFor={item?.description}
                style={
                  item?.packed
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {item?.quantity} {item?.description}{" "}
                <button onClick={() => onDeleteItem(item?.id)}>❌</button>
              </label>
            </li>
          );
        })}
      </ul>

      {initialItems.length > 0 && (
        <div className='action'>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value='input'>Sort by input order</option>
            <option value='description'>Sort by description</option>
            <option value='packed'>Sort by packed status</option>
          </select>
          <button onClick={() => onClearList()}>Clear All</button>
        </div>
      )}
    </div>
  );
}
