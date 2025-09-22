import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./todoSlice";

function App() {
  const items = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const today = new Date().toDateString();
  const handleSubmit = () => {
    dispatch(add(task));
    setTask("");
  };
  return (
    <div>
      <p>{today}</p>
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button onClick={() => handleSubmit()}>add</button>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {" "}
            {item} <button onClick={() => dispatch(remove(idx))}>del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
