import React, { useEffect, useState } from 'react'
import './styles.css'

function Board() {
    const [board, setBoard] = useState(
        new Array(6).fill(null).map(() => new Array(7).fill(null)),
    )
    const [currentPlayer, setCurrentPlayer] = useState('yellow')
    const [winner, setWinner] = useState(null)
    const [hovered, setHovered] = useState(null)
    const checkWinner = (row, col, board) => {
        // setWinner(currentPlayer);
        const directions = [
            //row, col
            [0, 1], // right
            [1, 0], // down
            [1, 1], //diagnoal right
            [1, -1], //diagonal left
        ]

        const getNumber = (dRow, dCol) => {
            let [count, currentRow, currentCol] = [0, row, col];
            // debugger;
            while (
                currentCol >= 0 &&
                currentCol < board[0].length &&
                currentRow >= 0 &&
                currentRow < board.length &&
                board[currentRow][currentCol] == currentPlayer
            ) {
                currentRow += dRow;
                currentCol += dCol;
                count++
            }

            currentRow = row - dRow;
            currentCol = col - dCol
            while (
                currentCol >= 0 &&
                currentCol < board[0].length &&
                currentRow >= 0 &&
                currentRow < board.length &&
                board[currentRow][currentCol] == currentPlayer
            ) {
                currentRow -= dRow;
                currentCol -= dCol;
                
                count++
            }
            return count;
        }
        for (let index = 0; index < directions.length; index++) {
            const dir = directions[index];
            if(getNumber(dir[0], dir[1]) >= 4) {
                console.log(getNumber(dir[0], dir[1]))
                return currentPlayer;
            }
        }

        return null
    }

    const getAvailableRow = (colNumber) => {
        for (let index = board.length - 1; index >= 0; index--) {
            
            if (board[index][colNumber] === null) {
                
                return index
            }
        }
        return null
    }
    const handleClick = (colNumber) => {
        const availableRow = getAvailableRow(colNumber)
        
        if (availableRow === null || winner !== null) return
        const boardCopy = board.map((row) => [...row])
        boardCopy[availableRow][colNumber] = currentPlayer;

        if(checkWinner(availableRow, colNumber, boardCopy)) {
            setWinner(currentPlayer);
            setBoard(boardCopy)
            return;
        }
        setCurrentPlayer(currentPlayer === 'yellow' ? 'red' : 'yellow')
        setBoard(boardCopy)
    }

    const handleRestartClick = () => {
        setWinner(null);
        setBoard(new Array(6).fill(null).map(() => new Array(7).fill(null)));
        setCurrentPlayer('yellow')
    }

    return (
        <div className="main">
            <div className="current-player">
                <h1>Current Player: {currentPlayer.toLocaleUpperCase()}</h1>
            </div>
            <div className="player-area">
                {board[0].map((cell, index) => (
                    <div
                        key={index}
                        className={
                            hovered === index
                                ? `cell ${currentPlayer}-hover`
                                : `cell`
                        }
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
                                onClick={() => handleClick( colIndex)}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="game-status">
                <button onClick={handleRestartClick}>Restart</button>
                {winner && <span>Winner: {winner}</span>}
            </div>
        </div>
    )
}

export default Board
