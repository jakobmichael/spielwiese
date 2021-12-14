import React from "react";
import { Form } from "react-bootstrap";

interface ISelectRbProps {
    handleSelect: any;
}

const SelectRb = (props: ISelectRbProps) => {
    return (
        <Form.Group className="col-lg-2">
            <Form.Select
                onChange={(event) => props.handleSelect(event.target.value)}
            >
                <option value="checkboxes">Checkboxes</option>
                <option value="radio buttons">Radio Buttons</option>
            </Form.Select>
        </Form.Group>
    );
};

export default SelectRb;
