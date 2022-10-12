import { Row, Col } from "react-bootstrap";

const Category = ({ filterbyCategory }: { filterbyCategory: any }) => {
  const onFilter = (cat: string) => {
    filterbyCategory(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <div>
          <button
            onClick={() => onFilter("Meal Breakfast")}
            className="btn mx-2"
          >
            Meal Breakfast
          </button>
          <button className="btn mx-2">Matain</button>
          <button onClick={() => onFilter("Tout")} className="btn mx-2">
            Tout
          </button>
        </div>
      </Col>
    </Row>
  );
};

export default Category;
