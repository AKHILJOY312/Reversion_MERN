import React from "react";
import useCounter from "./useCounter";

function App() {
  const { count, inc, dec, reset } = useCounter(10);
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={() => inc()}>increment</button>
      <button onClick={() => dec()}>increment</button>
      <button onClick={() => reset()}>increment</button>
    </div>
  );
}

export default App;
