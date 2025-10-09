import React, { useRef, useEffect, forwardRef } from "react";

function CustomInput({ props, ref }) {
  // Internal input ref
  const inputRef = useRef();

  // Expose inputRef directly to parent
  useEffect(() => {
    if (ref) {
      ref.current = inputRef.current;
    }
  }, [ref]);

  return <input ref={inputRef} placeholder="Type here..." />;
}

export default function App() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h2>❌ Without useImperativeHandle</h2>
      <CustomInput ref={inputRef} />
      <button onClick={handleFocus} style={{ marginTop: 10 }}>
        Focus Input
      </button>
    </div>
  );
}
