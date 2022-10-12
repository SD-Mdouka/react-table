import { useState } from "react";
import { Container, Navbar, Row, Nav } from "react-bootstrap";

const NavBar = ({ filterbySerach }: any) => {
  const [serachValue, setSerachValue] = useState("");
  const onSerach = () => {
    filterbySerach(serachValue);
    setSerachValue("");
  };
  return (
    <Row>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">New Restaurant</div>
          </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <div className="d-flex">
              <input
                type="text"
                placeholder="Search ..."
                className="mx-2"
                onChange={(e) => {
                  setSerachValue(e.target.value);
                }}
                value={serachValue}
              />
              <button onClick={() => onSerach()} className="btn-search">
                Search
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
