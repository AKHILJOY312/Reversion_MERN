import { useState } from "react";

// Child 1
function InputBox({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type something..."
    />
  );
}

// Child 2
function DisplayText({ text }) {
  return <h2>You typed: {text}</h2>;
}

// Parent
export default function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <InputBox value={text} onChange={setText} />
      <DisplayText text={text} />
    </div>
  );
}
