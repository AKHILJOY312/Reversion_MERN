import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    remove: (state, action) => {
      state.items = state.items.filter((itm) => itm !== action.payload);
    },
  },
});

export const { add, remove } = todoSlice.actions;
export default todoSlice.reducer;
