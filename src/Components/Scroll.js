import React from "react";

const Scroll = (props) => {
  //children is a property that goes inbetween the tags and gets displayed
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
