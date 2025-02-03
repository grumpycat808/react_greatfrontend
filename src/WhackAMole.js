import React, {useEffect, useState} from 'react'
import './whack-a-mole.css'
const moles = []

for (let index = 0; index < 3; index++) {
    const newArr = []
    for (let j = 0; j < 3; j++) {
        newArr.push(
            <>
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
            </>,
        )
    }
    moles.push(newArr)
}

function getRandomNumber() {
    return Math.floor(Math.random() * 9);
}
function WhackAMole(props) {
    const handleClick = (index) => {
        console.log("index", index)
    }
    const [visible, setVisisble] = useState([]);

    useEffect(() => {
        setInterval(() => {
            const newArr = [];
            newArr.push(getRandomNumber());
            newArr.push(getRandomNumber());
        }, 1500)
    }, [])
    return (
        <div className="board">
            {moles.map((row, rowIndex) => {
                return (
                    <div className="row" key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <div
                                className={"cell"}
                                onClick={() => handleClick(rowIndex * 3 + colIndex + 1)}
                                key={colIndex}
                            >
                                {cell}
                            </div>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}

export default WhackAMole
