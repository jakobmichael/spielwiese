import { Container } from "@material-ui/core";
import React, { useState } from "react";
import classes from "./App.module.css";
import Board from "./components/Board/Board";
import Input from "./components/Input/Input";

function App() {
  const [player1, setPlayer1] = useState<string>("Player 1");
  const [player2, setPlayer2] = useState<string>("Player 2");

  return (
    <Container>
      <div className={classes.Layout}>
        <div className={classes.App}>
          <Board player1={player1} player2={player2} />
        </div>
        <div className={classes.Input}>
          <Input
            player="Player 1"
            color="#A0A4A7"
            function={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPlayer1(event.target.value)
            }
          />
          <Input
            player="Player 2"
            color="#F29224"
            function={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPlayer2(event.target.value)
            }
          />
        </div>
      </div>
    </Container>
  );
}

export default App;
