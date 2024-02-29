import React from "react";

export default function Item(props) {
  function deleteHandler() {
    props.why(props.id);
  }
  return <li onClick={deleteHandler}>{props.children}</li>;
}
