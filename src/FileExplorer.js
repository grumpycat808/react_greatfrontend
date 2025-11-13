import React, { useState } from 'react'
import { fileData } from './fileData'
import FileDirectory from './FileDirectory'
function FileExplorer(props) {
    const [message, setMessage] = useState('Hello world')

    const displayDirectory = (data) => {
        return data.map((item, index) => {
            if (item.hasOwnProperty('children')) {
                return (
                    <li key={index}>
                        {item.name} [-]{' '}
                        {<ul>{displayDirectory(item.children)}</ul>}
                    </li>
                )
            } else {
                return <li key={index}>{item.name}</li>
            }
        })
    }
    return (
        <div>
            <h1>{message}</h1>
            <ul>{displayDirectory(fileData)}</ul>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
    )
}

export default FileExplorer
