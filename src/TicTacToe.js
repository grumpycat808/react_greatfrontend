import React, { useState } from 'react'
import './tic-tac-toe.css'
function TicTacToe(props) {
    const board = []
    const row = []
    const initialState = [
        ['', '', ''],
        ['', 'X', ''],
        ['', '', 'O'],
    ]

    const [boardState, setBoardState] = useState(initialState)
    const handleClick = (row, column) => {
        console.log('row',row)
        console.log('column', column)
    }
    return (
        <div className="board">
            {initialState.map((row, rowIndex) => {
                return (
                    <div key={rowIndex} className="row">
                        {row.map((item, index) => {
                           
                            return (
                                <div
                                    key={index}
                                    className="square"
                                    onClick={() => handleClick(index, rowIndex)}
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
