import React, { useState } from 'react'

function FileDirectory({ item }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <li>
            {item.name} <span>[-]</span>
            {item.children && <ul>{FileDirectory(item.children)}</ul>}
        </li>
    )
}

export default FileDirectory
