import React from 'react'
import './styles.css'
const YELLOW = 'yellow'
const RED = 'red'
function Board({ board, handleMouseEnter, handleMouseOut, handleClick }) {
    return (
        <div className="board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => (
                        <div
                            key={colIndex}
                            className={`cell ${cell === YELLOW || cell === RED ? cell : ''}`.trim()}
                            onMouseEnter={() => handleMouseEnter(colIndex)}
                            onMouseOut={() => handleMouseOut(null)}
                            onClick={() => handleClick(colIndex)}
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Board
