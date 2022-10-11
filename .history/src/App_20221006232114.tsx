import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { ListProduct } from "./components/data";

const App = () => {
  interface Product {
    listProd: [];
  }
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
