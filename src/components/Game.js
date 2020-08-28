
import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";
// import Players from "./Players";

const Game = () => {
  let [Display, setDisplay] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";


  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <div className={"container1 text-center mt-5" + (Display === true ? "" : " d-none")}>
        <h3 className="pt-5">Choose your weapon</h3>
        <form className="mt-4">
          <div className="row">
            <div className="col ml-3">
              <input type="text" className="form-control" placeholder="First Player" />
            </div>
            <div className="col mr-3">
              <input type="text" className="form-control" placeholder="Second Player" />
            </div>
          </div>
        </form>
        <div className="d-flex justify-content-center mt-5">
          <div className="anchors mr-5 d-flex justify-content-center align-content-center" onClick={(e) => { setDisplay(Display = false) }}>
            <button className="buttons1" type="button">X</button>
          </div>
          <div className="anchors d-flex justify-content-center align-content-center">
            <button className="buttons2" type="button">O</button>
          </div>
        </div>
      </div>

      <div className={"" + (Display === true ? "d-none" : "")}>
        <div className="container d-block text-center">
          <h1>Tic tac toe in React.js</h1>
          <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        </div>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <div className="info-wrapper">
          <div>
            <h3>History</h3>
            {renderMoves()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;