import React, { useState } from 'react'
import './transfer-list.css'
import ListItem from './ListItem'
const left = [
    { name: 'HTML', isChecked: false },
    { name: 'JavaScript', isChecked: false },
    { name: 'CSS', isChecked: false },
    { name: 'TypeScript', isChecked: false },
]

const right = [
    { name: 'React', isChecked: false },
    { name: 'Angular', isChecked: false },
    { name: 'Vue', isChecked: false },
    { name: 'Svelte', isChecked: false },
]
function TransferList(props) {
    const [leftList, setLeftList] = useState(left)
    const [rightList, setRightList] = useState(right)

    const setChecked = (name, side) => {
        if (side === 'left') {
            const listItem = leftList.find((item) => item.name === name)
            const copy = leftList.filter((item) => item.name !== name)
        } else {
        }
    }
    return (
        <div className="container">
            <div className="left">
                {leftList.map((item, index) => {
                    return (
                        <ListItem
                            key={index}
                            name={item.name}
                            index={index}
                        ></ListItem>
                    )
                })}
            </div>
            <div className="buttons">
                <button>{'<<'}</button>
                <button>{'<'}</button>
                <button>{'>'}</button>
                <button>{'>>'}</button>
            </div>
            <div className="right">
                {rightList.map((item, index) => {
                    return (
                        <ListItem
                            key={index}
                            name={item.name}
                            index={index}
                        ></ListItem>
                    )
                })}
            </div>
        </div>
    )
}

export default TransferList
