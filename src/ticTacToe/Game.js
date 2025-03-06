import React, {useState} from 'react';
import Board from './Board';
import calculateWinner from './helpers';
const squares =  new Array(3).fill([]);

for (let i = 0; i < squares.length; i++) {
    squares[i] = new Array(3).fill(null);
}
function Game(props) {
    
    const [board, setBoard] = useState(squares);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    
    const handleClick = (rowIndex, colIndex) => {
        const boardCopy = board.map(row => [...row]);
        if(boardCopy[rowIndex][colIndex] || winner) return;
    
        boardCopy[rowIndex][colIndex] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);

        if(calculateWinner(boardCopy)) {
            console.log(xIsNext ? 'winner: X' : 'winner: O');
            return;
        };
        setXIsNext(xIsNext ? false : true);
        
    }

    const handleRestart = () => {
        setBoard(squares);
    }
    return (
        <>
            <Board squares={board} onClick={handleClick} ></Board>
            <button onClick={handleRestart}>Restart Game</button>
        </>
    );
}

export default Game;