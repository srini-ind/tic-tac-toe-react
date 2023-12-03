import { useState } from 'react';
import Square from './Square';
import BoardTitle from './BoardTitle';
import BoardStartGameButton from './BoardStartGameButton';
import './Board.css';

export default function Board() {
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([...Array(9).fill(null)]);
  const [xPlaysNext, setXPlaysNext] = useState('X');
  const [gameOn, setGameOn] = useState(true);

  function nextPlayerFn(index) {
    if (history[index] === null && gameOn) {
      history[index] = xPlaysNext;
      setHistory(history);
      xPlaysNext === 'X' ? setXPlaysNext('O') : setXPlaysNext('X');
      checkWinner();
    }
  }

  function checkWinner() {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winConditions.forEach((item) => {
      const [a, b, c] = item;
      if (
        history[a] &&
        history[a] === history[b] &&
        history[a] === history[c]
      ) {
        setWinner(history[a]);
        setGameOn(false);
      }
    });
  }

  const startGame = () => {
    setHistory([...Array(9).fill(null)]);
    setWinner(null);
    setXPlaysNext('X');
    setGameOn(true);
  };

  return (
    <>
      <BoardTitle
        winnerData={winner}
        historyData={history}
        xPlaysNextData={xPlaysNext}
      />
      <div className="boardContainer">
        {history.map((e, i) => {
          return (
            <div key={i} className="squareStyle">
              <Square onClick={() => nextPlayerFn(i)}>{e}</Square>
            </div>
          );
        })}
      </div>
      <BoardStartGameButton
        winnerData={winner}
        historyData={history}
        onClick={startGame}
      />
    </>
  );
}
