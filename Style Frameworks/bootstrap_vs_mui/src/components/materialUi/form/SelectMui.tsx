import React from "react";
import FormControl from "@mui/material/FormControl";
import { InputLabel, Select, MenuItem } from "@mui/material";
import classes from "../MaterialUi.module.scss";

interface ISelectMuiProps {
    value: string;
    handleChange: any;
}

const SelectMui = (props: ISelectMuiProps) => {
    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                className={classes.Select}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.value}
                label="Age"
                onChange={props.handleChange}
            >
                <MenuItem value={"checkboxes"}>Checkboxes</MenuItem>
                <MenuItem value={"radio button"}>Radio Buttons</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SelectMui;
