import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    inc: (state) => {
      state.count++;
    },
  },
});

export const { inc } = CounterSlice.actions;
export default CounterSlice.reducer;
