import React, { useEffect, useState } from 'react'
import './star-rating.css'
function StarRating2(props) {
    const [active, setActive] = useState(-1)

    const [hovered, setHovered] = useState(-1)

    const [prev, setPrev] = useState(-1)
    useEffect(() => {
        console.log('hovered', hovered)
    }, [hovered])
    const starArr = []
    const handleMouseEnter = (index) => {
        setHovered(index)
    }

    const handleMouseOut = () => {
        setHovered(-1)
    }
    const handleClick = (index) => {
        setActive(index)
    }

    const isActive = (index) => {
        if (hovered > -1) {
            return index <= hovered
        } else {
            return index <= active
        }
    }
    for (let index = 0; index < 5; index++) {
        starArr.push(
            <svg
                onMouseOver={(e) => handleMouseEnter(index)}
                onClick={() => handleClick(index)}
                onMouseOut={handleMouseOut}
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className={
                    isActive(index) ? 'star-icon star-icon-filled' : 'star-icon'
                }
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
            </svg>,
        )
    }
    return <div>{starArr.map((star) => star)}</div>
}

export default StarRating2
