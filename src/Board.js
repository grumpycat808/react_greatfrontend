import React, { useEffect, useState } from 'react'
import './whack-a-mole.css'
import { shuffle } from './random-numbers'
function Board({ emojis }) {
    const [randomEmojis, setRandomEmojis] = useState([])
    const [board, setBoard] = useState([]);

    const [selected, setSelected] = useState([]);
    useEffect(() => {
        shuffle(emojis)
        setRandomEmojis(emojis)
        const boardCopy = []
        emojis.forEach((element, i) => {
            boardCopy.push({ em: element, index: i, state: 'hidden' })
        })

        setBoard(boardCopy)
    }, [emojis])

    useEffect(() => {
     console.log(selected);
     
     if(selected.length === 2) {
        setTimeout(() => {
            const copy = structuredClone(board)
            copy[selected[0]].state = 'hidden'
            copy[selected[1]].state = 'hidden'
            setBoard(copy)
        }, 1000)
     }
    }, [selected])
    const handleClick = (index) => {

        if(selected.length >= 2) return;
        setSelected([...selected, index]);
        
        const copy = structuredClone(board)
        copy[index].state = 'visible'

        setBoard(copy)

        
    }
    return (
        <div className="board">
            {randomEmojis.map((square, index) => (
                <div
                    onClick={() => handleClick(index)}
                    key={index}
                    className={'square'}
                >
                    <span
                        className={
                            board[index].state === 'hidden'
                                ? 'emoji hidden'
                                : 'emoji'
                        }
                    >
                        {square}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Board
