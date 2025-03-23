import React, { useEffect, useState } from 'react'
import './styles.css'
function Board(props) {
    const [board, setBoard] = useState(
        new Array(6).fill(null).map(() => new Array(7).fill(null)),
    )
    const [currentPlayer, setCurrentPlayer] = useState('yellow');
    const [winner, setWinner] = useState('yellow');
   
    const checkWinner = (row, col) => {
        
    }

    const handleClick = (colNumber) => {
        let canClick = false
        const boardCopy = board.map((row) => [...row])
        for (let index = board.length - 1; index >= 0; index--) {
            if (board[index][colNumber] === null) {
                canClick = true
                boardCopy[index][colNumber] = currentPlayer;
                checkWinner(index, colNumber);
                break
            }
        }

        if (!canClick) return
        setCurrentPlayer(currentPlayer === 'yellow' ? 'red' : 'yellow')
        setBoard(boardCopy)
    }

    const handleRestartClick = () => {
        setBoard(new Array(6).fill(null).map(() => new Array(7).fill(null)));
    }
    return (
        <div className="main">
            <div className="current-player">
                <h1>Current Player: {currentPlayer.toLocaleUpperCase()}</h1>
            </div>
            <div className="board">
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, colIndex) => (
                            <div
                                key={colIndex}
                                className={`cell ${cell === 'yellow' || cell === 'red' ? cell : ''}`.trim()}
                                onClick={() => handleClick(colIndex)}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="game-status">
                
                <button onClick={handleRestartClick}>Restart</button>{winner && <span>Winner: {winner}</span>}
            </div>
        </div>
    )
}

export default Board
