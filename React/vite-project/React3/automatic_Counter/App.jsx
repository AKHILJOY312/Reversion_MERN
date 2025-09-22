import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec, reset } from "./redux/CounterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [mode, setMode] = useState(null);

  useEffect(() => {
    let interval;
    if (mode === "inc") {
      interval = setInterval(() => {
        console.log("i am still working");
        dispatch(inc());
      }, 500);
    } else if (mode === "dec") {
      interval = setInterval(() => {
        dispatch(dec());
      }, 500);
    } else if (mode === "reset") {
      dispatch(reset());
    }

    return () => clearInterval(interval);
  }, [mode, dispatch]);

  return (
    <div>
      <p>count:{count}</p>
      <button onClick={() => setMode("inc")}>+</button>
      <button onClick={() => setMode("dec")}>-</button>
      <button onClick={() => setMode("reset")}>reset</button>
      <button onClick={() => setMode(null)}>stop</button>
    </div>
  );
}

export default App;
