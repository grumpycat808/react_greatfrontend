import React from 'react';
import './whack-a-mole.css'
function Board({emojis}) {
    return (
        <div className='board'>
            {emojis.map((square, index) => <div key={index} className='square'>{square}</div>)}
        </div>
    );
}

export default Board;