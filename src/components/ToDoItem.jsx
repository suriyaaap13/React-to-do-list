import React from "react";

function ToDOItem(props) {
  return <li onClick={() => props.onChecked(props.id)}>{props.text}</li>;
}

export default ToDOItem;
// {textDecoration: "line-through"}
