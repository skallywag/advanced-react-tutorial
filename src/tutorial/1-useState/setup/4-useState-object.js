import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  const changeMessage = () => {
    // preserve values from state obj.
    setPerson({ ...person, message: "hello world" });
    // setMessage("hello world");
  };

  // can set-up as many state values as you want.

  // const [name, setName] = useState("sam");
  // const [age, setAge] = useState(29);
  // const [message, setMessage] = useState("random message");

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
