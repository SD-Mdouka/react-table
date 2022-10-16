import { AnyARecord } from "dns";
import React from "react";
import { Row } from "react-bootstrap";
import CardMovies from "./CardMovies";
import Pageination from "./Pagination";

const CardMoviesList = ({ movies }: any) => {
  return (
    <Row className="mt-3">
      {movies.map((mov: any) => {
        return <CardMovies mov={mov} />;
      })}
      <Pageination />
    </Row>
  );
};

export default CardMoviesList;
