import { Row, Col, Card } from "react-bootstrap";
interface Product {
  ItemProduct: [];
}
const ItemsList: React.FC<Product> = ({ ItemProduct }) => {
  return (
    <Row className="">
      {ItemProduct.map((item) => {
        return (
          <Col sm="12" className="mb-3">
            <Card
              className="d-flex flex-row"
              style={{ backgroundColor: "#f8f8f8" }}
            >
              <Card.Img className="img-item" variant="top" src={item.imgUrl} />
              <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                  <div className="item-title">{item.title}</div>
                  <div className="item-price">{item.price}</div>
                </Card.Title>
                <Card.Text className="py-2">
                  <div className="item-description">{item.description}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ItemsList;
