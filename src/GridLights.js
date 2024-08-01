import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'
function GridLights(props) {
    const boxes = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]

    const [selected, setSelected] = useState([])
    useEffect(() => {
        if (selected.length >= 8 && selected.length) {
            let index = selected.length - 1
            let interval = setInterval(() => {
                if (index >= 0) {
                    let cell = document.getElementById(selected[index])
                    cell.classList.remove('active')
                    index = index - 1
                }
                console.log('hey')
            }, 300)

            if (index === 0) clearInterval(interval)

            // const selectedArr = [...selected];
            //     selectedArr.pop();
            //     setSelected(selectedArr)
        }
    }, [selected])
    const handleClick = (index) => {
        setSelected([...selected, index])
    }
    return (
        <div>
            {boxes.map((row, index) => {
                return (
                    <div className="row" key={v4()}>
                        {row.map((cell) => {
                            return cell !== 5 ? (
                                <div
                                    id={cell}
                                    key={v4()}
                                    className={
                                        selected.includes(cell)
                                            ? 'active cell'
                                            : 'cell'
                                    }
                                    onClick={() => handleClick(cell)}
                                >
                                    {cell}
                                </div>
                            ) : (
                                <div key={v4()} className="empty-cell"></div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default GridLights
