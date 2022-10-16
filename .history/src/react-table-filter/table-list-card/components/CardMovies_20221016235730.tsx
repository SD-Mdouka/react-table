import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMovies = ({ mov }: any) => {
  return (
    <Col xs="6" sm="6" lg="3" className="my-1">
      <Link to={`/movie/${mov.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500` + mov.poster_path}
            alt={mov.title}
            className="card__image"
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>Name User :{mov.title}</p>
              <p>Date Naissence:{mov.release_date}</p>
              <p>Type:{mov.vote_count}</p>
              <p>Racing:{mov.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovies;
