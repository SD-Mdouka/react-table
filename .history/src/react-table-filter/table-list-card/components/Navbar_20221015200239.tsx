import { useState } from "react";
import { Container, Navbar, Row, Nav, Col } from "react-bootstrap";

const NavBar = ({ SearchMovies }: any) => {
  // const [serachValue, setSerachValue] = useState("");
  const onSearch = (serachValue:string) => {
    SearchMovies(serachValue);
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
              <i className="fa fa-serach"></i>
              <input
                type="text"
                placeholder="Search ..."
                className="form-control"
                onChange={(e)=> onSearch(e.target.value)}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
