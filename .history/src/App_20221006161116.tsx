import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/Navbar";
import Headers from "./components/Headers";

const App = () => {
  return (
    <div className="color-body font">
      <NavBar />
      <Container>
        <Headers />
      </Container>
    </div>
  );
};

export default App;
