import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    today: (state, action) => {
      state.value = new Date().toDateString() + action.payload;
    },
  },
});

export const { today } = dateSlice.actions;
export default dateSlice.reducer;
