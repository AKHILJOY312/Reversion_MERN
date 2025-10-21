import { useState, useEffect, useRef } from "react";

function InputFrom() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("provide the name for submitting;");
      inputRef.current.focus();
      return;
    }
    console.log("Submitted name is :", name);
    setName("");
  };

  return (
    <>
      <div className="container">
        <h2>Enter your name</h2>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="your name"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default InputFrom;
