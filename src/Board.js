import React, { useEffect, useState } from 'react'
import './whack-a-mole.css'
import {shuffle} from './random-numbers'
function Board({ emojis }) {
    console.log("emoji prop", emojis)
    useEffect(() => {
        shuffle(emojis);
        setRandomEmojis(emojis)
    }, [emojis])

    const [randomEmojis, setRandomEmojis] = useState([]);
    return (
        <div className="board">
            {randomEmojis.map((square, index) => (
                <div key={index} className="square">
                    {square}
                </div>
            ))}
        </div>
    )
}

export default Board
