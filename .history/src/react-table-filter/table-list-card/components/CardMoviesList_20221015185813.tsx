import { AnyARecord } from "dns";
import React from "react";
import { Row } from "react-bootstrap";
import CardMovies from "./CardMovies";

const CardMoviesList = ({ movies }: any) => {
  console.log(movies);
  return (
    <Row className="mt-3">
      {movies.map(({ mov }: any) => {
        return <CardMovies mov={mov} />;
      })}
    </Row>
  );
};

export default CardMoviesList;
