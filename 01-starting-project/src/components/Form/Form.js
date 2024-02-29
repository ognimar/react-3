import React, { useState } from "react";
import "./Form.css";

function NewForm(ropsy) {
  const userName = "Username";
  const age = "Age (years)";
  const [userNameValue, setUserNameValue] = useState("Radek");
  const [userAgeValue, setUserAgeValue] = useState("");
  const [whotIfAge, setIfAge] = useState("");
  const [whotIfName, setIfName] = useState("");
  function userNameValueChandler(props) {
    if(props.target.value.trim()){
      setIfName("true");
      setUserNameValue(props.target.value);
    }else{
      setIfName("false");
      setUserNameValue(props.target.value);
    }
    
  }
  function userAgeValueChandler(props) {
    if (props.target.value > 0 && props.target.value.trim()) {
      setIfAge("true");
      setUserAgeValue(props.target.value);
    } else {
      setIfAge("false");
      setUserAgeValue(props.target.value);
    }
  }
  function naWyslaniu(idk) {
    idk.preventDefault();
    if(whotIfAge==="true" && whotIfName==="true"){
      ropsy.onSaveDate(userNameValue, userAgeValue);
      setUserNameValue("");
      setUserAgeValue("");
      setIfAge("");
      setIfName("");
      console.log(userAgeValue);
      console.log(userNameValue);
    }else{
      console.log("NIE DZIAŁA2");
    }
   
  }

  return (
    <div>
      <div>
        <form onSubmit={naWyslaniu}>
          <h2>{userName}</h2>
          <input
            className="input"
            type="text"
            value={userNameValue}
            onChange={userNameValueChandler}
          />
          <h2>{age}</h2>
          <input
            className="input"
            type="number"
            value={userAgeValue}
            onChange={userAgeValueChandler}
          />
          <br />
          <button type="submit" className="formButton">
            Add user
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewForm;
