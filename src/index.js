import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Hello from "./FirstComponent/Hello";

import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
//Data

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
  //I can give the Hello component access to data with props( in this case greeting)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
