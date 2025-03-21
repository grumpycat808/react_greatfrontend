import React, { useState } from 'react';

function Board(props) {

    const [board, setBoard] = useState(new Array.fill(7).map(() => new Array(6).fill(null)));
    const [currentPlayer, setCurrentPlayer] = useState('yellow');
    
    return (
        <div>
            
        </div>
    );
}

export default Board;