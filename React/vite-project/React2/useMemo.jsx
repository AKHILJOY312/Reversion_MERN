import { useState, useMemo } from "react";

function AddCalculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [dummy, setDummy] = useState(0); // To demonstrate memoization

  // Memoize the addition result
  const result = useMemo(() => {
    console.log("Calculating sum...");
    return num1 + num2;
  }, [num1, num2]);

  return (
    <div>
      <h2>Addition Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <p>Result: {result}</p>
      <button onClick={() => setDummy((prev) => prev + 1)}>
        Dummy Update ({dummy})
      </button>
    </div>
  );
}

export default AddCalculator;
