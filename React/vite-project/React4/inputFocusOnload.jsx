import React, { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current.focus()) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div>
      <input type="text" placeholder="Type here..." ref={inputRef} />
    </div>
  );
}

export default App;
