import React from "react";
import { createRoot } from "react-dom/client";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import "./index.css";

/* ================================
   1. COUNTER SLICE (Redux State)
================================ */

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    reset: (state) => {
      state.value = 0;
    },
  },
});

const { increment, decrement, reset } = counterSlice.actions;

/* ================================
   2. CUSTOM MIDDLEWARE
================================ */

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching:", action);

  const result = next(action);

  console.log("Next State:", store.getState());

  return result;
};

const blockResetMiddleware = (store) => (next) => (action) => {
  if (action.type === "counter/reset") {
    console.log("Reset blocked!");
    return;
  }

  return next(action);
};

/* ================================
   3. STORE CONFIGURATION
================================ */

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware, blockResetMiddleware),
});

/* ================================
   4. REACT COMPONENT
================================ */

function App() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter</h1>

      <h2>Count: {count}</h2>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {/* Increments */}
        <button onClick={() => dispatch(increment())}>+</button>

        {/* Decrement */}
        <button onClick={() => dispatch(decrement())}>-</button>

        {/* Reset (blocked by middleware) */}
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

/* ================================
   5. ROOT RENDER
================================ */

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
