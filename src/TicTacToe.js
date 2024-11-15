import React, { useEffect, useState } from 'react'
import './tic-tac-toe.css'
function TicTacToe(props) {
    const initialState = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]
    const [boardState, setBoardState] = useState(initialState);
    const [action, setAction] = useState('X');
    const [winner, setWinner] = useState('');
    useEffect(() => {
        const currentWinner = checkWinner();
        if(currentWinner !== '') console.log("Winner: " + currentWinner)
            setWinner(currentWinner);
    }, [boardState])
    //What should be used as the key?

    const handleReset = () => {
        setBoardState(initialState);
        setWinner('');
    }
    const checkWinner = () => {
        for (let index = 0; index < boardState.length; index++) {
            let same = true;
            const value = boardState[index][0];
            for (let j = 1; j < boardState[index].length; j++) {
                if(value !== boardState[index][j]) same = false;
            }
            if(same) return value
        }

        for (let index = 0; index < boardState[0].length; index++) {
            let same = true;
            const value = boardState[0][index];
            for (let j = 1; j < boardState.length; j++) {
                if(value !== boardState[j][index]) same = false;
            }
            if(same) return value
        }

        if(boardState[0][0] === boardState[1][1] && boardState[0][0] === boardState[2][2]) return boardState[0][0];
        if(boardState[2][0] === boardState[1][1] && boardState[2][0] === boardState[0][2]) return boardState[2][0];

        return '';
    }
    const handleClick = (row, col) => {
        if(boardState[row][col] !== '' || winner !== '') return;
        
        const copy = structuredClone(boardState);
        copy[row][col] = action;
        console.log(copy);
        setBoardState(copy);
        setAction(action === 'X' ? 'O' : 'X');
    }
    const board = boardState.map((row, rowIndex) => {
        
        return <div className='row' key={rowIndex}>{row.map((square, colIndex) =>{
            return  <div key={colIndex} onClick={() => handleClick(rowIndex, colIndex)} className='square'>{square}</div>
        })}</div>
    })
    return <div className='board'>{board}<button onClick={() => handleReset()}>Reset Game</button></div>
}

export default TicTacToe
