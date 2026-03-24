///custome Hooke

function useCounter() {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount((prev) => prev + 1);
  };
  const dec = () => {
    setCount((prev) => prev - 1);
  };
  return { count, setCount, inc, dec };
}

import React, { useState } from "react";

function App() {
  const { count, setCount, inc, dec } = useCounter();
  return (
    <div>
      {" "}
      <p>counter :{count}</p>
      <button onClick={() => inc()}>+</button>
      <button onClick={() => dec()}>-</button>
    </div>
  );
}

export default App;
