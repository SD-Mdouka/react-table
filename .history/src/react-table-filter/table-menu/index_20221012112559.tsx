import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Category from "./components/Category";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import NavBar from "./components/Navbar";

import { ListProduct } from "./data";

const TableMenu = () => {
  const [itemData, setItemData] = useState(ListProduct);

  // filter by categories
  const filterbyCategory = (cat: string) => {
    if (cat === "Tout") {
      setItemData(ListProduct);
    } else {
      const newArr = ListProduct.filter((item) => item.category === cat);
      setItemData(newArr);
    }
  };
  //get all category filtering
  const allCat = [new Set(ListProduct.map((i) => i.category))];
  console.log(...allCat[0]);
  return (
    <div className="color-body font">
      <NavBar />
      <Container>
        <Header />
        <Category filterbyCategory={filterbyCategory} />
        <ItemsList itemData={itemData} />
      </Container>
    </div>
  );
};

export default TableMenu;
