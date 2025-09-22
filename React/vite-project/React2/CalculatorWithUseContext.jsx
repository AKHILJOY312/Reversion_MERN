import { createContext, useContext, useReducer } from "react";

// Create Context for calculator state
const CalculatorContext = createContext();

// Initial state
const initialState = {
  num1: 0,
  num2: 0,
  result: 0,
};

// Reducer to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NUM1":
      return { ...state, num1: action.payload };
    case "SET_NUM2":
      return { ...state, num2: action.payload };
    case "ADD":
      return { ...state, result: state.num1 + state.num2 };
    default:
      return state;
  }
};

// Input component
function InputFields() {
  const { state, dispatch } = useContext(CalculatorContext);

  return (
    <div>
      <input
        type="number"
        value={state.num1}
        onChange={(e) =>
          dispatch({ type: "SET_NUM1", payload: Number(e.target.value) })
        }
      />
      <input
        type="number"
        value={state.num2}
        onChange={(e) =>
          dispatch({ type: "SET_NUM2", payload: Number(e.target.value) })
        }
      />
    </div>
  );
}

// Operation component
function Operation() {
  const { dispatch } = useContext(CalculatorContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD" })}>Add</button>
    </div>
  );
}

// Result component
function Result() {
  const { state } = useContext(CalculatorContext);

  return <p>The result is: {state.result}</p>;
}

// Main Calculator component
function AddCalculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      <div>
        <h2>Addition Calculator</h2>
        <InputFields />
        <Operation />
        <Result />
      </div>
    </CalculatorContext.Provider>
  );
}

export default AddCalculator;
