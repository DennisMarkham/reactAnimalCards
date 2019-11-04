import React from "react";

const animal = props => (
  <div className="animal">
    <h2>{props.animal}</h2>
    <h3>What are {props.animal} made of?</h3>
    <ol>
    <li>{props.l1}</li>
    <li>{props.l2}</li>
    <li>{props.l3}</li>
    </ol>
  </div>
);

export default animal;

