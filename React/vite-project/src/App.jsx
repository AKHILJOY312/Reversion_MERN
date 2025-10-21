import React, { useState } from "react";

function Child({ props, suck }) {
  return (
    <div>
      <p>{props}</p>
      <button onClick={() => suck()}>inc</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount((prev) => prev + 1);
  }
  return (
    <div>
      App
      {count}
      <Child props={count} suck={handleCount}></Child>
    </div>
  );
}

export default App;
