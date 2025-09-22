//making context for the counter with reducer

import { createContext, useContext, useReducer, useState } from "react";

const CounterContext = createContext();

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "+":
      return { count: state.count + 1 };
    case "-":
      return { count: state.count - 1 };
    default:
      throw new Error("invalid action ");
  }
}

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};
export const useCounter = () => useContext(CounterContext);
