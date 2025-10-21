import React, { useState } from "react";

function useCounter(startVal = 0) {
  const [count, setCount] = useState(startVal);

  const inc = () => {
    setCount((prev) => prev + 1);
  };
  const dec = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(startVal);
  };
  return { count, inc, dec, reset };
}

export default useCounter;
