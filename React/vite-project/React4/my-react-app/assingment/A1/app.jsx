import { useState, useEffect } from "react";
import "./App.css";
const data = [
  { id: 1, name: "Jhon Deo", email: "JhonDeo@gmail.com" },
  { id: 2, name: "Alice Jane", email: "AliceJane@gmail.com" },
  { id: 3, name: "Bob Smith", email: "BobSmith@gmail.com" },
  { id: 4, name: "Charlie Ray", email: "CharlieRay@gmail.com" },
];


function ProfileCard({ users }) {
  return (
    <>
      <div className="userList">
        {
          users.map((user)=>(
            <div className="key">
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <div className="AppName">
        <ProfileCard users={data}></ProfileCard>
      </div>
    </>
  );
}
