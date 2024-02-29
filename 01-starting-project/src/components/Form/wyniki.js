import React from "react";
import "./wyniki.css";
import Card from "../UI/Card";
import Item from "./Itemsy";

function Wyniki(props) {
  return (
    <li>
      <div>
        <Card>
          <ul>
            {props.kurwa.map((lista) => (
              <Item key={lista.id} id={lista.id} why={lista.onDeleteItem}>
                {lista.NAME}
                {lista.AGE}
              </Item>
            ))}
          </ul>
        </Card>
      </div>
    </li>
  );
}

export default Wyniki;
