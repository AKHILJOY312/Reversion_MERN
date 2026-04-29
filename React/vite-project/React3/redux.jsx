import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

/*
REDUX FLOW:
1. Initial State
2. Slice (state + reducers)
3. Store
4. Provider
5. useSelector = read state
6. useDispatch = send action
*/

// Initial State
const initialState = {
  msg: "Hello from Redux Toolkit!",
};

// Slice
const msgSlice = createSlice({
  name: "msg",
  initialState,
  reducers: {
    // Reducer Method
    changeMessage: (state) => {
      state.msg = "Message updated using reducer!";
    },
  },
});

// Export action
const { changeMessage } = msgSlice.actions;

// Store
const store = configureStore({
  reducer: {
    msgSlice: msgSlice.reducer,
  },
});

// Child Component
const Child = () => {
  const message = useSelector((state) => state.msgSlice.msg);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{message}</p>

      <button onClick={() => dispatch(changeMessage())}>Change Message</button>
    </div>
  );
};

// App Component
function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Message App</h1>
        <Child />
      </div>
    </Provider>
  );
}

export default App;
