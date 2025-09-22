import React, { Component } from "react";

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
function IAmBuggy() {
  throw new Error("I Buggy buggy ");
  return <p>this won't work</p>;
}
function ComponentA() {
  return <p>hi this is working fine</p>;
}
function ComponentB() {
  throw new Error("B also works ");
}
export default function App() {
  return (
    <>
      <ErrorBoundry fallback={<span> Somthing Went wrong </span>}>
        <ComponentA></ComponentA>
      </ErrorBoundry>
      <ComponentB></ComponentB>
    </>
  );
}
