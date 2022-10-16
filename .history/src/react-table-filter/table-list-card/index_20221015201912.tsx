import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CardMoviesList from "./components/CardMoviesList";
import NavBar from "./components/Navbar";
import "./style.css";

const TableCard = () => {
  //list movies
  const [movies, setMovies] = useState([]);

  //get all movies filme
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=497503c38549d10e74795b4ebe84b909&language=en-US&page=3"
    );
    setMovies(res.data.results);
  };
  //to serach in api
  const SearchMovies = async (word: string) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=497503c38549d10e74795b4ebe84b909&query=${word}&language=en-US`
      );
      setMovies(res.data.results);
    }
  };

  useEffect(() => {
    //execute effect
    getAllMovies();
  }, []);

  return (
    <div className="font color-body">
      <NavBar search={SearchMovies} />
      <Container>
        <CardMoviesList movies={[...movies]} />
      </Container>
    </div>
  );
};

export default TableCard;
