import { useState } from "react";

const PLAYERS = {
  X: "X",
  O: "O",
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(PLAYERS.X);

  function Square({ children, index }) {
    const handleClick = () => {
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
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
