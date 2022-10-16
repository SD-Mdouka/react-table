import React from "react";
import { Row } from "react-bootstrap";
import CardMovies from "./CardMovies";

const CardMoviesList = ({ movies }: any) => {
  return (
    <Row className="mt-3">
      {movies.lenght > 1 ? (
        movies.map(({ mov }: any) => {
          return <CardMovies key={mov.id} mov={mov} />;
        })
      ) : (
        <h2 className="text-center p-5">Aucun List</h2>
      )}
    </Row>
  );
};

export default CardMoviesList;
