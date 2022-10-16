import React from "react";
import { Col } from "react-bootstrap";

const CardMovies = ({ mov }: any) => {
  return (
    <Col xs="6" sm="6" lg="3" className="my-1">
      <div className="card">
        {/* <img
          src={`https://image.tmdb.org/t/p/w500` + mov.backdrop_path}
          alt={mov.title}
          className="card_image"
        /> */}
        <div className="card_overlay">
          <div className="overlay_text text-center w-100 p-2">
            <p>Name User :{mov.title}</p>
            <p>Date Naissence:{mov.release_date}</p>
            <p>Type:{mov.vote_count}</p>
            <p>Racing:{mov.vote_average}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CardMovies;
