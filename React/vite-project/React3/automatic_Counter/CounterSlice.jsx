import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    inc: (state) => {
      if (state.value < 10) {
        state.value += 1;
      }
    },
    dec: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { inc, dec, reset } = counterSlice.actions;
export default counterSlice.reducer;
