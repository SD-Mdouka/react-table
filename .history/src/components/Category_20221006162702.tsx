import React from "react";
import { Row, Col } from "react-bootstrap";

const Category = () => {
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <div>
          <button className="btn mx-2">Touts</button>
          <button className="btn mx-2">Matain</button>
          <button className="btn mx-2">Noir</button>
        </div>
      </Col>
    </Row>
  );
};

export default Category;
