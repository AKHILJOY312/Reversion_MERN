//making a counter
import React, { useState } from "react";
import { useCounter } from "./CounterContext";

function Counter() {
  const { count, setCount } = useCounter();

  return (
    <>
      <div>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
    </>
  );
}

export default Counter;
