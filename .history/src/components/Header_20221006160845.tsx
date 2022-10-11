import React from "react";
import { Container, Navbar, Row, Col, Form } from "react-bootstrap";

const Header = () => {
  return (
    <Row>
      <Col sm="12" className="justify-content-center text-center">
        <div className="title">Menu Restaurant</div>
        <div className="justify-content-center d-flex">
          <p className="underline"></p>
        </div>
      </Col>
    </Row>
  );
};

export default Header;