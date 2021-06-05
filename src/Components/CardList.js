import React from "react";
import Card from "./Card";

const CardList = (props) => {
  if (true) {
    throw new Error("Nooooo???");
  }
  const robots = props.robots;
  const CardComponent = robots.map((item, i) => {
    return (
      <Card
        key={item.id}
        id={item.id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div>{CardComponent}</div>;
};

export default CardList;
