import React from "react";

import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = (props: any) => (
  <StyledStartButton onClick={props.callback}>START GAME</StyledStartButton>
);

export default StartButton;
