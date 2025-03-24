import React, { useEffect, useState } from 'react'
import './styles.css'

function Board() {
    const [board, setBoard] = useState(
        new Array(6).fill(null).map(() => new Array(7).fill(null)),
    )
    const [currentPlayer, setCurrentPlayer] = useState('yellow');
    const [winner, setWinner] = useState(null);
    const [hovered, setHovered] = useState(null);
    const checkWinner = (row, col) => {
        // setWinner(currentPlayer);
    }

    const getAvailableRow = (colNumber) => {
        for (let index = board.length - 1; index >= 0; index--) {
            if (board[index][colNumber] === null) {
                return index;
            }
        }
        return null;
    }
    const handleClick = (colNumber) => {
        
        
        const availableRow = getAvailableRow(colNumber);
        if (!availableRow) return;
        const boardCopy = board.map((row) => [...row])
        boardCopy[availableRow][colNumber] = currentPlayer;
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
                <div className='player-area'>
                    {board[0].map((cell, index) => (
                    <div
                                key={index}
                                className={hovered === index ? `cell ${currentPlayer}-hover` : `cell`}
                                onClick={() => handleClick(index)}
                                onMouseEnter={() => setHovered(index)}
                                onMouseOut={() => setHovered(null)}
                            ></div>
                ))}
                </div>
            <div className="board">
                
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, colIndex) => (
                            <div
                                key={colIndex}
                                className={`cell ${cell === 'yellow' || cell === 'red' ? cell : ''}`.trim()}
                                onMouseEnter={() => setHovered(colIndex)}
                                onMouseOut={() => setHovered(null)}
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
