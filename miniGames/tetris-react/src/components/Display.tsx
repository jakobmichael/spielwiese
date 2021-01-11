import React from "react";
import { StyledDisplay } from "./styles/StyledDisplay";

const Display = (props: any) => {
  return <StyledDisplay gameOver={props.gameOver}>{props.text}</StyledDisplay>;
};

export default Display;
