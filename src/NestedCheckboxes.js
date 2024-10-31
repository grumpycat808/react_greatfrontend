import React, { useEffect, useState } from 'react'

function NestedCheckboxes({ data }) {
    const [selected, setSelected] = useState([])
    // useEffect(() => {
    //     console.log("selected", selected)

    // }, [selected])

    const handleCheck = (id) => {
        let newSelected = [...selected]
        let item = findItemById(data, id)
        let children = [];
        if (item && item.hasOwnProperty('children')) {
            children = getChildren(item.children);
        }
        if(selected.includes(id)) {
            //handle unselect
            console.log('newSelected', newSelected);
            console.log('id', id);
            console.log('children', children);
            // debugger
            newSelected = newSelected.filter((item) => item !== id && !children.includes(item))
        } else {
            //handle select
            newSelected.push(id);
            newSelected = [...newSelected, ...children]
        }
        
        setSelected(newSelected)
    }


    const findItemById = (dataArray, id) => {
        let returnItem = null;

        const recursiveFind = (array, id) => {
            // debugger
            for (let index = 0; index < array.length; index++) {
                const item = array[index]
                if (item.id === id) {
                    returnItem = item;
                    break;
                };
                if (item.hasOwnProperty('children')) {
                     recursiveFind(item.children, id)
                }
            }
        }
        recursiveFind(dataArray, id);
        return returnItem;
    }

    const getChildren = (item, list = []) => {
        console.log('item', item);
        item.forEach((cbItem) => {
            if (cbItem.hasOwnProperty('children')) {
                list.push(cbItem.id)
                getChildren(cbItem.children, list)
            } else {
                list.push(cbItem.id)
            }
        })
        return list;
    }
    const recursiveList = (data) => {
        return data.map((item, index) => {
            return (
                <li key={index}>
                    <label htmlFor={item.name}>{item.name}</label>
                    <input
                        checked={selected.includes(item.id)}
                        onChange={() => handleCheck(item.id)}
                        type="checkbox"
                        name={item.name}
                        key={index}
                    ></input>

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
