import React from "react";
import { FormControlLabel, FormGroup, Radio, RadioGroup } from "@mui/material";
import { FormLabel } from "react-bootstrap";
import FormControl from "@mui/material/FormControl";

interface IRadioButtonsMuiProps {
    labels: string[];
}

const RadioButtonsMui = (props: IRadioButtonsMuiProps) => {
    return (
        <FormGroup>
            <FormControl component="fieldset">
                <FormLabel>Newsletters</FormLabel>
                <RadioGroup
                    row
                    aria-label="newsletters"
                    name="row-radio-buttons-group"
                >
                    {props.labels.map((checkbox) => {
                        return (
                            <FormControlLabel
                                label={checkbox}
                                value={checkbox}
                                control={
                                    <Radio
                                        defaultChecked={
                                            checkbox === "account info"
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        );
                    })}
                </RadioGroup>
            </FormControl>
        </FormGroup>
    );
};

export default RadioButtonsMui;
