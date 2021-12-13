import { Card } from "react-bootstrap";
import sivislogo from "../../../assets/images/sivislogo.png";

const CustomCardRb = () => {
  return (
    <Card style={{ maxWidth: 245 }}>
      <Card.Header>
        <Card.Img variant="top" src={sivislogo} />
      </Card.Header>
      <Card.Body>
        <Card.Title> Smart Simple Safe</Card.Title>
        <Card.Text>SAP-Sicherheit in den besten Händen</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default CustomCardRb;
