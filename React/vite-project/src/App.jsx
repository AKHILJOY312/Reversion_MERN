//counter with context
import React from "react";
// import { CounterProvider, useCounter } from "./constext";
import { useSelector, useDispatch } from "react-redux";
import { inc } from "./constext";
function Counter() {
  const { count, date } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      count:{count}
      <p>Date: {date}</p>
      <p>
        <button onClick={() => dispatch(inc())}></button>
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      <Counter></Counter>
    </>
  );
}
export default App;
