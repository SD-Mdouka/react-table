import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";

const App = () => {
  return (
    <div className="color-body font">
      <NavBar />
      <Container>
        <Header />
        <Category />
        <ItemsList />
      </Container>
    </div>
  );
};

export default App;
