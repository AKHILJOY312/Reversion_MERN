import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./slice";

const TodoList = React.memo(({ items }) => {
  const dispatch = useDispatch();

  console.log("TodoList is re-rendering");

  return (
    <ul>
      {items.map((val, idx) => (
        <li key={idx}>
          <input type="checkbox" onChange={() => dispatch(remove(val))} />
          {val}
        </li>
      ))}
    </ul>
  );
});

function App() {
  const items = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  console.log(items);
  const handleClick = () => {
    dispatch(add(value));
    setValue("");
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={() => handleClick()}>add</button>

      <TodoList items={items} />
    </div>
  );
}

export default App;
