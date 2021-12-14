import React, { useState } from "react";
import { Box } from "@mui/system";
import TextFieldMui from "./TextFieldMui";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup } from "react-bootstrap";
import CheckboxesMui from "./CheckboxesMui";
import RadioButtonsMui from "./RadioButtonsMui";
import { SelectChangeEvent } from "@mui/material/Select";
import SelectMui from "./SelectMui";
import Button from "@mui/material/Button";

const FormMui = () => {
    const [selectValue, setSelectValue] = useState<string>("checkboxes");
    const [buttonColor, setButtonColor] = useState<string>("secondary");

    const handleSelectChange = (event: SelectChangeEvent) => {
        setSelectValue(event.target.value);
    };

    const handleButtonClick = () => {
        if (buttonColor === "secondary") {
            setButtonColor("success");
        } else {
            setButtonColor("secondary");
        }
    };

    const labels: string[] = [
        "advertisment mails",
        "business updates",
        "account info",
    ];

    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "500" },
            }}
            noValidate
            autoComplete="off"
        >
            <TextFieldMui />
            <div
                style={{
                    display: "flex",
                    margin: "5% 0 5% 0 ",
                    justifyContent: "space-between",
                }}
            >
                <SelectMui
                    handleChange={handleSelectChange}
                    value={selectValue}
                />
                {selectValue === "checkboxes" ? (
                    <CheckboxesMui labels={labels} />
                ) : (
                    <RadioButtonsMui labels={labels} />
                )}
            </div>
            <div
                style={{
                    display: "flex",
                    margin: "5% 0 5% 0 ",
                    justifyContent: "space-between",
                }}
            >
                <Button
                    color={
                        buttonColor === "secondary" ? "secondary" : "success"
                    }
                    variant={
                        buttonColor === "secondary" ? "outlined" : "contained"
                    }
                    onClick={handleButtonClick}
                >
                    Submit
                </Button>
                <Fab size="small" aria-label="like" color="secondary">
                    <FavoriteIcon />
                </Fab>
            </div>
        </Box>
    );
};

export default FormMui;
