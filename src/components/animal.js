import React from "react";
import animals from "./animals.json";
import "./animals.css";

class Animal extends React.Component
{

	 state = {
    count: 0
  };

  handleWolves = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: 0});
  };


  handleCheetahs = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: 1});
  };


  handleOwls = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: 2});
  };

//why does "backGround color not work"?
//even when its the only element it does not work.
//but I got it to show up before when I did "backgroundColor:animals[this.state.count].color"
//so its like the problem is something in the js...oh my gosh, hold
render() {return (
<div><button onClick={this.handleWolves}>Wolves</button>
<button onClick={this.handleCheetahs}>Cheetahs</button><button onClick={this.handleOwls}>Owls</button>
  <div style={{color:animals[this.state.count].color, backgroundColor:animals[this.state.count].background}}>
    <h2>{animals[this.state.count].animal}</h2>
    <h3>What are {animals[this.state.count].animal} made of?</h3>
    <ol>
    <li>{animals[this.state.count].l1}</li>
    <li>{animals[this.state.count].l2}</li>
    <li>{animals[this.state.count].l3}</li>
    </ol>
  </div>
  </div>
);
}
}

export default Animal;
