import React, { useEffect, useState } from 'react'
import './whack-a-mole.css'

function getRandomNumber() {
    return Math.floor(Math.random() * 9)
}
function WhackAMole(props) {
    const [visible, setVisisble] = useState([])
    const [points, setPoints] = useState(0)
    const handleClick = (index) => {
        if (visible.includes(index)) {
            setPoints(points + 1)
            const newArr = visible.filter((item) => item !== index)
            setVisisble(newArr)
        }
    }
    useEffect(() => {
        setInterval(() => {
            const newArr = []
            newArr.push(getRandomNumber())
            newArr.push(getRandomNumber())

            setVisisble([...newArr])
        }, 1500)
    }, [])

    const moles = []

    for (let index = 0; index < 3; index++) {
        const newArr = []
        for (let j = 0; j < 3; j++) {
            newArr.push(
                <>
                    <div className="mole-container">
                        <img
                            onClick={() => handleClick(index * 3 + j + 1)}
                            className="mole-head"
                            src="https://www.greatfrontend.com/img/questions/whack-a-mole/mole-head.png"
                        />
                    </div>
                    <img
                        className="mole-hill"
                        src="https://www.greatfrontend.com/img/questions/whack-a-mole/mole-hill.png"
                    />
                </>,
            )
        }
        moles.push(newArr)
    }
    return (
        <div className="board">
            <h1>Points: {points}</h1>
            {moles.map((row, rowIndex) => {
                return (
                    <div className="row" key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <div
                                className={
                                    visible.includes(
                                        rowIndex * 3 + colIndex + 1,
                                    )
                                        ? 'cell'
                                        : 'hidden cell'
                                }
                                key={colIndex}
                            >
                                {cell}
                            </div>
                        ))}
                    </div>
                )
            })}
            <br></br>
            <button>Start Over</button>
        </div>
    )
}

export default WhackAMole
