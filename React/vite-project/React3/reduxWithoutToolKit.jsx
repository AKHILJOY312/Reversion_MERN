import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

/*
WITHOUT REDUX TOOLKIT:
1. Initial State
2. Action Type
3. Action Creator
4. Reducer
5. Store
6. Provider
7. useSelector + useDispatch
*/

// Initial State
const initialState = {
  msg: "Hello from Classic Redux!",
};

// Action Type
const CHANGE_MESSAGE = "CHANGE_MESSAGE";

// Action Creator
const changeMessage = () => {
  return {
    type: CHANGE_MESSAGE,
  };
};

// Reducer
const msgReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return {
        ...state,
        msg: "Message updated using classic Redux!",
      };

    default:
      return state;
  }
};

// Store
const store = createStore(msgReducer);

// Child Component
const Child = () => {
  const message = useSelector((state) => state.msg);
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
        <h1>Classic Redux App</h1>
        <Child />
      </div>
    </Provider>
  );
}

export default App;
