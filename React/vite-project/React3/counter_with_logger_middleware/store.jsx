import { configureStore, createSlice } from "@reduxjs/toolkit";
import { loggerMiddleware } from "./loggerMiddleware";

const counterSlice1 = createSlice({
  name: "counters",
  initialState: {
    value: 0,
  },
  reducers: {
    increament: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});
export const { increament, decrement } = counterSlice1.actions;

export const store = configureStore({
  reducer: {
    counter: counterSlice1.reducer,
  },
  middleware: (Middleware) => Middleware().concat(loggerMiddleware),
});
