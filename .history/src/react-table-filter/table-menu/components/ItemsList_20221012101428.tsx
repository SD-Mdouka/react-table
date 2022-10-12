import { Row, Col, Card } from "react-bootstrap";

const ItemsList = ({ itemData }: { itemData: any }) => {
  return (
    <Row className="">
      {itemData.length >= 1 ? (
        itemData.map((item: any) => {
          const { id, title, imgUrl, price, description } = item;
          return (
            <Col sm="12" className="mb-3">
              <Card
                key={id}
                className="d-flex flex-row"
                style={{ backgroundColor: "#f8f8f8" }}
              >
                <Card.Img className="img-item" variant="top" src={imgUrl} />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div className="item-title">{title}</div>
                    <div className="item-price">{price}</div>
                  </Card.Title>
                  <Card.Text className="py-2">
                    <div className="item-description">{description}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h3 className="text-center">Aucun Des Categories </h3>
      )}
    </Row>
  );
};

export default ItemsList;
