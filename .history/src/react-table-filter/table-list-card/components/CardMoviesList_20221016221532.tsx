import { AnyARecord } from "dns";
import React from "react";
import { Row } from "react-bootstrap";
import CardMovies from "./CardMovies";
import Pageination from "./Pageination";

const CardMoviesList = ({ movies, getPage, countPages }: any) => {
  return (
    <Row className="mt-3">
      {movies.map((mov: any) => {
        return <CardMovies key={mov.id} mov={mov} />;
      })}
      <Pageination getPage={getPage} countPages={countPages} />
    </Row>
  );
};

export default CardMoviesList;
