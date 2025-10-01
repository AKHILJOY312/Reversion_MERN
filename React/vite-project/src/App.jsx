//counter with reduex

import React from "react";
import { inc } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.Counter.count);
  const action = useDispatch();
  return (
    <div>
      <p>{count}</p>
      <p>
        <button onClick={() => action(inc())}>inc</button>
      </p>
    </div>
  );
}

export default App;
