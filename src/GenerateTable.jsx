import React, { useEffect, useState } from 'react'

function GenerateTable(props) {
    const [rows, setRows] = useState(1)
    const [cols, setCols] = useState(1)

    const [table, setTable] = useState([[]])

    const updateTable = () => {
        //Even: rows * col + (row + 1)
        // Odd: rows * (col + 1) - row
    }
    return (
        <div>
            Rows:{' '}
            <input
                onChange={(e) => setRows(e.target.value)}
                value={rows}
                type="number"
                min={1}
            ></input>
            <input
                onChange={(e) => setCols(e.target.value)}
                value={cols}
                type="number"
                min={1}
            ></input>
            <button onClick={updateTable}>Submit</button>
            <table>
                <tbody>
                    {table.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GenerateTable
