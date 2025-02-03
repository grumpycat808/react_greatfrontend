import React, { Fragment } from 'react'
import './whack-a-mole.css'
const moles = []

for (let index = 0; index < 3; index++) {
    const newArr = []
    for (let j = 0; j < 3; j++) {
        newArr.push(
            <div className="cell">
                <div className="mole-container">
                    <img
                        className="mole-head"
                        src="https://www.greatfrontend.com/img/questions/whack-a-mole/mole-head.png"
                    />
                </div>
                <img
                    className="mole-hill"
                    src="https://www.greatfrontend.com/img/questions/whack-a-mole/mole-hill.png"
                />
            </div>,
        )
    }
    moles.push(newArr)
}
function WhackAMole(props) {

    const handleClick = (row, column) => {

    }
    return (
        <div className="board">
            {moles.map((row, rowIndex) => {
                return (
                    <div className="row" key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <Fragment onClick={() => handleClick(rowIndex, colIndex)} key={colIndex}>{cell}</Fragment>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}

export default WhackAMole
