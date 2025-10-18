import { createContext, useContext, useReducer, useState } from "react";

const CounterContext = createContext();

const initial = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { count: state.count++ };
    case "dec":
      return { count: state.count - 1 };
    default:
      state;
  }
};
export const CounterProvider = ({ children }) => {
  const [state, action] = useReducer(reducer, initial);
  return (
    <CounterContext.Provider value={{ state, action }}>
      {children}
    </CounterContext.Provider>
  );
};

//provied a coustome hook
export const useCounter = () => useContext(CounterContext);
