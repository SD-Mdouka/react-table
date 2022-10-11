import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <div className="color-body font">
      <NavBar />
      <Container></Container>
    </div>
  );
};

export default App;
