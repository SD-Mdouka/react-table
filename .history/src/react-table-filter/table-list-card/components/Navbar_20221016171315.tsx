import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IconSearch } from "./Icon-Search";

const NavBar = ({ searchMovies }: any) => {
  const onSearch = (serachValue: string) => {
    searchMovies(serachValue);
  };
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            Logo
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="serach w-100">
              <input
                type="text"
                placeholder="Search ..."
                className="form-control"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
            <IconSearch className="fa-serach" size="24" color={"#333"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
