import React, { useState } from "react";

function ToDOItem(props) {
  const [isdone, doneSetter] = useState(false);
  function handleClick() {
    doneSetter((prevValue) => {
      if (prevValue) {
        return false;
      } else {
        return true;
      }
    });
  }
  return (
    <li
      onClick={handleClick}
      style={isdone ? { textDecoration: "line-through" } : null}
    >
      {props.text}
    </li>
  );
}

export default ToDOItem;
// {textDecoration: "line-through"}
