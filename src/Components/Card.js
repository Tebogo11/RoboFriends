import React from "react";

//Can only return one element
const Card = (props) => {
  const { name, email } = props;
  return (
    <div className="tc bg-light-green dib pa3 ma2 grow bw2 shadow-5">
      <img alt="robot" src={`https://robohash.org/${props.id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p> {email}</p>
      </div>
    </div>
  );
};

export default Card;
