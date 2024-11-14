import React, { useEffect, useState } from 'react'
import './tic-tac-toe.css'
function TicTacToe(props) {
    const initialState = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]

    const [action, setAction] = useState('X')
    const [boardState, setBoardState] = useState(initialState)
    const checkWinner = () => {
        for (let index = 0; index < boardState.length; index++) {
            const value = boardState[index][0]
            let same = true
            for (let j = 1; j < boardState[index].length; j++) {
                if (boardState[index][j] != value) same = false
            }

            if (same) return value
        }

        for (let index = 0; index < 3; index++) {
            const element = boardState[0][index]
            let same = true
            for (let j = 0; j < 3; j++) {
                if (boardState[j][index] != element) same = false
            }
            if (same) return element;
        }

        if(boardState[0][0] === boardState[1][1] && boardState[0][0] === boardState[2][2]) return boardState[0][0];

        if(boardState[2][0] === boardState[1][1] && boardState[0][0] === boardState[0][2]) return boardState[0][0];
        return '';
    }
    useEffect(() => {
        if(checkWinner() !== "") {
            console.log("Winner: " + checkWinner());
        }
    }, [boardState])

    const handleClick = (row, column) => {
        if (boardState[row][column] !== '') return
        console.log('row', row)
        console.log('column', column)
        const copy = structuredClone(boardState)

        copy[row][column] = action
        setAction(action === 'X' ? 'O' : 'X')
        setBoardState(copy)
        
    }
    return (
        <div className="board">
            {boardState.map((row, rowIndex) => {
                console.log(initialState[0][1])
                return (
                    <div key={rowIndex} className="row">
                        {row.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="square"
                                    onClick={() => handleClick(rowIndex, index)}
                                >
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default TicTacToe
