import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { ListProduct } from "../data";

const App = () => {

    const [ItemData, setItemData] = useState(ListProduct);
  return (
    <div className="color-body font">
      <NavBar />
      <Container>
        <Header />
        <Category />
        <ItemsList itemProduct={ItemData} />
      </Container>
    </div>
  );
};

export default App;
