import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { ListProduct } from "./components/data";
interface Item {
  ItemData: [];
}
const App = () => {
  const [ItemData, setItemData] = useState(ListProduct);
  const parame = {
    ItemData,
  };
  return (
    <div className="color-body font">
      <NavBar />
      <Container>
        <Header />
        <Category />
        <ItemsList {...parame} />
      </Container>
    </div>
  );
};

export default App;
