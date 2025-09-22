import React, { useState } from "react";

export default function Child({ onSend }) {
  const [input, setInput] = useState("");

  

  return (
    <div>
      <h3>Child Component</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={() => onSend(input)}>Send to Parent</button>
    </div>
  );
}
