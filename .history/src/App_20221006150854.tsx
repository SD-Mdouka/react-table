import React from "react";
import "./App.css";
class ConnectDB<Type> {
  constructor(public baseURL: string, public response: Type) {
    console.log(`url is ${baseURL} and response is ${response}`);
  }
}

interface Pros {
  num?: any;
}
const Db = new ConnectDB("connect.api", 300);
const sumTotal = <T, B>(a: T, b: B): string => {
  return a + " " + b;
};

const App = ({ num = " salah" }: Pros) => {
  return <div className="App">hello type{num + sumTotal("1", 2)}</div>;
};

export default App;
