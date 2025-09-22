import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./redux/CounterSlice";

function App() {
  const [input, setInput] = useState("");
  const items = useSelector((state) => state.list.items);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(add(input));
    setInput("");
  };

  const handleDelete = (index) => {
    dispatch(remove(index));
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <ul>
        {items.map((list, index) => (
          <li key={index}>
            {list} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
