import React from 'react'
import './pixel-art.css'
const grid = [];
for (let index = 0; index < 15; index++) {
    const newArr = [];
    for (let j = 0; j < 15; j++) {
        newArr.push(<div className='pixel'></div>)
    }
    grid.push(newArr)
}
function Canvas(props) {
    return <div className='canvas'>{grid.map((row) => {
        return <div className='row'>{row.map((cell) => {
            return <div className='cell'></div>
        })}</div>
    })}</div>
}

export default Canvas
