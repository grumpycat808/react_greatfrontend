import React, { useState } from 'react'
import './tic-tac-toe2.css'
function TicTacToe2(props) {
    const [grid, setGrid] = useState([
        ['', '', ''],
        ['', 'X', ''],
        ['', '', ''],
    ])

    const [player, setPlayer] = useState('X')

    const handleClick = (row, column) => {
        gridCopy[row][column] = player;
        setPlayer(player === 'X' ? 'Y' : 'X')
        const gridCopy = JSON.parse(JSON.stringify(grid));
    }
    return (
        <div className="board">
            {grid.map((row, rIndex) => {
                return (
                    <div className="row" key={rIndex}>
                        {row.map((cell, cIndex) => {
                            return (
                                <div
                                    onClick={() => handleClick(rIndex, cIndex)}
                                    className="cell"
                                    key={cIndex}
                                >
                                    {cell}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default TicTacToe2
