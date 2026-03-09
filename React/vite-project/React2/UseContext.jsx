// ALGO (React Context)

// 1. Create context → createContext()
// 2. Create Provider component → store shared state (useState)
// 3. Pass state via <Context.Provider value={...}>
// 4. Wrap components with Provider
// 5. Access shared state using useContext(Context)
// 6. Use/update the state inside components

import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <Context.Provider value={{ count, setCount }}>{children}</Context.Provider>
  );
};

function Counter() {
  const { count, setCount } = useContext(Context);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Provider>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
