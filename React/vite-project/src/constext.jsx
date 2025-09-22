import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    date: new Date().toString(), // Create fresh Date instance for each store
  },
  reducers: {
    inc: (state) => {
      state.count++;
    },
  },
});

export const { inc } = counterSlice.actions;
export default counterSlice.reducer;
