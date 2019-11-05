import React from "react";
import animals from "./animals.json";

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

render() {return (
<div><button onClick={this.handleWolves}>Wolves</button>
<button onClick={this.handleCheetahs}>Cheetahs</button><button onClick={this.handleOwls}>Owls</button>
  <div style={{color:"{animals[this.state.count].color}"}}>
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

