//using props;
import React, { useEffect, useRef } from "react";
const Child = ({ inputRef }) => {
  return <input type="text" name="" id="" ref={inputRef} />;
};
function App() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Child inputRef={inputRef}></Child>
    </div>
  );
}

export default App;
