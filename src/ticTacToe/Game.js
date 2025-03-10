import React, { useState } from 'react'
import Board from './Board'
import calculateWinner from './helpers'
const squares = new Array(3).fill([])

for (let i = 0; i < squares.length; i++) {
    squares[i] = new Array(3).fill(null)
}
function Game(props) {
    // const [board, setBoard] = useState(squares);
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([squares])
    console.log('history', history)
    const [step, setStep] = useState(0)
    const winner = calculateWinner(history[step])

    const handleClick = (rowIndex, colIndex) => {
        const boardCopy = history[step].map((row) => [...row])
        if (boardCopy[rowIndex][colIndex] || winner) return

        boardCopy[rowIndex][colIndex] = xIsNext ? 'X' : 'O'
        const historyCopy = structuredClone(history)
        setHistory([...historyCopy, boardCopy])
        setStep(step + 1)
        if (calculateWinner(boardCopy)) {
            console.log(xIsNext ? 'winner: X' : 'winner: O')
            return
        }
        setXIsNext(xIsNext ? false : true)
    }

    const handleRestart = () => {
        const squares = new Array(3).fill([])

        for (let i = 0; i < squares.length; i++) {
            squares[i] = new Array(3).fill(null)
        }
        console.log('squares', squares)
        setHistory([squares])
        setStep(0)
    }

    const goToStep = (step) => {
        const copyOfHistory = history[step].map((row) => [...row])
        copyOfHistory.slice(0, step);
        console.log("copy", [copyOfHistory])
        setStep(step);
        setHistory([copyOfHistory])
    }
    return (
        <>
            <Board squares={history[step]} onClick={handleClick}></Board>
            <button onClick={handleRestart}>Restart Game</button>
            <ul>
                {history.map((_, index) => {
                    return index ? (
                        <li>
                            <button onClick={() => goToStep(index)} key={index}>Go to Step {index}</button>
                        </li>
                    ) : (
                        <li key={index}>
                            <button onClick={() => goToStep(0)}>Go to Start</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Game
