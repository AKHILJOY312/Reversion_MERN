import React, { useRef, useState } from "react";

function App() {
  const inputRef = useRef();
  const [state, setState] = useState();

  return (
    <div>
      <input type="text" ref={inputRef} />

      <button onClick={() => setState(inputRef.current.value)}>
        get the value
      </button>
      <p>your input:{state}</p>
    </div>
  );
}

export default App;
