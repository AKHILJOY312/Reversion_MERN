import React, { useRef, useImperativeHandle, forwardRef } from "react";

function CustomInput({ props, ref }) {
  const inputRef = useRef();

  // Only expose controlled methods to the parent
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} placeholder="Type something..." />;
}

export default function App() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleClear = () => {
    inputRef.current.clear();
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h2> With useImperativeHandle</h2>
      <CustomInput ref={inputRef} />
      <div style={{ marginTop: 10 }}>
        <button onClick={handleFocus}>Focus Input</button>
        <button onClick={handleClear} style={{ marginLeft: 10 }}>
          Clear Input
        </button>
      </div>
    </div>
  );
}
