import React, { useCallback, useState } from "react";

const Child = React.memo(({ handleClick }) => {
  console.log("child component is rendering");

  return <button onClick={handleClick}>click me</button>;
});

function App() {
  const [count, setCount] = useState(0);
  const [dummy, setDummy] = useState(0);

  // useCallback returns the same function reference unless dependencies change
  const handleClick = useCallback(() => {
    setDummy((prev) => prev + 1);
  }, [dummy]); // empty dependency means it never changes

  console.log("parent component is rendering");
  return (
    <div>
      <p>count: {count}</p>
      <p>Dummy:{dummy}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>inc</button>
      <Child handleClick={handleClick} />
    </div>
  );
}

export default App;
