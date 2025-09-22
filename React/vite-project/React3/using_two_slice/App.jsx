import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc } from "./slice1";
import { today } from "./slice2";
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const date = useSelector((state) => state.date.value);

  return (
    <div>
      <p>date:{date}</p>
      <p>count:{count}</p> <button onClick={() => dispatch(inc())}>inc</button>
      <button onClick={() => dispatch(today("this is working"))}>
        click to get the date
      </button>
    </div>
  );
}

export default App;
