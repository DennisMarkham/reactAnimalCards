import React from "react";
import Animal from "./components/animal";
import animals from "./animals.json";

const App = () => 
(
	<div>
<h1>My favorite animals are:</h1>
<Animal
      animal={animals[0].animal}
      l1={animals[0].l1}
      l2={animals[0].l2}
      l3={animals[0].l3}
    />
    <Animal
      animal={animals[1].animal}
      l1={animals[1].l1}
      l2={animals[1].l2}
      l3={animals[1].l3}
    />
    <Animal
      animal={animals[2].animal}
      l1={animals[2].l1}
      l2={animals[2].l2}
      l3={animals[2].l3}
    />
</div>
);

export default App;
