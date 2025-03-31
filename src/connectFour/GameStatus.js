import React from 'react'

function GameStatus({ handleRestartClick, winner }) {
    return (
        <div className="game-status">
            <button onClick={handleRestartClick}>Restart</button>
            {winner && <span>Winner: {winner}</span>}
        </div>
    )
}

export default GameStatus
