import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

import { ListProduct } from "./data";

const TableMenu = () => {
  const [itemData, setItemData] = useState(ListProduct);

  // filter by categories
  const filterbyCategory = (cat: string) => {
    const newArr = ListProduct.filter((item) => item.category === cat);
    setItemData(newArr);
  };

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
