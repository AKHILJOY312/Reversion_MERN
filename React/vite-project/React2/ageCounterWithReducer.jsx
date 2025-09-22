import { useReducer, useState } from "react";
const initial = { age: 48 };
const reducer = (state, action) => {
  if (action.type == "increment") {
    return {
      age: state.age + 1,
    };
  }
  throw new Error("Not working");
};

function App() {
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <div>
      <p>yor age is {state.age}</p>
      <button onClick={() => dispatch({ type: "increment" })}></button>
    </div>
  );
}
export default App;
