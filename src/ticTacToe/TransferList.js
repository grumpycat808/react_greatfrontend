import React, { useState } from 'react'
import './transferList.css'
function TransferList(props) {
    const [list, setList] = useState({
        left: [
            { label: 'HTML', selected: false },
            { label: 'CSS', selected: false },
            { label: 'JavaScript', selected: false },
            { label: 'TypeScript', selected: false },
        ],
        right: [
            { label: 'React', selected: false },
            { label: 'Angular', selected: false },
            { label: 'Vue', selected: false },
            { label: 'Svelte', selected: false },
        ],
    })

    const { left, right } = list

    const handleSelect = (item, side) => {
        const listCopy = structuredClone(list)
        const listItem = listCopy[side].find((i) => i.label === item)
        listItem.selected = !listItem.selected

        setList(listCopy)
    }

    const handleClick = (direction) => {
        const listCopy = structuredClone(list)
        const itemsToMove =
            direction === 'right'
                ? list.left.filter((i) => i.selected)
                : list.right.filter((i) => i.selected)

        if (direction === 'right') {
            listCopy.right = [...listCopy.right, ...itemsToMove]
            listCopy.left = listCopy.left.filter((i) => !i.selected)
        } else {
            listCopy.left = [...listCopy.left, ...itemsToMove]
            listCopy.right = listCopy.right.filter((i) => !i.selected)
        }

        setList(listCopy)
    }

    const handleTransferAll = (direction) => {
        const listCopy = structuredClone(list)

        if (direction === 'left') {
            listCopy.left = [...listCopy.left, ...listCopy.right]
            listCopy.right = []
        } else {
            listCopy.right = [...listCopy.right, ...listCopy.left]
            listCopy.left = []
        }

        setList(listCopy)
    }

    const getBtnDisabled = (btn) => {
        switch (btn) {
            case 'left':
                return list.right.filter((i) => i.selected).length === 0

            case 'right':
                return list.left.filter((i) => i.selected).length === 0
            case 'allLeft':
                return list.right.length === 0
            case 'allRight':
                return list.left.length === 0
        }
    }
    return (
        <div>
            <div className="main">
                <ul>
                    {left.map((item, index) => {
                        return (
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    onChange={() =>
                                        handleSelect(item.label, 'left')
                                    }
                                    checked={
                                        list.left.find(
                                            (i) => i.label === item.label,
                                        ).selected
                                    }
                                ></input>
                                {item.label}
                            </li>
                        )
                    })}
                </ul>
                <div className="buttons">
                    <button
                        disabled={getBtnDisabled('left')}
                        onClick={() => handleClick('left')}
                    >{`<`}</button>
                    <button
                        disabled={getBtnDisabled('allLeft')}
                        onClick={() => handleTransferAll('left')}
                    >{`<<`}</button>
                    <button
                        disabled={getBtnDisabled('right')}
                        onClick={() => handleTransferAll('right')}
                    >{`>>`}</button>
                    <button
                        disabled={getBtnDisabled('allRight')}
                        onClick={() => handleClick('right')}
                    >{`>`}</button>
                </div>
                <ul>
                    {right.map((item, index) => {
                        return (
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    onChange={() =>
                                        handleSelect(item.label, 'right')
                                    }
                                    checked={
                                        list.right.find(
                                            (i) => i.label === item.label,
                                        ).selected
                                    }
                                ></input>
                                {item.label}{' '}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TransferList
