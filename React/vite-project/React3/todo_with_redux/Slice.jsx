import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: { items: [] },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    remove: (state, action) => {
      state.items.splice(action.payload, 1);
    },
  },
});

export const { add, remove } = listSlice.actions;
export default listSlice.reducer;
