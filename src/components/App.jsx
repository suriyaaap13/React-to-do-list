import React, { useState } from "react";

function App() {
  const [input, inputSetter] = useState("");
  const [items, itemsSetter] = useState([]);

  function handleChange(event) {
    inputSetter(event.target.value);
  }

  function handleClick(event) {
    itemsSetter((prevValue) => {
      return [...prevValue, input];
    });
    inputSetter("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={input} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem) => {
            return <li>{todoitem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
