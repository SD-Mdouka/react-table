import React from "react";
import { Col } from "react-bootstrap";

const CardMovies = ({ movies }: any) => {
  return (
    <Col xs="6" sm="6" lg="3" className="my-1">
      <div className="card">
        <img
          src="ra68-TACOS-DE-LILLE-food.jpg"
          alt="image"
          className="card_image"
        />
        <div className="card_overlay">
          <div className="overlay_text text-center w-100 p-2">
            <p>Name User :</p>
            <p>Date Naissence:</p>
            <p>Type:</p>
            <p>Racing:</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CardMovies;
