import React, { useState, useCallback } from "react";

// Child Component
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Increment</button>;
});

// Parent Component
function Counter() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Child onClick={handleIncrement} />
      <button onClick={() => setOtherState(!otherState)}>Toggle</button>
    </div>
  );
}

export default Counter;
