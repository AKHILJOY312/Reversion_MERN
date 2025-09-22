import { createStore, combineReducers } from "redux";

// Initial state
const initialTodoState = {
  items: [],
};

// Reducer
function todoReducer(state = initialTodoState, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((_, idx) => idx !== action.payload),
      };
    default:
      return state;
  }
}

// Combine reducers (if you have more in future)
const rootReducer = combineReducers({
  todo: todoReducer,
});

// Create store
export const store = createStore(rootReducer);
