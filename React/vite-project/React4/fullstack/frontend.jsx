import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let usersList = await fetch("http://localhost:3000/users");
        if (!usersList.ok) {
          throw new Error("fetching is not working");
        }
        let usersDetails = await usersList.json();
        setUsers(usersDetails);
      } catch (error) {
        console.error("fetch is not working", error);
      }
    };
    fetchUsers();
  }, []);
  console.log(users);

  return (
    <div>
      {" "}
      user
      <ul>
        {users.map((user, index) => {
          <li key={index}>
            <b>{user.name}</b>
          </li>;
          {
            console.log(user.name);
          }
        })}
      </ul>
    </div>
  );
}

export default App;
