import React from "react";
import { Container } from "react-bootstrap";
import CardMoviesList from "./components/CardMoviesList";
import NavBar from "./components/Navbar";
import "./style.css";

const TableCard = () => {
  return (
    <div className="font color-body">
      <NavBar />
      <Container>
        <CardMoviesList />
      </Container>
    </div>
  );
};

export default TableCard;
