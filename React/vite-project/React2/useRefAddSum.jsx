import { useRef, useState } from "react";

function AddCalculator() {
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    const num1 = Number(num1Ref.current.value);
    const num2 = Number(num2Ref.current.value);
    setResult(num1 + num2);
  };

  return (
    <div>
      <h2>Add Two Numbers</h2>
      <input type="number" ref={num1Ref} defaultValue="0" />
      <input type="number" ref={num2Ref} defaultValue="0" />
      <button onClick={handleAdd}>Add</button>
      <p>The result is: {result}</p>
    </div>
  );
}

export default AddCalculator;
