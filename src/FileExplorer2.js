import React, { useEffect, useState } from 'react'
import './file-explorer.css'
const fileData = [
    {
        id: 1,
        name: 'README.md',
    },
    {
        id: 2,
        name: 'Documents',
        children: [
            {
                id: 3,
                name: 'Word.doc',
            },
            {
                id: 4,
                name: 'Powerpoint.ppt',
            },
        ],
    },
    {
        id: 5,
        name: 'Downloads',
        children: [
            {
                id: 6,
                name: 'unnamed.txt',
            },
            {
                id: 7,
                name: 'Misc',
                children: [
                    {
                        id: 8,
                        name: 'foo.txt',
                    },
                    {
                        id: 9,
                        name: 'bar.txt',
                    },
                ],
            },
        ],
    },
]

function FileExplorer2(props) {
    const getDirectory = () => {
        const recursiveDisplay = (arr) => {
            return (
                <ul>
                    {arr.map((item, index) => {
                        if (item.hasOwnProperty('children')) {
                            return (
                                <li key={index}>
                                    <span
                                        onClick={() => handleClick(item.name)}
                                    >
                                        {item.name}
                                    </span>
                                    <ul
                                        className={
                                            active.includes(item.name)
                                                ? ''
                                                : 'hidden'
                                        }
                                    >
                                        {recursiveDisplay(item.children)}
                                    </ul>
                                </li>
                            )
                        } else {
                            return <li key={index}>{item.name}</li>
                        }
                    })}
                </ul>
            )
        }
        return recursiveDisplay(fileData)
    }
    const [active, setActive] = useState([])
    useEffect(() => {}, [active])
    const handleClick = (directory) => {
        let copy = [...active]
        console.log('directory', directory)
        if (copy.includes(directory)) {
            copy = copy.filter((item) => item !== directory)
        } else {
            copy.push(directory)
        }

        setActive(copy)
    }
    return <div>{getDirectory()}</div>
}

export default FileExplorer2
