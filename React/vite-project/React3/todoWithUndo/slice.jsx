// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    past: [],
    present: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.past.push([...state.present]); // save old state
      state.present.push({ id: Date.now(), text: action.payload });
    },
    removeTodo: (state, action) => {
      state.past.push([...state.present]);
      state.present = state.present.filter(
        (todo) => todo.id !== action.payload
      );
    },
    undo: (state) => {
      if (state.past.length > 0) {
        state.present = state.past.pop(); // revert to last saved state
      }
    },
  },
});

export const { addTodo, removeTodo, undo } = todosSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});
