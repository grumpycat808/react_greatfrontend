import React, { useState } from 'react';
import "./file-explorer.css"
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
  ];



function FileExplorer(props) {

    const [active, setActive] = useState([]);

    const toggleDirectory = (directoryName) => {
        if(active.includes(directoryName)) {
            
            const newList = active.filter((item) => item != directoryName)
           
            setActive(newList);
        } else {
            setActive([...active, directoryName])
        }
    }
    const recursiveMap = (data, parent) => {

        return data.map((item) => {
    
            if(item.hasOwnProperty('children')) {
                let cn = 'directory';
                let list = '';
                if(parent) {
                    cn = active.includes(parent) ? 'directory active' : 'directory hidden';
                    list = active.includes(parent) ? 'active' : 'hidden';
                }
                return (<><h1 className={cn} onClick={() => toggleDirectory(item.name)}>{item.name}</h1><ul className={list}>{recursiveMap(item.children, item.name)}</ul></>)
            } else {
                if(parent) {
                    return <li className={active.includes(parent) ? 'active' : 'hidden'} >{item.name}</li>
                } 
                return <h1>{item.name}</h1>
            }
        })
    }
    return (
        <div>
            
            {recursiveMap(fileData)}
        </div>
    );
}

export default FileExplorer;