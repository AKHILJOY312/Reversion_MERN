import { createContext, useContext, useReducer, useState } from "react";

const CounterContext = createContext();
const initial = {
  value: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { value: state.value + 1 };
  }
};
export const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initial);

  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
