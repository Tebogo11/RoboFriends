import React, { Component } from "react";
import "./Hello.css";

//Each component is in its own scope, without worrying about other domains
// class Hello extends Component {
//   render() {
//     return (
//       //Dont use class because its reserved in JS and this is
//       //JSX not html sytanx
//       <div className="f1 tc">
//         <h1>Hello World</h1>
//         <p>{this.props.greeting}</p>
//       </div>
//       //Gained access from index.js to greeting
//     );
//   }
// }

//Same ^
const Hello = (props) => {
  return (
    <div className="f1 tc">
      <h1>Hello World</h1>
      <p>{props.greeting}</p>
    </div>
  );
};

// export default -> only exports one thing
export default Hello;
