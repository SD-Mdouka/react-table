import { Row, Col, Card } from "react-bootstrap";

const ItemsList = () => {
  return (
    <Row className="">
      <Col sm="12" className="mb-3">
        <Card
          className="d-flex flex-row"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <Card.Img
            className="img-item"
            variant="top"
            src="ra68-TACOS-DE-LILLE-food.jpg"
          />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between">
              <div className="item-title">Déjeuner, Dîner</div>
              <div className="item-price">120 DH</div>
            </Card.Title>
            <Card.Text className="py-2">
              <div className="item-description">
                Réservations, Places assises, Accès personnes handicapées,
                Service de table
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ItemsList;
