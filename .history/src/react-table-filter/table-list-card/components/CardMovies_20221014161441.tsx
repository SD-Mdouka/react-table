import React from "react";
import { Col } from "react-bootstrap";

const CardMovies = () => {
  return (
    <Col xs="6" sm="6" lg="3" className="my-1">
      <div className="card">
        <img
          src="ra68-TACOS-DE-LILLE-food.jpg"
          alt="image"
          className="card_image"
        />
      </div>
    </Col>
  );
};

export default CardMovies;
