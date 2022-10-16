import { Row, Col } from "react-bootstrap";
import { Roll } from "react-awesome-reveal";

const Category = ({ filterbyCategory, ListCat }: any) => {
  //Filter by category
  const onFilter = (cat: string) => {
    filterbyCategory(cat);
  };
  return (
    <Row className="mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <Roll>
          {ListCat.length >= 1 ? (
            ListCat.map((cat: string) => {
              return (
                <div key={cat}>
                  <button onClick={() => onFilter(cat)} className="btn">
                    {cat}
                  </button>
                </div>
              );
            })
          ) : (
            <h4>Aucun category</h4>
          )}
        </Roll>
      </Col>
    </Row>
  );
};

export default Category;
