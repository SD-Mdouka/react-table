import { Row, Col, Card } from "react-bootstrap";

const ItemsList = () => {
  return (
    <Row className="">
      <Col sm="12" className="mb-3">
        <Card>
          <Card.Img variant="top" src="ra68-TACOS-DE-LILLE-food.jpg" />
          <Card.Body>
            <Card.Title>Déjeuner, Dîner</Card.Title>
            <Card.Text>
              Réservations, Places assises, Accès personnes handicapées, Service
              de table
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ItemsList;
