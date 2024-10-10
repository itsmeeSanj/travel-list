import React from "react";

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
    </>
  );
}

function Logo() {
  return <h1>🌴Far Away💼</h1>;
}

function Form() {
  return (
    <form className='add-form'>
      <h3>What do you need for your 😍 trips? </h3>

      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>

      <input type='text' name='item' id='' placeholder='item...' />

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

      {/* <div className='actions'>
        <select name='SORTED BY INPUT ORDER' id='sort'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
        <button>Clear List</button>
      </div> */}
      {/* <Items /> */}
    </div>
  );
}

function Items() {
  return <div>logo</div>;
}

function Stats() {
  return (
    <footer className='stats'>
      <em>💼 You have 5 items on your list, and you already packed 0 (0%)</em>
    </footer>
  );
}
