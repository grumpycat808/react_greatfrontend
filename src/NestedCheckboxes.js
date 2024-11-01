import React, { useEffect, useState } from 'react'

function NestedCheckboxes({ data }) {
    const [selected, setSelected] = useState([])
    useEffect(() => {
        // setSelected([...selected, 8])
    }, [selected])

    const handleCheck = (id) => {
        let newSelected = [...selected]
        let item = findItemById(data, id)
        let children = [];
        if (item && item.hasOwnProperty('children')) {
            children = getChildren(item.children);
        }
        if(selected.includes(id)) {
            //handle unselect
          
            newSelected = newSelected.filter((item) => item !== id && !children.includes(item))
        } else {
            //handle select
            newSelected.push(id);
            newSelected = [...newSelected, ...children]
            console.log("getParent(id)", getParent(id))
            
        }
        
        setSelected(newSelected)
        const parentId = getParent(id);
            if(id !== parentId) {
                //Check if we need to select parent
                if(allChildrenSelected(parentId)) {
                    newSelected.push(parentId.id);
                    console.log("newSelected", newSelected)

                    setSelected(newSelected)
                }
            }
    }
    const allChildrenSelected = (id) => {
        let children = getChildren([id]);
        let allSelected = true;

        console.log('id', id);
        children = children.filter((child) => !selected.includes(child) && child !== id.id)
        console.log('children', children);
        return children.length === 0;
    }
    const getParent = (id) => {
        return data.find((item) => {
            const children = getChildren([item]);
            console.log('children', children);
            console.log('id', id);
            return children.includes(id);
        })
        
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

    const getChildren = (itemsArray, list = []) => {
        
        itemsArray.forEach((cbItem) => {
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
