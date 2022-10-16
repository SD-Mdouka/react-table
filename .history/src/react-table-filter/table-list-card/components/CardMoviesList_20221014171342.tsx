import React from "react";
import { Row } from "react-bootstrap";
import CardMovies from "./CardMovies";

const CardMoviesList = ({ movies }: any) => {
  return (
    <Row className="mt-3">
      <CardMovies movies={movies} />
    </Row>
  );
};

export default CardMoviesList;
