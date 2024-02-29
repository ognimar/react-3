import React, { useState } from "react";
import Wyniki from "./components/Form/wyniki";
import NewForm from "./components/Form/Form";
import Card from "./components/UI/Card";

function App() {
  const [takeDate, setTakeDate] = useState([
    {
      id: "g1",
    },
  ]);

  function onSaveDate(IMIE, WIEK) {
    setTakeDate((prevList) => {
      const updatedLIST = [...prevList];
      updatedLIST.unshift({
        NAME: IMIE,
        AGE: WIEK,
        id: Math.random().toString(),
      });
      return updatedLIST;
    });
  }
  function OnDeleteHandler(ListID) {
    setTakeDate((prevList) => {
      const updatedList = prevList.filter((ID) => ID.id !== ListID);
      return updatedList;
    });
  }

  return (
    <div>
      <div>
        <Card>
          <NewForm onSaveDate={onSaveDate} />
        </Card>
      </div>
      <div>
        <Wyniki kurwa={takeDate} onDeleteItem={OnDeleteHandler} />
      </div>
    </div>
  );
}

export default App;
