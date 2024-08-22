import React, { useEffect, useState } from 'react'
import users from './users.json'
import { v4 } from 'uuid'
import './tableStyles.css'
function DataTable(props) {
    const [rowsDisplayed, setRowDisplayed] = useState(5)
    const [page, setPage] = useState(0)
    const [ascending, setAscending] = useState(true)
    const [column, setColumn] = useState('id')
    const [allUsers, setAllUsers] = useState(users)
    // const [dataRows, setDataRows] = useState([])
    console.log('Rendered')
    let rows = []
    // useEffect(() => {
    //     setAllUsers(users)
    //     console.log("HERE")
    // }, [])

    useEffect(() => {
        let sortedUsers = [...allUsers]

        if (column === 'id') {
            sortedUsers = ascending
                ? sortedUsers.sort((a, b) => a.id - b.id)
                : sortedUsers.sort((a, b) => b.id - a.id)
        }

        if (column === 'name') {
            sortedUsers = ascending
                ? sortedUsers.sort((a, b) => a.name.localeCompare(b.name))
                : sortedUsers.sort((a, b) => b.name.localeCompare(a.name))
        }

        if (column === 'age') {
            sortedUsers = ascending
                ? sortedUsers.sort((a, b) => a.age - b.age)
                : sortedUsers.sort((a, b) => b.age - a.age)
        }

        if (column === 'occupation') {
            sortedUsers = ascending
                ? sortedUsers.sort((a, b) =>
                      a.occupation.localeCompare(b.occupation),
                  )
                : sortedUsers.sort((a, b) =>
                      b.occupation.localeCompare(a.occupation),
                  )
        }
        console.log('HERE again')
        setAllUsers(sortedUsers)
    }, [column, ascending])

    console.log('rows', rows)
    const updateSortOrder = (col, asc) => {
        setColumn(col)
        setAscending(asc)
    }
    const spliceRows = () => {
        const returnArr = []
        const start = page * rowsDisplayed
        const end = start + rowsDisplayed

        for (let index = start; index < end; index++) {
            allUsers[index] && returnArr.push(allUsers[index])
        }
        return returnArr
    }
    const getNumberOfPages = () => {
        let num = allUsers.length / rowsDisplayed
        if (allUsers.length % rowsDisplayed !== 0) num++

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
                        <th onClick={() => updateSortOrder('id', !ascending)}>
                            ID
                        </th>
                        <th onClick={() => updateSortOrder('name', !ascending)}>
                            Name
                        </th>
                        <th onClick={() => updateSortOrder('age', !ascending)}>
                            Age
                        </th>
                        <th
                            onClick={() =>
                                updateSortOrder('occupation', !ascending)
                            }
                        >
                            Occupation
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers
                        ? spliceRows().map((item) => (
                              <tr key={v4()}>
                                  <td>{item.id}</td>
                                  <td>{item.age}</td>
                                  <td>{item.name}</td>
                                  <td>{item.occupation}</td>
                              </tr>
                          ))
                        : null}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
