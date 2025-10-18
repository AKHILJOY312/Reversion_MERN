import React, { useState, useCallback } from "react";

// Child Component
const Child = React.memo(({ handleIncrementClick }) => {
  console.log("Child rendered");
  return <button onClick={handleIncrementClick}>Increment</button>;
});

// Parent Component
function Counter() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const incrementCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      {/* 👇 Passing custom prop name */}
      <Child handleIncrementClick={incrementCount} />

      <button onClick={() => setOtherState(!otherState)}>Toggle</button>
    </div>
  );
}

export default Counter;
