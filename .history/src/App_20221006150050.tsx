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
function sumTotal<Type>(a: Type, b: Type): Type {
  return a;
}

const App = ({ num = " salah" }: Pros) => {
  return <div className="App">hello type{num + sumTotal("1", "2")}</div>;
};

export default App;
