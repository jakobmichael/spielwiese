export const TETROMINOS = {
  0: { shape: [[0]], color: "0, 0, 0" },
  I: {
    shape: [
      ["I", "I", 0, 0],
      ["I", "I", 0, 0],
      ["I", "I", 0, 0],
      ["I", "I", 0, 0],
    ],
    color: "#F29224",
  },
  J: {
    shape: [
      ["J", "J", "J", "J"],
      ["J", 0, 0, 0],
      ["J", 0, 0, 0],
      ["J", 0, 0, 0],
    ],
    color: "#ffba1f",
  },
  L: {
    shape: [
      ["L", 0, 0, 0],
      ["L", "L", 0, 0],
      ["L", "L", 0, 0],
      ["L", 0, 0, 0],
    ],
    color: "#ed810e",
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "#f0dc02",
  },
  S: {
    shape: [
      [0, "S", 0, 0],
      ["S", "S", 0, 0],
      ["S", 0, 0, 0],
      ["S", 0, 0, 0],
    ],
    color: "#ffd042",
  },
  T: {
    shape: [
      ["T", 0, 0, 0],
      ["T", "T", 0, 0],
      ["T", 0, 0, 0],
      ["T", 0, 0, 0],
    ],
    color: "#f59631",
  },
  Z: {
    shape: [
      ["Z", "Z", 0, 0],
      [0, "Z", 0, 0],
      ["Z", "Z", 0, 0],
      [0, "Z", 0, 0],
    ],
    color: "#ff9d3b",
  },
};

export const randomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
