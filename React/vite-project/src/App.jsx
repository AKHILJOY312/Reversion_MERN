import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { inc } from "./context";

function Counter() {
  const state = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>hello</p>
      <p>{state}</p>
      <button onClick={() => dispatch(inc())}>inc</button>
    </div>
  );
}
function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
}

export default App;
