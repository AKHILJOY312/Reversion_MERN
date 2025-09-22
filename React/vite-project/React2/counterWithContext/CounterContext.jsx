import React, { createContext, useState, useContext } from "react";

//1.create a context
const CounterContext = createContext();

//create a provider
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

//coustum hook to use context
export const useCounter = () => useContext(CounterContext);
