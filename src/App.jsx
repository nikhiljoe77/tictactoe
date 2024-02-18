import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "../winning_combination.js";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "0";
  }
  return currentPlayer
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // let currentPlayer = "X";
  // if (gameTurns.length > 0 && gameTurns[0].player === "X") {
  //   currentPlayer = "0";
  // }
  const activePlayer=deriveActivePlayer(gameTurns)
  let gameBoard=initialGameBoard
  for(const turn of gameTurns){
    const{square,player}=turn
    const {row,col}=square
    gameBoard[row][col]=player
  }
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol
    const secondSquareSymbol
    const thirdSquareSymbol
  }
  // const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      // let currentPlayer = "X";
      // if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      //   currentPlayer = "0";
      const currentPlayer=deriveActivePlayer(prevTurns)
      

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          ></Player>
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          ></Player>
        </ol>

        <Gameboard
          onSelectSquare={handleSelectSquare}
          // activePlayerSymbol={activePlayer}
          board={gameBoard}
        ></Gameboard>
      </div>
      <Log turns={gameTurns}></Log>
    </main>
  );
}

export default App;
