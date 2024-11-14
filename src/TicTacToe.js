import React, { useState } from 'react'
import './tic-tac-toe.css'
function TicTacToe(props) {
    const board = []
    const row = []
    const initialState = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]
    const [action, setAction] = useState('X');
    const [boardState, setBoardState] = useState(initialState)
    const handleClick = (row, column) => {
        const copy = structuredClone(boardState);
        
        copy[row][column] = action;
        setAction(action === 'X' ? 'O' : 'X');
        setBoardState(copy);
    }
    return (
        <div className="board">
            {boardState.map((row, rowIndex) => {
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
