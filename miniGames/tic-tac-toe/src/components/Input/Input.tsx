import { TextField } from "@material-ui/core";
import React from "react";

interface ThisProps {
  player: string;
  function: any;
  color: any;
}

const Input = (props: ThisProps) => {
  return (
    <>
      <TextField
        type="text"
        placeholder={props.player}
        defaultValue={props.player}
        onChange={(event) => props.function(event)}
        variant="filled"
        color="secondary"
        style={{
          border: "3px solid",
          borderColor: props.color,
          marginBottom: "25px",
        }}
      />
    </>
  );
};

export default Input;
