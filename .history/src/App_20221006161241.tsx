import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="color-body font">
      <NavBar />
      <Container>
        <Header />
      </Container>
    </div>
  );
};

export default App;
