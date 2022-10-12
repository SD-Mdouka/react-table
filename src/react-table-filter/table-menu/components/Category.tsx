import { Row, Col } from "react-bootstrap";

const Category = ({ filterbyCategory, ListCat }: any) => {
  //Filter by category
  const onFilter = (cat: string) => {
    filterbyCategory(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {ListCat.length >= 1 ? (
          ListCat.map((cat: string) => {
            return (
              <div key={cat}>
                <button onClick={() => onFilter(cat)} className="btn mx-2">
                  {cat}
                </button>
              </div>
            );
          })
        ) : (
          <h4>Aucun category</h4>
        )}
      </Col>
    </Row>
  );
};

export default Category;
