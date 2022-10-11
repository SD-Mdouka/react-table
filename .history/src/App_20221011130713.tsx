import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { ListProduct } from "./components/data";

interface Prop {
  id: number;
  title: string;
  description: string;
  price: string;
  category: string;
  imgUrl: string;
}
const App = () => {
  const [ItemData, setItemData] = useState([
    {
      id: Math.random(),
      title: "DeJoneer, Diner",
      description:
        "Satisfaction, Place Assisis, X-Personis Handicapes,Service de Table",
      price: "120 DH",
      category: "Meal Breakfast",
      imgUrl: "ra68-TACOS-DE-LILLE-food.jpg",
    },
    {
      id: Math.random(),
      title: "DeJoneer, Diner",
      description:
        "Satisfaction, Place Assisis, X-Personis Handicapes,Service de Table",
      price: "120 DH",
      category: "Meal Lunch",
      imgUrl: "ra68-TACOS-DE-LILLE-food.jpg",
    },
    {
      id: Math.random(),
      title: "DeJoneer, Diner",
      description:
        "Satisfaction, Place Assisis, X-Personis Handicapes,Service de Table",
      price: "120 DH",
      category: "Meal Dinner",
      imgUrl: "ra68-TACOS-DE-LILLE-food.jpg",
    },
    {
      id: Math.random(),
      title: "DeJoneer, Diner",
      description:
        "Satisfaction, Place Assisis, X-Personis Handicapes,Service de Table",
      price: "120 DH",
      category: "Meal Breakfast",
      imgUrl: "ra68-TACOS-DE-LILLE-food.jpg",
    },
    {
      id: Math.random(),
      title: "DeJoneer, Diner",
      description:
        "Satisfaction, Place Assisis, X-Personis Handicapes,Service de Table",
      price: "120 DH",
      category: "Meal Dinner",
      imgUrl: "ra68-TACOS-DE-LILLE-food.jpg",
    },
  ]);
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
