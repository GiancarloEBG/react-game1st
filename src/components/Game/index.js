import React, { useState } from 'react';
import Box from '../Box';
import './style.css';
//import '../../style.css';
const board = [[], [], []];

function Game() {
  const [turn, setTurn] = useState('X');
  const [winningText, setWinningText] = useState('');

  function changeTurn(row, col) {
    board[row][col] = turn;

    setTurn((turn) => (turn === 'X' ? 'O' : 'X'));

    const winner = checkForWin();
    if (!winner) {
    } else {
      setWinningText(winner + ' won!');
    }
  }

  function checkForWin() {
    //check row
    for (let i = 0; i < board.length; i++) {
      const row = board[i];

      if (row[0] == row[1] && row[1] === row[2] && row[0]) {
        return row[0];
      }
    }
    //check column
    for (let i = 0; i < board.length; i++) {
      const el1 = board[0][i];
      const el2 = board[1][i];
      const el3 = board[2][i];

      if (el1 && el1 === el2 && el2 === el3) {
        return el1;
      }
    }
    //check diagonal 1
    const di1 = board[0][0];
    const di2 = board[1][1];
    const di3 = board[2][2];

    if (di1 && di1 === di2 && di2 === di3) {
      return di1;
    }
    //check diagonal 2
    const di4 = board[0][2];
    const di5 = board[1][1];
    const di6 = board[2][0];

    if (di4 && di4 === di5 && di5 === di6) {
      return di4;
    }
    return false;
  }

  return (
    <div id="game">
      <div id="winning-text">{winningText}</div>
      <div className="row">
        <Box row={0} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={0} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={0} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>

      <div className="row">
        <Box row={1} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={1} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={1} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>

      <div className="row">
        <Box row={2} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={2} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={2} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
    </div>
  );
}

export default Game;
