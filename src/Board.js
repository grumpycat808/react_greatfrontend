import React, { useEffect, useState } from 'react'
import './whack-a-mole.css'
import {shuffle} from './random-numbers'
function Board({ emojis }) {
    const [randomEmojis, setRandomEmojis] = useState([]);
    const [board, setBoard] = useState({});
    useEffect(() => {
        shuffle(emojis);
        setRandomEmojis(emojis);
        const boardCopy = {};
        emojis.forEach(element => {
            boardCopy[element] = 'hidden'
        });

        setBoard(boardCopy);
    }, [emojis])

    return (
        <div className="board">
            {randomEmojis.map((square, index) => (
                <div key={index} className={'square'}>
                    <span className={board[square] === 'hidden' ? "emoji hidden" : 'emoji'}>{square}</span>
                    
                </div>
            ))}
        </div>
    )
}

export default Board
