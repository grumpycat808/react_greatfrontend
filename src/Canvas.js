import React, { useState } from 'react'
import './pixel-art.css'
const grid = []
for (let index = 0; index < 15; index++) {
    const newArr = []
    for (let j = 0; j < 15; j++) {
        newArr.push(<div className="pixel"></div>)
    }
    grid.push(newArr)
}
function Canvas(props) {
    let counter = 0
    const [mouseDown, setMouseDown] = useState(false)
    const handleMouseOver = (row, column) => {
        if(mouseDown) {
            console.log('row', row)
            console.log('column', column)

            
        }
        
        // setState
    }
    return (
        <div className="canvas">
            {grid.map((row, rowIndex) => {
                return (
                    <div key={rowIndex} className="row">
                        {row.map((cell, columnIndex) => {
                            counter++
                            return (
                                <div
                                    key={columnIndex}
                                    className="cell"
                                    onMouseOver={() => handleMouseOver(rowIndex, columnIndex)}
                                    onMouseUp={() => setMouseDown(false)}
                                    onMouseDown={() => setMouseDown(true)}
                                >
                                    {counter}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Canvas
