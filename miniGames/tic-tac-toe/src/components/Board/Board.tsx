import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import classes from "./Board.module.css";
import $ from "jquery";
import WinMessage from "../WinMessage/WinMessage";

interface ThisProps {
  player1: String;
  player2: String;
}
let symbol: string | null = "X";

const Board = (props: ThisProps) => {
  const [board, setBoard] = useState<Array<any>>(Array(9).fill(null));
  const [color, setColor] = useState<any>("#f2922495");
  const [winner, setWinner] = useState<any>();
  const [win, setWin] = useState<boolean>(false);

  const handleClick = (index: number) => {
    if (checkBox(index)) {
      updateBoard(index);
    } else {
      return;
    }
  };

  useEffect(() => checkWinner());

  const updateBoard = (index: number) => {
    if (win) {
      symbol = null;
      return;
    } else {
      let newBoard = Array.from(board);
      if (symbol === "O") {
        symbol = "X";
        setColor("#f2922495");
      } else {
        symbol = "O";
        setColor("#a0a4a79a");
      }
      newBoard[index] = symbol;
      setBoard(newBoard);
      checkWinner();
    }
  };

  const checkBox = (index: number) => {
    if (board[index] != null) {
      return false;
    } else {
      return true;
    }
  };

  const checkWinner = () => {
    let winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c]: number[] = winLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWin(true);
        const winArray = [a, b, c];
        for (let j = 0; j < winArray.length; j++) {
          let element: HTMLElement | null = document.getElementById(
            winArray[j].toString()
          );
          element!.style.color = "red";
        }
        setWinner(symbol === "X" ? props.player1 : props.player2);
      }
    }

    if (!board.some((b) => b === null)) {
      if (!win) {
        restartGame();
      }
      return;
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setColor("#f2922495");
    $("div").css("color", "black");
    symbol = "X";
    setWin(false);
  };

  const stage = board.map((box: String | null, index: number) => {
    return (
      <div
        id={index.toString()}
        style={{ backgroundColor: color, color: "black" }}
        className={classes.Box}
        key={index}
        onClick={() => handleClick(index)}
      >
        {box}
      </div>
    );
  });

  return (
    <>
      <div id="stage" className={classes.Stage}>
        {stage}
      </div>
      {win ? <WinMessage winner={winner} /> : null}

      <Button
        size="large"
        variant="outlined"
        color="primary"
        onClick={restartGame}
        style={{ height: "10%" }}
      >
        RESTART GAME
      </Button>
    </>
  );
};

export default Board;
