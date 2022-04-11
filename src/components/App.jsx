import React, { useState } from "react";

function App() {
  const [input, inputSetter] = useState("");

  function handleChange(event) {
    inputSetter(event.target.value);
  }

  // function handleClick(event){
  //   inputSetter(prevValue =>{
  //     if(prevValue.length>0){
  //       let li = document.createElement("li");
  //       li.textContent = prevValue;
  //       document.getElementById('list-container').appendChild(li);
  //     }
  //   });
  //   inputSetter("");
  // }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={input} />
        <button>
          {/* onClick = {handleClick} */}
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
// id = "list-container"
