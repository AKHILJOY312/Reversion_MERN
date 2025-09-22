//square a number

import { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const squareNumber = useMemo(() => {
    return number * number;
  }, [number]);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>
        the square of{number} is {squareNumber}
      </p>
    </div>
  );
}
export default App;
