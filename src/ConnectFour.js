// import { useState } from 'react';
import React, { useState } from 'react'
import './connect-four.css'

const getAvailableSlot = (column, boardState) => {
    for (let index = boardState.length - 1; index >= 0; index--) {
      
        if(boardState[index][column] === '') return index;
    }

    return -1;
}
function ConnectFour(props) {
    const [boardState, setBoardState] = useState([
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
    ])
    const [player, setPlayer] = useState('yellow');
    const checkWinner = (row, column) => {

    }
    const handleClick = (column) => {
        const availableSlot = getAvailableSlot(column, boardState);
        const newBoard = boardState.map(row => [...row]);
        if(availableSlot === -1) return;
        newBoard[availableSlot][column] = player;
        setBoardState(newBoard);
        setPlayer(player === 'yellow' ? 'red' : 'yellow');
    }
    const isInRange = (row, column) => {
        return row < boardState.length && column < boardState[0].length;
    }
    const checkTie = () => {

    }
    return (
        <>
           <div className="row top">{boardState[0].map((_, index) => <div key={index} onClick={() => handleClick(index)} className={player == 'yellow' ? 'yellow circle' : 'red circle'}></div>)}</div> 
        <div className="board">
            {boardState.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {row.map((circle, colIndex) => (
                        <div key={colIndex} className={'slot ' + boardState[rowIndex][colIndex]}></div>
                    ))}
                </div>
            ))}
        </div></>
    )
}

export default ConnectFour
