import React, { useState } from "react";
import { useCounter } from "./context";

function Counter() {
  const { count, dispatch } = useCounter();

  return (
    <div>
      <p>count:{count.value}</p>

      <button onClick={() => dispatch({ type: "inc" })}>inc</button>
    </div>
  );
}

export default Counter;
