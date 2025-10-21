import React from "react";

function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Props received:", props);
    return <WrappedComponent {...props} />;
  };
}

// Normal Component
function Hello({ name }) {
  return <h1>Hello, {name}</h1>;
}

// Enhanced Component
const HelloWithLogger = withLogger(Hello);

export default function App() {
  return <HelloWithLogger name="AJ" />;
}
