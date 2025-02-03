import React, { useState } from 'react'
import Canvas from './Canvas.js'
import './pixel-art.css'
const COLORS = {
    white: '#fff',
    gray: '#e9ecef',
    black: '#000',
    red: '#cc0001',
    orange: '#fb940b',
    yellow: '#ffff01',
    green: '#01cc00',
    teal: '#38d9a9',
    blue: '#228be6',
    purple: '#7950f2',
    beige: '#ff8787',
}

function PixelArt(props) {
    const [drawColor, setDrawColor] = useState('black')
    const [action, setAction] = useState('draw')
    return (
        <div>
            <Canvas action={action} activeColor={COLORS[drawColor]}></Canvas>
            <div className="row">
                <div className="action">
                    <button className={action == "draw" ? "active" : ""} onClick={() => setAction('draw')}>Draw</button>
                    <button className={action == "erase" ? "active" : ""} onClick={() => setAction('erase')}>Erase</button>
                </div>
                <ul className="colors">
                    {Object.entries(COLORS).map(([color, hex]) => (
                        <li key={color}>
                            <span
                                onClick={() => setDrawColor(color)}
                                className={drawColor == color ? "active color" : "color"}
                                style={{ backgroundColor: hex }}
                            ></span>
                        </li>
                    ))}
                </ul>{' '}
            </div>
        </div>
    )
}

export default PixelArt
