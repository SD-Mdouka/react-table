import { AnyARecord } from "dns";
import React from "react";
import { Row } from "react-bootstrap";
import CardMovies from "./CardMovies";

const CardMoviesList = ({ movies }: any) => {
  const Listmovise = [...movies];
  return (
    <Row className="mt-3">
      {Listmovise.map(({ mov }: any) => {
        return <CardMovies mov={mov} />;
      })}
    </Row>
  );
};

export default CardMoviesList;
