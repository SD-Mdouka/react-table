import React from "react";
import { Row } from "react-bootstrap";
import CardMovies from "./CardMovies";

const CardMoviesList = () => {
  return (
    <Row className="mt-3">
      <CardMovies />
    </Row>
  );
};

export default CardMoviesList;
