import React, { useState } from 'react'

import { v4 } from 'uuid'
function Database({ columns, data }) {
    const [numRows, setNumRows] = useState(5)
    const [formattedData, setFormattedData] = useState([...data])
    const [page, setPage] = useState(1)
    const [order, setOrder] = useState(() => {
        const orderObj = {}

        columns.forEach((col) => (orderObj[col] = { ascending: false }))
        console.log(orderObj)
        return orderObj
    })

    const getNumPages = () => {
        return Math.ceil(data.length / numRows)
    }

    const spliceRows = () => {
        const end = numRows * page;
        const start = end - numRows;
        return formattedData.slice(start, end)
    }
    const updateSortOrder = (col, ascending) => {
        if (!formattedData) return
        const datatype = typeof formattedData[0][col]
        const sorted = [...formattedData]
        switch (datatype) {
            case 'string':
                if (ascending) {
                    sorted.sort((a, b) => a[col].localeCompare(b[col]))
                } else {
                    sorted.sort((a, b) => b[col].localeCompare(a[col]))
                }

                break
            case 'number':
                if (ascending) {
                    sorted.sort((a, b) => a[col] - b[col])
                } else {
                    sorted.sort((a, b) => b[col] - a[col])
                }
                break
            default:
            // code block
        }
        let orderOBJ = { ...order }
        orderOBJ[col].ascending = ascending

        setOrder(orderOBJ)
        setFormattedData(sorted)
    }
    return (
        <div>
            <label>
                Rows Displayed:
                <select
                    name="rowsDisplayed"
                    value={numRows}
                    onChange={(e) => setNumRows(e.target.value)}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </label>
            <div>
                <button onClick={() => page > 1 && setPage(page - 1)}>Previous</button>
                <button onClick={() => page < getNumPages() && setPage(page + 1)}>Next</button>
                <span>
                    {page}/{getNumPages()}
                </span>
            </div>
            <table>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th
                                onClick={() =>
                                    updateSortOrder(col, !order[col].ascending)
                                }
                                key={v4()}
                            >
                                {col.toUpperCase()}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {formattedData &&
                        spliceRows().map((item) => (
                            <tr key={v4()}>
                                {columns.map((col) => {
                                    return <td key={v4()}>{item[col]}</td>
                                })}
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Database
