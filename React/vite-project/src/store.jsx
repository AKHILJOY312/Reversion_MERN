import CounterReducer from "./counterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    Counter: CounterReducer,
  },
});
