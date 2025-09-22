import { useState } from "react";

function CentimeterInput({ onChange }) {
  return (
    <div>
      <label>Centimeters: </label>
      <input
        type="number"
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter cm"
      />
    </div>
  );
}

function LengthConverter() {
  const [length, setLength] = useState("");

  const handleCmChange = (value) => {
    setLength(value);
  };

  const meters = length / 100;

  return (
    <div>
      <h2> Length Converter (cm to m)</h2>

      <CentimeterInput onChange={handleCmChange} />

      <div>Summary: {meters} meters</div>
    </div>
  );
}

export default LengthConverter;
