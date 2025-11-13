import React, { useState } from 'react'
import './fileDirectory.css'
function FileDirectory({ children, name }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {name}{' '}
            <span className="icon" onClick={() => setIsOpen(!-isOpen)}>
                {isOpen ? '[-]' : '[+]'}
            </span>
            {isOpen && children}
        </>
    )
}

export default FileDirectory
