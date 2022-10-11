import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { ListProduct } from "./components/data";

const App = () => {
  const [itemData, setItemData] = useState(ListProduct);

  // filter by categories
  const filterbyCategory = (cat: any) => {
    const newArr = ListProduct.filter((item) => item.category === cat);
    setItemData(newArr);
  };

  return (
    <div className="color-body font">
      <NavBar />
      <Container>
        <Header />
        <Category />
        <ItemsList itemData={itemData} />
      </Container>
    </div>
  );
};

export default App;
