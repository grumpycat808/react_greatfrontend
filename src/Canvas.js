import React, { useEffect, useRef, useState } from 'react'
import './pixel-art.css'
const grid = []
for (let index = 0; index < 15; index++) {
    const newArr = []
    for (let j = 0; j < 15; j++) {
        newArr.push(<div className="pixel"></div>)
    }
    grid.push(newArr)
}
function Canvas({ activeColor, action }) {
    let counter = 0
    const [mouseDown, setMouseDown] = useState(false)
    const [activeCells, setActiveCells] = useState({})

    useEffect(() => {
        console.log(activeCells)
    }, [activeCells])
    useEffect(
        (hey) => {
            console.log('mousedown' + hey)
        },
        [mouseDown],
    )

    const updateBoard = (row, col) => {
        const activeCellsCopy = { ...activeCells }
        if (action === 'draw') {
            activeCellsCopy[`${row} ${col}`] = activeColor
        } else {
            delete activeCellsCopy[`${row} ${col}`]
        }
        setActiveCells(activeCellsCopy)
    }
    const handleMouseOver = (row, column) => {
        console.log('mouseover', row + ' ' + column)
        if (mouseDown) {
            const activeCellsCopy = { ...activeCells }
            if (action === 'draw') {
                activeCellsCopy[`${row} ${column}`] = activeColor
            } else {
                delete activeCellsCopy[`${row} ${column}`]
            }

            setActiveCells(activeCellsCopy)
        }

        // setState
    }
    return (
        <div className="canvas">
            {grid.map((row, rowIndex) => {
                return (
                    <div key={rowIndex} className="row">
                        {row.map((_, columnIndex) => {
                            counter++
                            return (
                                <div
                                    key={columnIndex}
                                    className={'cell'}
                                    onMouseOver={() =>
                                        handleMouseOver(rowIndex, columnIndex)
                                    }
                                    onMouseUp={() => setMouseDown(false)}
                                    onMouseDown={() => {
                                        updateBoard(rowIndex, columnIndex)
                                        setMouseDown(true)
                                    }}
                                    style={
                                        activeCells.hasOwnProperty(
                                            `${rowIndex} ${columnIndex}`,
                                        )
                                            ? {
                                                  backgroundColor:
                                                      activeCells[
                                                          `${rowIndex} ${columnIndex}`
                                                      ],
                                              }
                                            : {}
                                    }
                                ></div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Canvas
