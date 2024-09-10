import React, { useEffect, useState } from 'react'
import './dice-styles.css'
const numberMap = {
    1: [5],
    2: [3, 7],
    3: [3, 5, 7],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9],
}
function Dice({ number }) {
    const [pips, setPips] = useState(numberMap[number])
    useEffect(() => {
        setPips(numberMap[number])
    }, [number])
    const pipArray = []
    let counter = 0
    for (let row = 0; row < 3; row++) {
        const arr = []

        pipArray.push(arr)
        for (let column = 0; column < 3; column++) {
            counter++
            pipArray[row][column] = pips.includes(counter) ? (
                <div className="active" key={counter}></div>
            ) : (
                <div className="hidden" key={counter}></div>
            )
        }
    }
    console.log(pipArray)
    return (
        <div className="dice">
            {pipArray.map((row, i) => {
                return (
                    <div key={i} className="row">
                        {row.map((pip) => pip)}
                    </div>
                )
            })}
        </div>
    )
}

export default Dice
