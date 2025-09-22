import { useEffect } from "react";
import { useReducer } from "react";
const initial = {
  num1: 0,
  num2: 0,
  result: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "num1":
      return { ...state, num1: Number(action.payload) };
    case "num2":
      return { ...state, num2: Number(action.payload) };
    case "add":
      return { ...state, result: state.num1 + state.num2 };
    default:
      throw new Error("error in reducre");
  }
};
function Calculator() {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <>
      <div>
        <input
          type="Number"
          onChange={(e) => dispatch({ type: "num1", payload: e.target.value })}
        />
        <input
          type="Number"
          onChange={(e) => dispatch({ type: "num2", payload: e.target.value })}
        />
        <button onClick={() => dispatch({ type: "add" })}>Add</button>
        <p>the result is {state.result}</p>
      </div>
    </>
  );
}
export default Calculator;
