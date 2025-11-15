import { createSlice } from "@reduxjs/toolkit";

const initial = {
  count: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState: initial,
  reducers: {
    inc: (state) => {
      state.count += 1;
    },
  },
});

export const { inc } = CounterSlice.actions;
export default CounterSlice.reducer;
