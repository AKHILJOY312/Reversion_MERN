//passing data  to the child from parent;

import React from "react";

function Child({ message }) {
  //(props)
  return <h1>{message}</h1>; //props.message
}

function App() {
  return (
    <div>
      <Child message="hello"></Child>
    </div>
  );
}

export default App;
