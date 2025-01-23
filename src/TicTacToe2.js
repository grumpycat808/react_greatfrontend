import React, { useEffect, useState } from 'react'
import './tic-tac-toe2.css'
function TicTacToe2(props) {
    const [grid, setGrid] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ])
    useEffect(() => {
        const winner = checkForWinner()
        console.log(winner)
    }, [grid])
    const [player, setPlayer] = useState('X')

    const handleClick = (row, column) => {
        const gridCopy = JSON.parse(JSON.stringify(grid))
        gridCopy[row][column] = player
        setPlayer(player === 'X' ? 'O' : 'X')
        setGrid(gridCopy)
    }

    const checkForWinner = () => {
        let winner = false
        for (let index = 0; index < grid.length; index++) {
            const row = grid[index]
            if (row[0] !== '' && row[0] == row[1] && row[1] == row[2])
                winner = true
        }

        for (let index = 0; index < grid[0].length; index++) {
            if (
                grid[0][index] !== '' &&
                grid[0][index] == grid[1][index] &&
                grid[1][index] == grid[2][index]
            )
                winner = true
        }

        if (
            grid[0][0] !== '' &&
            grid[0][0] == grid[1][1] &&
            grid[1][1] == grid[2][2]
        )
            winner = true
        if (
            grid[2][0] != '' &&
            grid[2][0] == grid[1][1] &&
            grid[1][1] == grid[0][2]
        )
            winner = true
        return winner
    }
    return (
        <div className="board">
            {grid.map((row, rIndex) => {
                return (
                    <div className="row" key={rIndex}>
                        {row.map((cell, cIndex) => {
                            return (
                                <div
                                    onClick={() => handleClick(rIndex, cIndex)}
                                    className="cell"
                                    key={cIndex}
                                >
                                    {cell}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default TicTacToe2
