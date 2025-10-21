import React, { useState } from "react";

function Child({ onDataSend }) {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    onDataSend(inputValue); // send data to parent
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something"
      />
      <button onClick={handleSend}>Send to Parent</button>
    </div>
  );
}

function App() {
  const [message, setMessage] = useState("");

  const handleDataFromChild = (data) => {
    setMessage(data); // update parent state
  };

  return (
    <div>
      <Child onDataSend={handleDataFromChild} />
      <h2>Message from child: {message}</h2>
    </div>
  );
}

export default App;
