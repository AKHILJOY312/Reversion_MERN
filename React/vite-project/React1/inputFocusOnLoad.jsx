import React, { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef();

  // Focus the input after component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Empty dependency array = run once after mount

  return (
    <div>
      <input type="text" placeholder="Type here..." ref={inputRef} />
    </div>
  );
}

export default App;
