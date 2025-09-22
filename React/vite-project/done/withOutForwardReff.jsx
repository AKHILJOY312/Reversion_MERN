import { useRef } from "react";

function MyInput({ ref, ...props }) {
  return <input {...props} ref={ref} />;
}

export default function App() {
  const inputRef = useRef();
  return <MyInput type="number" placeholder="input there" ref={inputRef} />;
}
