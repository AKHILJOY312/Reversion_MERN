import React, { useEffect, useState } from "react";
import { CounterProvider, useCounter } from "./contex";

function Counter() {
  const { state, action } = useCounter();
  const [timer, setTimer] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let intervalId;

    if (flag) {
      intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup function — clears timer when component unmounts or flag changes
    return () => {
      clearInterval(intervalId);
      console.log("Timer stopped or component unmounted");
    };
  }, [flag]);

  return (
    <div>
      <h2>Timer: {timer}</h2>
      <h3>Count: {state.count}</h3>

      <button onClick={() => action({ type: "inc" })}>Increment</button>
      <button onClick={() => action({ type: "dec" })}>Decrement</button>

      <br />
      <button onClick={() => setFlag(true)}>Start Timer</button>
      <button onClick={() => setFlag(false)}>Stop Timer</button>
    </div>
  );
}

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
