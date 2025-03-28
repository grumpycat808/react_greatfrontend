import React, { useState } from 'react'
import Board from './Board'
import './styles.css'
import { getAvailableRow, checkWinner } from './helpers'

const YELLOW = 'yellow'
const RED = 'red'
function Game() {
    const [currentPlayer, setCurrentPlayer] = useState(YELLOW)
    const [winner, setWinner] = useState(null)
    const [board, setBoard] = useState(
        new Array(6).fill(null).map(() => new Array(7).fill(null)),
    )
    const [hovered, setHovered] = useState(null)
    const handleRestartClick = () => {
        setWinner(null)
        setBoard(new Array(6).fill(null).map(() => new Array(7).fill(null)))
        setCurrentPlayer(YELLOW)
    }

    const handleClick = (colNumber) => {
        const availableRow = getAvailableRow(colNumber, board)

        if (availableRow === null || winner !== null) return
        const boardCopy = board.map((row) => [...row])

        boardCopy[availableRow][colNumber] = currentPlayer
        if (checkWinner(availableRow, colNumber, boardCopy, currentPlayer)) {
            setWinner(currentPlayer)
            setBoard(boardCopy)
            return
        }
        setCurrentPlayer(currentPlayer === YELLOW ? RED : YELLOW)
        setBoard(boardCopy)
    }

    const handleMouseEnter = (col) => setHovered(col)

    const handleMouseOut = () => setHovered(null)
    return (
        <div className="game-container">
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
            <Board
                board={board}
                handleMouseEnter={handleMouseEnter}
                handleMouseOut={handleMouseOut}
                handleClick={handleClick}
            ></Board>
            <div className="game-status">
                <button onClick={handleRestartClick}>Restart</button>
                {winner && <span>Winner: {winner}</span>}
            </div>
        </div>
    )
}

export default Game
