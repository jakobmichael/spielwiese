import React from "react";
import { Form } from "react-bootstrap";
import CheckboxesRb from "./CheckboxesRb";
import RadioButtonsRb from "./RadioButtonsRb";

interface ISelectRbProps {
    handleSelect: any;
    boxType: string;
    labels: string[];
}

const SelectRb = (props: ISelectRbProps) => {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <Form.Select
                onChange={(event) => props.handleSelect(event.target.value)}
            >
                <option value="checkboxes">Checkboxes</option>
                <option value="radio buttons">Radio Buttons</option>
            </Form.Select>
            {props.boxType === "checkboxes" ? (
                <CheckboxesRb labels={props.labels} />
            ) : (
                <RadioButtonsRb labels={props.labels} />
            )}
        </div>
    );
};

export default SelectRb;
