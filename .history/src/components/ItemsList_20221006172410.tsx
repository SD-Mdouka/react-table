import { Row, Col, Card } from "react-bootstrap";

const ItemsList = () => {
  return (
    <Row className="">
      <Col sm="12" className="mb-3">
        <Card className="d-flex flex-row">
          <Card.Img
            className="img-item"
            variant="top"
            src="ra68-TACOS-DE-LILLE-food.jpg"
          />
          <Card.Body>
            <Card.Title>
              <div className="item-title">Déjeuner, Dîner</div>
            </Card.Title>
            <Card.Text className="">
              <div className="item-title">
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
