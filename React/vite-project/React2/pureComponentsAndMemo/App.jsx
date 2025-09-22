// import React, { Component, PureComponent } from "react";

// class PureClassComponent extends PureComponent {
//   constructor() {
//     super();
//     this.state = {
//       name: "React JS",
//     };
//   }

//   changeName = () => {
//     this.setState({ name: "React JS" });
//   };

//   render() {
//     console.log("FirstComponent -- Render method called");
//     return (
//       <div>
//         <p> Name is : {this.state.name} </p>
//         <button onClick={this.changeName}>Change Name</button>
//       </div>
//     );
//   }
// }

// export default PureClassComponent;
import React, { useState } from "react";
import CustomLabel from "./Child";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <CustomLabel name="Simple Counter app" />
      <p>Counter is : {counter} </p>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  );
};
export default CounterComponent;
