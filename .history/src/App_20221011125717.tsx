import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { ListProduct } from "./components/data";

interface Prop {
  ItemProduct: [];
}
const App: React.FC<Prop> = () => {
  const [ItemData, setItemData] = useState<
    (number | string | string | string | string)[]
  >([]);
  return (
    <div className="color-body font">
      <NavBar />
      <Container>
        <Header />
        <Category />
        <ItemsList ItemProduct={ItemData} />
      </Container>
    </div>
  );
};

export default App;
