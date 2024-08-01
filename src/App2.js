import { useState } from 'react'
import { v4 } from 'uuid'
import './styles.css'

export default function App() {
    const [listRight, setListRight] = useState([
        'React',
        'Svelte',
        'Angular',
        'Vue',
    ])
    const [listLeft, setListLeft] = useState([
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
    ])

    const [checkedList, setCheckedList] = useState([])
    const [rightInput, setRightInput] = useState('')
    const [leftInput, setLeftInput] = useState('')
    const [selectAll, setSelectAll] = useState([])
    const handleCheckboxChange = (checked, name) => {
        let newList
        if (checked) {
            newList = [...checkedList, name]
        } else {
            newList = checkedList.filter((item) => item !== name)
        }
        setCheckedList(newList)
    }

    const handleAdd = (side) => {
        if (side === 'left') {
            setListLeft([...listLeft, leftInput])
            setLeftInput('')
        } else {
            setListRight([...listRight, rightInput])
            setRightInput('')
        }
    }
    const handleKeypress = (e, side) => {
        if (e.key === 'Enter') {
            handleAdd(side)
        }
    }

    const handleSelectAll = (checked, side) => {
        console.log(checked, side)
        if (checked) {
            const newList = [...checkedList]

            if (side === 'left') {
                listLeft.forEach(
                    (item) => !checkedList.includes(item) && newList.push(item),
                )
            } else {
                listRight.forEach(
                    (item) => !checkedList.includes(item) && newList.push(item),
                )
            }
            setCheckedList(newList)
            if (!selectAll.includes(side)) setSelectAll([...selectAll, side])
        } else {
            setSelectAll(selectAll.filter((item) => item === side))
            if (side === 'left') {
                setCheckedList(
                    checkedList.filter((item) => !listLeft.includes(item)),
                )
            } else {
                setCheckedList(
                    checkedList.filter((item) => !listRight.includes(item)),
                )
            }
            if (selectAll.includes(side))
                setSelectAll(selectAll.filter((item) => item !== side))
        }
    }
    const getNumberOfSelected = (side) => {
        if (side === 'left') {
            return listLeft.filter((item) => checkedList.includes(item)).length
        } else {
            return listRight.filter((item) => checkedList.includes(item)).length
        }
    }
    const isLeftDisabled = () => {
        return (
            listRight.filter((item) => checkedList.includes(item)).length === 0
        )
    }
    const isRightDisabled = () => {
        return (
            listLeft.filter((item) => checkedList.includes(item)).length === 0
        )
    }
    const handleTransfer = (direction, transferAll = false) => {
        if (direction === 'left') {
            if (transferAll) {
                setListLeft([...listLeft, ...listRight])
                setListRight([])
            } else {
                const newItems = listRight.filter((item) =>
                    checkedList.includes(item),
                )
                setListLeft([...listLeft, ...newItems])
                setListRight(
                    listRight.filter((item) => !checkedList.includes(item)),
                )
            }
        } else {
            //Direction: right
            if (transferAll) {
                setListRight([...listRight, ...listLeft])
                setListLeft([])
            } else {
                const newItems = listLeft.filter((item) =>
                    checkedList.includes(item),
                )
                setListRight([...listRight, ...newItems])
                setListLeft(
                    listLeft.filter((item) => !checkedList.includes(item)),
                )
            }
        }
    }
    return (
        <div>
            <div className="list-container">
                <ul>
                    <input
                        type="text"
                        value={leftInput}
                        onChange={(e) => setLeftInput(e.target.value)}
                        onKeyUp={(e) => handleKeypress(e, 'left')}
                    ></input>
                    <div>
                        <input
                            type="checkbox"
                            onChange={(e) =>
                                handleSelectAll(e.target.checked, 'left')
                            }
                            checked={selectAll.includes('left')}
                        ></input>
                        {`${getNumberOfSelected('left')}/${listLeft.length} Selected`}
                    </div>
                    {listLeft.map((item) => (
                        <li key={v4()}>
                            <input
                                checked={checkedList.includes(item)}
                                type="checkbox"
                                onChange={(e) =>
                                    handleCheckboxChange(e.target.checked, item)
                                }
                            />
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="buttons-container">
                    <button
                        onClick={() => handleTransfer('left', true)}
                    >{`<<`}</button>
                    <button
                        disabled={isLeftDisabled()}
                        onClick={() => handleTransfer('left')}
                    >{`<`}</button>
                    <button
                        disabled={isRightDisabled()}
                        onClick={() => handleTransfer('right')}
                    >{`>`}</button>
                    <button
                        onClick={() => handleTransfer('right', true)}
                    >{`>>`}</button>
                </div>
                <ul>
                    <input
                        type="text"
                        value={rightInput}
                        onChange={(e) => setRightInput(e.target.value)}
                        onKeyUp={(e) => handleKeypress(e, 'right')}
                    ></input>
                    <div>
                        <input
                            type="checkbox"
                            onChange={(e) =>
                                handleSelectAll(e.target.checked, 'right')
                            }
                            checked={selectAll.includes('right')}
                        ></input>
                        {`${getNumberOfSelected('right')}/${listRight.length} Selected`}
                    </div>
                    {listRight.map((item) => (
                        <li key={v4()}>
                            <input
                                type="checkbox"
                                checked={checkedList.includes(item)}
                                onChange={(e) =>
                                    handleCheckboxChange(e.target.checked, item)
                                }
                            />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
