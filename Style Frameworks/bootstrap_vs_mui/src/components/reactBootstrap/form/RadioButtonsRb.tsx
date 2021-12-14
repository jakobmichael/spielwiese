import React from "react";
import { Form } from "react-bootstrap";

interface IRadioButtonsRbProps {
    labels: string[];
}

const RadioButtonsRb = (props: IRadioButtonsRbProps) => {
    return (
        <Form.Group className="col-lg-10">
            {props.labels.map((label) => {
                return (
                    <Form.Check
                        inline
                        type="radio"
                        label={label}
                        name="group 1"
                    />
                );
            })}
        </Form.Group>
    );
};

export default RadioButtonsRb;
