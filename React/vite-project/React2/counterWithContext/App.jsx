import React from "react";
import { CounterProvider } from "./CounterContext";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <CounterProvider>
        <Counter></Counter>
      </CounterProvider>
    </div>
  );
}

export default App;
