import React, { useState } from 'react'
import Dice from './Dice'
function App6(props) {
    const arr = [
        [3, 6, 8],
        [4, 8, 9],
        [2, 3, 4],
    ]
    function getRandomArbitrary() {
        return Math.round(Math.random() * (6 - 1) + 1)
    }

    console.log(getRandomArbitrary())

    const [number, setNumber] = useState(0)
    const [dice, setDice] = useState([])
    const createDiceArr = () => {
        const arr = []
        for (let index = 0; index < number; index++) {
            arr.push(<Dice number={getRandomArbitrary()}></Dice>)
        }
        setDice(arr)
    }
    return (
        <div className="main">
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            ></input>
            <button onClick={() => createDiceArr()}>Roll</button>
            {dice.map((die) => die)}
        </div>
    )
}

export default App6
