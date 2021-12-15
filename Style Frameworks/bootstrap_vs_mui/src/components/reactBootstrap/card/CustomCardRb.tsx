import { Card, Row, Col } from "react-bootstrap";
import rbLogo from "../../../assets/images/RB_Logo.png";

const CustomCardRb = () => {
    return (
        <Row>
            <Col>
                <Card style={{ maxWidth: 245 }}>
                    <Card.Header>
                        <Card.Img variant="top" src={rbLogo} />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title> React Bootstrap</Card.Title>
                        <Card.Text>Bootstrap at its core</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href="https://react-bootstrap.github.io/">
                            About
                        </Card.Link>
                        <Card.Link href="https://github.com/react-bootstrap/react-bootstrap">
                            Github Project
                        </Card.Link>
                    </Card.Footer>
                </Card>
            </Col>
            <Col className="col-lg-8">
                <Card>
                    <Card.Header>
                        <Card.Title> React Bootstrap Compact</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            re-implementation of bootstrap components
                        </Card.Text>
                        <Card.Text>mobile first concept</Card.Text>
                        <Card.Text>
                            no jquery, no bootstrap.js dependencies
                        </Card.Text>
                        <Card.Text>12-column grid system</Card.Text>
                        <Card.Text>customization with css</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default CustomCardRb;
