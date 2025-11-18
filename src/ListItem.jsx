import React, { useState } from 'react'

function ListItem({ name, index }) {
    const [checked, setChecked] = useState(false)
    return (
        <li>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
            ></input>
            {name}
        </li>
    )
}

export default ListItem
