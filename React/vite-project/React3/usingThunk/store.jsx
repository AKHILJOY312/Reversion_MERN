import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // ✅ named import for Vite

// Initial state
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Reducer
function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return { ...state, loading: false, user: action.payload };
    case "LOGIN_ERROR":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

// Create store with Thunk middleware
export const store = createStore(authReducer, applyMiddleware(thunk));
