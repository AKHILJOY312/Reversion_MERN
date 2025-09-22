import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./CounterSlice";

export const store = configureStore({
  reducer: {
    list: listReducer,
  },
});
