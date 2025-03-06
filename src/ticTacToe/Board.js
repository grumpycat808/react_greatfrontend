import React from 'react';
import Square from './Square';
import './Board.css'; // Import the CSS file for styling

const style = {
    width: 'fit-content',
    margin: '20px auto',
    border: '4px solid darkblue',
    borderRadius: '10px',
    // height: '250px',
};
function Board({squares, onClick}) {
    
    return (
        <div style={style} className="board">
            {squares.map((row, rowIndex) => (
                <div className="board-row">
                    {row.map((square, colIndex) => <Square value={square} onClick={() => onClick(rowIndex, colIndex)} />)}
                </div>
            )
            )}
            {/* // <div className="board-row">
            //     <Square value={squares[0]} onClick={() => onClick(0)} />
            //     <Square value={squares[1]} onClick={() => onClick(1)} />
            //     <Square value={squares[2]} onClick={() => onClick(2)} />
            // </div>
            // <div className="board-row">
            //     <Square value={squares[3]} onClick={() => onClick(3)} />
            //     <Square value={squares[4]} onClick={() => onClick(4)} />
            //     <Square value={squares[5]} onClick={() => onClick(5)} />
            // </div>
            // <div className="board-row">
            //     <Square value={squares[6]} onClick={() => onClick(6)} />
            //     <Square value={squares[7]} onClick={() => onClick(7)} />
            //     <Square value={squares[8]} onClick={() => onClick(8)} />
            // </div> */}
        </div>
    );
}

export default Board;