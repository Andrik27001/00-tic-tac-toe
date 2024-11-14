import { useState } from "react";

const PLAYERS = {
  X: "X",
  O: "O",
};

const WIN_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(PLAYERS.X);
  const [winner, setWinner] = useState(null);

  const checkWinner = (newBoard) => {
    for (const [a, b, c] of WIN_COMBOS) {
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        setWinner(newBoard[a]);
      }
    }
  };

  function Square({ children, index }) {
    const handleClick = () => {
      if (board[index] || winner) {
        return;
      }

      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);

      checkWinner(newBoard);

      setTurn(turn === PLAYERS.X ? PLAYERS.O : PLAYERS.X);
    };

    return (
      <div onClick={handleClick} className="square">
        {children}
      </div>
    );
  }

  return (
    <div>
      <h1>Tic tac toe</h1>
      <div className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index}>
              {board[index]}
            </Square>
          );
        })}
      </div>
    </div>
  );
}

export default App;
