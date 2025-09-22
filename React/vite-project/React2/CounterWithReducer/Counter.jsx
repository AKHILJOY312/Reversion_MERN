//making a counter

import { useState } from "react";
import { useCounter } from "./Context";

function Counter() {
  const { count, setCount } = useCounter();

  return (
    <div>
      <p>{count.count}</p>
      <button onClick={() => setCount({ type: "+" })}>+</button>
      <button onClick={() => setCount({ type: "-" })}>-</button>
    </div>
  );
}
export default Counter;
