import React from "react";
import "./App.css";

interface Pros {
  num?: number;
}

const App = ({ num }: Pros) => {
  return <div className="App">hello type{num}</div>;
};

export default App;
