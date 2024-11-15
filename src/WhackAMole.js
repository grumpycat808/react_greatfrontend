import React, { useEffect, useState } from 'react'
import { emojis } from './emojis'
import {generateRandomNumbers} from './random-numbers'
import Board from './Board';

function WhackAMole(props) {
    
    const [selectedEmojis, setSelectedEmojis] = useState([]);
    useEffect(() => {
        const randomEmojis = [];
        const randomNums = generateRandomNumbers(8, emojis.length);
        randomNums.forEach((num) => randomEmojis.push(emojis[num]));
        randomEmojis.forEach((emoji) => randomEmojis.push(emoji))
        setSelectedEmojis(randomEmojis);
    }, [emojis])
    return <div><Board emojis={selectedEmojis}></Board></div>
}

export default WhackAMole
