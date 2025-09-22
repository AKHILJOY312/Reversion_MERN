import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slice1";
import dateReducer from "./slice2";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    date: dateReducer,
  },
});
