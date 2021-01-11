import React from "react";
import { StyledStage } from "./styles/StyledStage";

import Cell from "./Cell";

const Stage = (props: any) => (
  <StyledStage width={props.stage[0].length} height={props.stage.length}>
    {props.stage.map((row) =>
      row.map((cell, x) => <Cell key={x} type={cell[0]} />)
    )}
  </StyledStage>
);

export default Stage;
