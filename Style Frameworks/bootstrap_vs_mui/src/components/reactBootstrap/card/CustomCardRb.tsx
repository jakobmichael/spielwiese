import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import sivislogo from "../../../assets/images/sivislogo.png";

const CustomCardRb = () => {
  return (
    <Card style={{ maxWidth: 245 }}>
      <Card.Img variant="top" src={sivislogo} />
      <Card.Body>
        <Card.Title> Smart Simple Safe</Card.Title>
        <Card.Text>
          Das Ziel der SIVIS ist es, aus der Kombination von intelligenter
          Produktentwicklung, qualifizierter Beratung und effektiver
          Projektumsetzung ganzheitliche Software-Lösungen im SAP Umfeld
          anzubieten.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default CustomCardRb;
