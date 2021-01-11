import { Container } from "@material-ui/core";
import React from "react";
import classes from "./WinMessage.module.css";

const WinMessage = (props: any) => {
  return (
    <Container className={classes.WinMessage}>
      <h3 style={{ color: "red" }}>
        Congratulations, {props.winner} &#127881;
      </h3>
    </Container>
  );
};

export default WinMessage;
