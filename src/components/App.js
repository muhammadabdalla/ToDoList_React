import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  function getValue(e) {
    const newValue = e.target.value;

    setInputValue(newValue);
  }

  function adding() {
    setItems((prev) => {
      return [...prev, inputValue];
    });

    setInputValue("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={getValue} type="text" value={inputValue} />
        <button onClick={adding}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
