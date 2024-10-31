import React, { useEffect, useState } from 'react'

function NestedCheckboxes({ data }) {
    useEffect(() => {}, [])

    const [selected, setSelected] = useState([])

    const handleCheck = (id) => {
        const newSelected = [...selected, id]
        setSelected(newSelected)
    }
    const recursiveList = (data) => {
        return data.map((item, index) => {
            return (
                <li key={index}>
                    <label htmlFor={item.name}>{item.name}</label>
                    <input type="checkbox" name={item.name} key={index}></input>

                    {item.hasOwnProperty('children') && (
                        <ul>{recursiveList(item.children)}</ul>
                    )}
                </li>
            )
        })
    }
    return <div>{recursiveList(data)}</div>
}

export default NestedCheckboxes
