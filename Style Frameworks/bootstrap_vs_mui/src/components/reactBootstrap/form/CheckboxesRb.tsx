import React from "react";
import { Form } from "react-bootstrap";

interface ICheckboxesRbProps {
    labels: string[];
}

const CheckboxesRb = (props: ICheckboxesRbProps) => {
    return (
        <Form.Group className="col-lg-10">
            {props.labels.map((label) => {
                return (
                    <Form.Check
                        inline
                        type="checkbox"
                        label={label}
                        checked={label === "account info" ? true : undefined}
                        disabled={label === "account info" ? true : false}
                    />
                );
            })}
        </Form.Group>
    );
};

export default CheckboxesRb;
