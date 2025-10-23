import { useState } from "react";

function CentimeterInput({ handleCmChange }) {
  return (
    <div>
      <label>Centimeters: </label>
      <input
        type="number"
        onChange={(e) => handleCmChange(e.target.value)}
        placeholder="Enter cm"
      />
    </div>
  );
}

function App() {
  const [length, setLength] = useState("");

  const handleCmChange = (value) => {
    setLength(value);
  };

  const meters = length / 100;

  return (
    <div>
      <h2> Length Converter (cm to m)</h2>

      <CentimeterInput handleCmChange={handleCmChange} />

      <div>Summary: {meters} meters</div>
    </div>
  );
}

export default App;
