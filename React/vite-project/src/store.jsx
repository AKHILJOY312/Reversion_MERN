import { configureStore } from "@reduxjs/toolkit";

import CounterSlice from "./context";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});
