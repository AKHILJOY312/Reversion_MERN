import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  if (count === 3) {
    throw new Error("Crashed at count 3!");
  }

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>inc</button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Counter />
    </ErrorBoundary>
  );
}

export default App;
