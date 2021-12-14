import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import SelectRb from "./SelectRb";
import TextfieldRb from "./TextfieldRb";

const FormRb = () => {
    const [boxType, setBoxType] = useState<string>("checkboxes");
    const [buttonType, setButtonType] = useState<string>("sent");

    const labels: string[] = [
        "advertisment mails",
        "business updates",
        "account info",
    ];

    const handleClick = () => {
        if (buttonType !== "sent") {
            setButtonType("sent");
        } else {
            setButtonType("not sent");
        }
    };

    return (
        <Form>
            <TextfieldRb />

            <SelectRb
                handleSelect={setBoxType}
                labels={labels}
                boxType={boxType}
            />
            <Col className="col-lg-1">
                <Button
                    className="btn-block"
                    type="submit"
                    variant={
                        buttonType === "sent" ? "outline-secondary" : "success"
                    }
                    onClick={handleClick}
                >
                    Submit
                </Button>
            </Col>
        </Form>
    );
};

export default FormRb;
