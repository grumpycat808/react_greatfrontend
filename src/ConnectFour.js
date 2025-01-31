// import { useState } from 'react';
import React, { useState } from 'react'
import './connect-four.css'

const getAvailableSlot = (column, boardState) => {
    for (let index = boardState.length - 1; index >= 0; index--) {
        if (boardState[index][column] === '') return index
    }

    return -1
}
function ConnectFour(props) {
    const defaultState = [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
    ]
    const [boardState, setBoardState] = useState(defaultState)
    const [player, setPlayer] = useState('yellow')
    const [winner, setWinner] = useState('')
    const isInRange = (row, column) => {
        return (
            row < boardState.length &&
            row >= 0 &&
            column >= 0 &&
            column < boardState[0].length
        )
    }
    const hasWinner = (row, column) => {
        console.log('row', row)
        console.log('column', column)
        let counter = 1
        let chips = 1
        while (
            isInRange(row - counter, column) &&
            boardState[row - counter][column] == player
        ) {
            counter++
            chips++
        }
        counter = 1
        while (
            isInRange(row + counter, column) &&
            boardState[row + counter][column] == player
        ) {
            counter++
            chips++
        }
        counter = 1
        if (chips >= 4) {
            console.log('winner')
            return true
        }

        chips = 1

        while (
            isInRange(row, column + counter) &&
            boardState[row][column + counter] == player
        ) {
            counter++
            chips++
        }
        counter = 1
        while (
            isInRange(row, column - counter) &&
            boardState[row][column - counter] == player
        ) {
            counter++
            chips++
        }
        counter = 1
        if (chips >= 4) {
            console.log('winner')
            return true
        }
        chips = 1

        while (
            isInRange(row - counter, column + counter) &&
            boardState[row - counter][column + counter] == player
        ) {
            counter++
            chips++
        }

        counter = 1
        while (
            isInRange(row + counter, column - counter) &&
            boardState[row + counter][column - counter] == player
        ) {
            counter++
            chips++
        }
        counter = 1
        if (chips >= 4) {
            console.log('winner')
            return true
        }

        return false
    }
    const handleClick = (column) => {
        const availableSlot = getAvailableSlot(column, boardState)
        const newBoard = boardState.map((row) => [...row])
        if (availableSlot === -1) return
        newBoard[availableSlot][column] = player
        setBoardState(newBoard)
        if (!hasWinner(availableSlot, column)) {
            setPlayer(player === 'yellow' ? 'red' : 'yellow')
        } else {
            setWinner(player)
            // setBoardState(defaultState);
        }
    }
    const checkTie = () => {}
    return (
        <>
            <div className="row top">
                {boardState[0].map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={
                            player == 'yellow' ? 'yellow circle' : 'red circle'
                        }
                    ></div>
                ))}
            </div>
            <div className="board">
                {boardState.map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {row.map((circle, colIndex) => (
                            <div
                                key={colIndex}
                                className={
                                    'slot ' + boardState[rowIndex][colIndex]
                                }
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
            {winner !== '' && <p>{winner} has won!</p>}
        </>
    )
}

export default ConnectFour
