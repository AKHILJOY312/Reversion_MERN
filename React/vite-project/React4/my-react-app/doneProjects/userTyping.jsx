import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (text) {
      setIsTyping(true);
      const timeOutId = setTimeout(() => setIsTyping(false), 3000);

      return () => clearTimeout(timeOutId);
    } else {
      setIsTyping(false);
    }
  }, [text]);

  return (
    <>
      <div className="mx-auto flex max-w-sm items-center">
        <input
          type="text"
          placeholder="Type something"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {isTyping && <p className="text-green-500">User is Typing</p>}
      </div>
    </>
  );
}

export default App;
