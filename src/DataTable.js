import React, { useEffect, useState } from 'react'
import users from './users.json'
import { v4 } from 'uuid';
import './tableStyles.css'
function DataTable(props) {
    const [rowsDisplayed, setRowDisplayed] = useState(5)
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState('asc');
    const [column, setColumn] = useState('');
    const [allUsers, setAllUsers] = useState(users);
    const [dataRows, setDataRows] = useState([])
    
    useEffect(() => {
        const start = page * rowsDisplayed
        const end = start + rowsDisplayed
        const rows = [];
        console.log(allUsers)
        for (let index = start; index < end; index++) {
            rows.push(allUsers[index])
        }
        setDataRows(rows)
    }, [page, rowsDisplayed])
    const updateSortOrder = (col, direction) => {
        setColumn(col);
        setDirection(direction)
    }
    
    

    const getNumberOfPages = () => {
        let num = users.length / rowsDisplayed
        if (users.length % rowsDisplayed !== 0) num++

        return Math.ceil(num)
    }
    return (
        <div>
            <button onClick={() => page > 0 && setPage(page - 1)}>Prev</button>
            <button
                onClick={() =>
                    page < getNumberOfPages() - 2 && setPage(page + 1)
                }
            >
                Next
            </button>
            <p>
                Current page: {page + 1}/{getNumberOfPages() - 1}
            </p>
            <select
                id="rowsDisplayed"
                onChange={(e) => setRowDisplayed(parseInt(e.target.value))}
                value={rowsDisplayed}
            >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>

            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Occupation</th>
                </tr>
            </thead>
            <tbody>
                
            {dataRows.length && dataRows.map((item) => (
                <tr key={v4()}>
                    <td>{item.id}</td>
                    <td>{item.age}</td>
                    <td>{item.name}</td>
                    <td>{item.occupation}</td>
                </tr>
            ))}</tbody></table>
        </div>
    )
}

export default DataTable
