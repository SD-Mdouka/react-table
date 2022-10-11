import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
// import { ListProduct } from "./components/data";

interface Prop {
  id: number;
  title: string;
  description: string;
  price: string;
  category: string;
  imgUrl: string;
  ItemProduct: [];
}
const App = () => {
  const [ItemData, setItemData] = useState([]);
  return (
    <div className="color-body font">
      <NavBar />
      <Container>
        <Header />
        <Category />
        {/* <ItemsList ItemProduct={ItemData} /> */}
      </Container>
    </div>
  );
};

export default App;
