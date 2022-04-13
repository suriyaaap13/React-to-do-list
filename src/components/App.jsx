import React, { useState } from "react";
import TodoItem from "./ToDoItem";

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

  function deleteItem(id) {
    console.log(id);
    itemsSetter((prevValue) => {
      console.log(prevValue);
      return prevValue.filter(function (item, index) {
        return index !== id;
      });
    });
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
          {items.map((todoitem, index) => {
            return (
              <TodoItem id={index} onChecked={deleteItem} text={todoitem} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
