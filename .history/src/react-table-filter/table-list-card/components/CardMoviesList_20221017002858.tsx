import { AnyARecord } from "dns";
import React from "react";
import { Row } from "react-bootstrap";
import CardMovies from "./CardMovies";
import Pageination from "./Pageination";

const CardMoviesList = ({ movies, getPage, countPages }: any) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov: any) => {
          return <CardMovies key={mov.id} mov={mov} />;
        })
      ) : (
        <h2>Aucuin Filme ...</h2>
      )}
      {movies.length >= 1 ? (
        <Pageination getPage={getPage} countPages={countPages} />
      ) : null}
    </Row>
  );
};

export default CardMoviesList;
