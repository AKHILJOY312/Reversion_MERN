//./Messages
// function Message() {
//   return <p>This component was lazily loaded!</p>;
// }

// export default Message;

import React, { lazy, Suspense } from "react";

// Lazily load the Message component
const Message = lazy(() => import("./Message"));

function App() {
  return (
    <div>
      <h2>Lazy Loading Example</h2>

      <Suspense fallback={<p>Loading component...</p>}>
        <Message />
      </Suspense>
    </div>
  );
}

export default App;
