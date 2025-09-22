import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increament, decrement } from "./store";
function App() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <p>Counter:{count}</p>
        <button onClick={() => dispatch(increament("payload"))}>+</button>
        <button onClick={() => dispatch(decrement("decpalyload"))}>-</button>
      </div>
      <hr />
    </div>
  );
}

export default App;
