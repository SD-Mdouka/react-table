import axios from "axios";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CardMoviesList from "./components/CardMoviesList";
import NavBar from "./components/Navbar";
import "./style.css";

const TableCard = () => {
  const getAllMovies = () => {
    const res: any = axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=497503c38549d10e74795b4ebe84b909&language=en-US"
    );
    console.log(res.data.results);
  };
  useEffect(() => {
    getAllMovies();
  }, []);

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
