import React, { useState } from 'react'
import './transferList.css'
function TransferList(props) {
    const [list, setList] = useState({
        left: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
        right: ['React', 'Angular', 'Vue', 'Svelte'],
    })
    const [selected, setSelected] = useState({left: [], right: []})

    const { left, right } = list;
    
    const handleSelect = (item, list) => {
        const selectedCopy = structuredClone(selected);

        if(selectedCopy[list].includes(item)) {
            const filteredList = selectedCopy[list].filter(i => i != item);
            selectedCopy[list] = filteredList;
        } else {
             selectedCopy[list] = [...selectedCopy[list], item];
        }
       
        setSelected(selectedCopy);
    }

    const handleClick = (direction) => {

    }

    const handleTransferAll = (direction) => {
        const listCopy = structuredClone(list);

        if(direction === 'left' ){
            listCopy.left = [...listCopy.left, ...listCopy.right];
            listCopy.right = [];
        } else {
            listCopy.right = [...listCopy.right, ...listCopy.left];
            listCopy.left = [];
        }
    }
    return (
        <div>
            <div className="main">
                <ul>
                    {left.map((item) => {
                        return <li>
                            <input type="checkbox" onChange={() => handleSelect(item, "left")} checked={selected.left.includes(item)}></input>
                            {item}
                        </li>
                    })}
                </ul>
                <div className="buttons">
                    <button>{`<<`}</button>
                    <button>{`<`}</button>
                    <button>{`>>`}</button>
                    <button>{`>`}</button>
                </div>
                <ul>
                    {right.map((item) => {
                        return <li>
                            <input type="checkbox" onChange={() => handleSelect(item, "right")} checked={selected.right.includes(item)}></input>
                            {item}{' '}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TransferList
