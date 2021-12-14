import React, { useState } from "react";
import { TextField } from "@mui/material";

const TextFieldMui = () => {
    const [entryOne, setEntryOne] = useState<string>("");

    return (
        <>
            <TextField
                required
                id="outlined-error"
                onChange={(event) => setEntryOne(event.target.value)}
                defaultValue={"  "}
                label={entryOne === "" ? "Error" : "required"}
                error={entryOne === "" ? true : false}
            />
            <TextField
                disabled
                id="outlined-disabled"
                label="Disabled"
                defaultValue=""
                helperText="E-Mail"
            />
            <TextField
                variant="filled"
                color="success"
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            <TextField
                color="secondary"
                fullWidth
                id="filled-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                variant="filled"
            />
        </>
    );
};

export default TextFieldMui;
