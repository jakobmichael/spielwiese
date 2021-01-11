import React, { Component } from "react";
import classes from "./Canvas.module.css";

var keyState: any = {};
let ballPosX: number;
let ballPosY: number;
let ballSpeedX = 5;
let ballSpeedY = 3;

let panelHeight: number;
let panelWidth = 10;
let leftPanelX = 2;
let leftPanelY: number;
let rightPanelX: number;
let rightPanelY: number;
let panelSpeed = 7;
let startable = true;

let player1Score = 0;
let player2Score = 0;
const winningScore = 3;
let winningePlayer: string;
let showWinScreen = false;
let runGame = false;
let gameInterval: NodeJS.Timeout = null;
let ballColor = "white";

class Canvas extends Component {
  state = {
    canvasWidth: window.innerWidth / 1.1,
    canvasHeight: window.innerHeight / 1.2,
    showInstructions: true,
    framesPerSecond: 1000,
  };

  render() {
    const canvasWidth = this.state.canvasWidth;
    const canvasHeight = this.state.canvasHeight;

    const ballSpeedHorizontal = [-3, 3];
    const ballSpeedVertical = [-5, 5];
    ballPosX = canvasWidth / 2;
    ballPosY = canvasHeight / 2;

    panelHeight = canvasHeight / 6;

    leftPanelY = canvasHeight / 2 - panelHeight / 2;
    rightPanelX = canvasWidth - panelWidth - 2;
    rightPanelY = canvasHeight / 2 - panelHeight / 2;

    function storeKeyCodes() {
      window.addEventListener(
        "keydown",
        function (e) {
          keyState[e.keyCode || e.which] = true;
        },
        true
      );

      window.addEventListener(
        "keyup",
        function (e) {
          keyState[e.keyCode || e.which] = false;
        },
        true
      );

      window.addEventListener("click", function (e) {
        if (startable) {
          startGame();
        }
      });
    }

    storeKeyCodes();

    const draw = () => {
      colorRect(0, 0, canvasWidth, canvasHeight, "black");

      drawBall(ballColor, ballPosX, 10);

      if (this.state.showInstructions) {
        this.context.fillStyle = "#F29224";
        this.context.font = "20px Pangolin";
        this.context.fillText(
          "Move your panel up by pressing 'w', down by pressing 's'. Click to start playing ",
          100,
          200
        );
      }
      colorRect(leftPanelX, leftPanelY, panelWidth, panelHeight, "white");

      colorRect(rightPanelX, rightPanelY, panelWidth, panelHeight, "white");

      colorRect(canvasWidth / 2 - 2, 0, 2, canvasHeight, "white");

      this.context.fillStyle = "#F29224";
      this.context.font = "30px Pangolin";
      this.context.fillText(player1Score, 100, 100);
      this.context.fillText(player2Score, canvasWidth - 100, 100);
      if (showWinScreen) {
        this.context.fillText(winningePlayer + " wins game", 200, 200);
        this.context.fillText("click to continue", 200, 250);
      }
    };

    const colorRect = (
      leftX: number,
      topY: number,
      width: number,
      height: any,
      drawColor: string
    ) => {
      this.context.fillStyle = drawColor;
      this.context.fillRect(leftX, topY, width, height);
    };

    const drawBall = (color: string, ballPosX: any, radius: number) => {
      this.context.fillStyle = color;
      this.context.beginPath();
      this.context.arc(ballPosX, ballPosY, radius, 0, Math.PI * 2, true);
      this.context.fill();
    };

    const startCountdown = () => {
      let number = 3;
      let countDownInterval = setInterval(() => {
        colorRect(500, 300, 300, -300, "black");
        this.context.font = "50px Pangolin";
        this.context.fillStyle = "#F29224";
        this.context.fillText(number, 500, 300);
        number -= 1;
        if (number < 0) {
          clearInterval(countDownInterval);
          startGame();
        }
      }, 1000);
    };

    const movePanel = () => {
      if (keyState[87] && leftPanelY > 0) {
        //key w, move left panel up
        leftPanelY -= panelSpeed;
      } else if (keyState[83] && leftPanelY + panelHeight < canvasHeight) {
        // key s, move left panel down
        leftPanelY += panelSpeed;
      }
    };

    const endGame = () => {
      runGame = false;
      ballSpeedY = getRandomArbitrary(ballSpeedHorizontal);
      ballSpeedX = getRandomArbitrary(ballSpeedVertical);
      clearInterval(gameInterval);
      resetPositions();
      draw();
      movePanel();
    };

    const resetBall = () => {
      if (player1Score >= winningScore) {
        winningePlayer = "Player 1";
        player1Score = 0;
        player2Score = 0;
        startable = true;
        showWinScreen = true;
        endGame();
      } else if (player2Score >= winningScore) {
        winningePlayer = "Computer";
        player1Score = 0;
        player2Score = 0;
        startable = true;
        showWinScreen = true;
        endGame();
      }

      endGame();
      if (!startable) {
        startCountdown();
      }
    };

    function computerMovement() {
      var panelRightCenter = rightPanelY + panelHeight / 2;

      if (panelRightCenter < ballPosY - 35) {
        rightPanelY += 3.8;
      } else if (panelRightCenter > ballPosY + 35) {
        rightPanelY -= 3.8;
      }
    }

    const resetPositions = () => {
      leftPanelX = 2;
      leftPanelY = canvasHeight / 2 - panelHeight / 2;
      rightPanelX = canvasWidth - panelWidth - 2;
      rightPanelY = canvasHeight / 2 - panelHeight / 2;

      ballPosX = canvasWidth / 2;
      ballPosY = canvasHeight / 2;
    };

    const bounceBall = () => {
      if (ballPosX < 1) {
        if (ballPosY > leftPanelY && ballPosY < leftPanelY + panelHeight) {
          ballSpeedX = -ballSpeedX;
          let deltaY = ballPosY - (leftPanelY + panelHeight / 2);
          ballSpeedY = deltaY * 0.1;
        } else {
          player2Score++;
          resetBall();
        }
      } else if (ballPosX + 20 >= canvasWidth) {
        if (ballPosY > rightPanelY && ballPosY < rightPanelY + panelHeight) {
          ballSpeedX = -ballSpeedX;
          let deltaY = ballPosY - (rightPanelY + panelHeight / 2);
          ballSpeedY = deltaY * 0.1;
        } else {
          player1Score++;

          resetBall();
        }
      }

      if (ballPosY + 20 > canvasHeight) {
        ballSpeedY = -ballSpeedY;
      } else if (ballPosY < 0) {
        ballSpeedY = -ballSpeedY;
      }
      ballPosX += ballSpeedX;
      ballPosY += ballSpeedY;
    };

    const startGame = () => {
      showWinScreen = false;
      runGame = true;
      startable = false;
      this.setState({
        ...this.state,
        showInstructions: false,
      });
      gameInterval = setInterval(() => {
        draw();
        movePanel();

        if (runGame) {
          bounceBall();
          computerMovement();
        }
      }, 1000 / this.state.framesPerSecond);
    };

    window.onload = () => {
      draw();
    };

    function getRandomArbitrary(speedArray: any) {
      var yourNumber =
        speedArray[Math.floor(Math.random() * speedArray.length)];

      return yourNumber;
    }

    return (
      <canvas
        id="gameCanvas"
        ref={(c) => (this.context = c?.getContext("2d"))}
        width={canvasWidth}
        height={canvasHeight}
        className={classes.Canvas}
      />
    );
  }
}

export default Canvas;
