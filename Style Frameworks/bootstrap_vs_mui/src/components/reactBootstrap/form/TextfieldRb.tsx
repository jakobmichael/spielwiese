import React from "react";
import { FloatingLabel, Form, Row } from "react-bootstrap";

const TextfieldRb = () => {
    return (
        <div>
            <Row>
                <Form.Group className="col-lg-4">
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                    <Form.Text>please enter a valid email address</Form.Text>
                </Form.Group>
                <Form.Group className="col-lg-4">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="col-lg-4">
                    <Form.Control
                        type="text"
                        readOnly
                        placeholder="reading only..."
                    />
                </Form.Group>
            </Row>
            <FloatingLabel controlId="floatingTextarea" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    rows={3}
                />
            </FloatingLabel>
        </div>
    );
};

export default TextfieldRb;
