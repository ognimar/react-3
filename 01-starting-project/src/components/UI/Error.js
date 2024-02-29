import "./Error.css";
import React from "react";
import Card from "./Card";

export default function Error(props) {
  return (
    <Card>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <button>okay</button>
      </footer>
    </Card>
  );
}
