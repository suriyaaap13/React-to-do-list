import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input type="text" onChange={props.handleChange} value={props.input} />
      <button onClick={props.handleClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
