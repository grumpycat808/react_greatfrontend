import React, { useState } from 'react'
import Canvas from './Canvas.js';
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
  };
  
function PixelArt(props) {

    const [drawColor, setDrawColor] = useState(COLORS.black)
    return (
        <div>
            <Canvas></Canvas>
            <div className="row">
                <div className="action"></div>
                
            </div>
            <ul className="colors">
            {Object.entries(COLORS).map(([color, hex]) => (
            <li key={color}>
                <span onClick={() => setDrawColor(color)} className='color' style={{ backgroundColor: hex }}></span>
            </li>
        ))}
                </ul>
        </div>
    )
}

export default PixelArt
