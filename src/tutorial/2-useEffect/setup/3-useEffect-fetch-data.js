import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch(url);
    const users = await res.json();
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <>
      <h3>github users</h3>
    </>
  );
};

export default UseEffectFetchData;
