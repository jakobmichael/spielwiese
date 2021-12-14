import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import CheckboxesRb from "./CheckboxesRb";
import RadioButtonsRb from "./RadioButtonsRb";
import SelectRb from "./SelectRb";
import TextfieldRb from "./TextfieldRb";

const FormRb = () => {
    const [boxType, setBoxType] = useState<string>("checkboxes");

    const labels: string[] = [
        "advertisment mails",
        "business updates",
        "account info",
    ];

    return (
        <Form>
            <TextfieldRb />
            <Row>
                <Col className="col-lg-12">
                    <SelectRb handleSelect={setBoxType} />

                    {boxType === "checkboxes" ? (
                        <CheckboxesRb labels={labels} />
                    ) : (
                        <RadioButtonsRb labels={labels} />
                    )}
                </Col>
            </Row>
        </Form>
    );
};

export default FormRb;
