import React, { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let interval;
    if (flag) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 500);
    }

    return () => {
      clearInterval(interval);
    };
  }, [flag]);
  return (
    <div>
      Timer
      <p>{count}</p>
      <button onClick={() => setFlag(true)}>start</button>
      <button onClick={() => setFlag(false)}>end</button>
    </div>
  );
}

export default Timer;
