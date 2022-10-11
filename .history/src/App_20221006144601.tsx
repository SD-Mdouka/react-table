import React from "react";
import "./App.css";
class ConnectDB<Type> {
  constructor(public baseURL: string, public response: string) {
    console.log(`url is ${baseURL} and response is ${response}`);
  }
}

interface Pros {
  num?: number;
}
const Db = new ConnectDB<string>("connect.api", "300");
const App = ({ num = 2 }: Pros) => {
  return <div className="App">hello type{num}</div>;
};

export default App;
