import React from "react";

//State - an object that describes your application
//State an change
//props are things that come from state
//Parent feeds the child state (props)

const SearchBox = (props) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robot"
        onChange={props.SearchChange}
      />
    </div>
  );
};

export default SearchBox;
