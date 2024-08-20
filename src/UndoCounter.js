import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
UndoCounter.propTypes = {}

function UndoCounter(props) {
    const [value, setValue] = useState(0)
    const [history, setHistory] = useState([])
    const [redoItems, setRedoItems] = useState([])
    const updateValue = (operation, displayVal) => {
        const newVal = operation(value)
        const newHistoryItem = {
            displayVal,
            old: value,
            newVal,
            operation,
        }
        setHistory([newHistoryItem, ...history])
        setValue(newVal)
    }

    const handleUndo = () => {
        let arr = [...history]
        if (arr.length === 0) return
        let newRedoItem = arr.shift()
        setValue(newRedoItem.old)
        setRedoItems([newRedoItem, ...redoItems])
        setHistory(arr)
    }
    const handleRedo = () => {
        let arr = [...redoItems]
        if (arr.length === 0) return
        let newItem = arr.shift()
        setValue(newItem.newVal)
        setHistory([newItem, ...history])
        setRedoItems(arr)
    }
    const handleReset = () => {
        setHistory([])
        setValue(0)
    }
    return (
        <div>
            <div>
                <button onClick={handleUndo}>Undo</button>
                <button onClick={handleRedo}>Redo</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <hr></hr>
            <div>
                <button onClick={() => updateValue((val) => val / 2, '/2')}>
                    /2
                </button>
                <button onClick={() => updateValue((val) => val - 1, '-1')}>
                    -1
                </button>
                <span>{value}</span>
                <button onClick={() => updateValue((val) => val * 2, 'x2')}>
                    x2
                </button>
                <button onClick={() => updateValue((val) => val + 1, '+1')}>
                    +1
                </button>
            </div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th scope="col">Operation</th>
                        <th scope="col">Old</th>
                        <th scope="col">New</th>
                    </tr>
                </thead>
                {history.map((item) => {
                    return (
                        <tr key={v4()}>
                            <td scope="row">{item.displayVal}</td>
                            <td>{item.old}</td>
                            <td>{item.newVal}</td>
                        </tr>
                    )
                })}
            </table>

            <h1>Redo item</h1>
            {redoItems.map((item) => (
                <div>
                    display val: {item.displayVal} old:{item.old} new:
                    {item.newVal}
                </div>
            ))}
        </div>
    )
}

export default UndoCounter
