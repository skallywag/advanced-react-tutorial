import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch(url);
    const users = await res.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <ul className="users">
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default UseEffectFetchData;
