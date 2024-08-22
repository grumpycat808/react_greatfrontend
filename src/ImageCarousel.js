import React, { useState } from 'react'
import './image-carousel.css'
function ImageCarousel({ images }) {
    const [page, setPage] = useState(0)

    const buttons = []

    for (let index = 0; index < images.length; index++) {
        buttons.push(<button onClick={() => setPage(index)}>{index}</button>)
    }
    return (
        <>
            <div className="main">
                <div className="image-container">
                    <img src={images[page].src} alt={images[page].alt}></img>
                    <div className="arrows-container">
                        <button onClick={() => page >= 1 && setPage(page - 1)}>
                            Prev
                        </button>
                        <button
                            onClick={() =>
                                page < images.length - 1 && setPage(page + 1)
                            }
                        >
                            Next
                        </button>
                    </div>
                    <div className="buttons-container">
                        {buttons.map((item) => item)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageCarousel
