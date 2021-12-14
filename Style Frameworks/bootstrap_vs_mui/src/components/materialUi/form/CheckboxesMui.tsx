import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { FormGroup } from "react-bootstrap";

interface ICheckboxesMuiProps {
    labels: string[];
}

const CheckboxesMui = (props: ICheckboxesMuiProps) => {
    return (
        <FormGroup>
            {props.labels.map((checkbox) => {
                return (
                    <FormControlLabel
                        label={checkbox}
                        control={
                            <Checkbox
                                disabled={
                                    checkbox === "account info" ? true : false
                                }
                                defaultChecked={
                                    checkbox === "account info" ? true : false
                                }
                            />
                        }
                    />
                );
            })}
        </FormGroup>
    );
};

export default CheckboxesMui;
