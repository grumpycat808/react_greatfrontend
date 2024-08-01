import React, { useState } from 'react'
import './progress-styles.css'
function ProgressBars({progress, handleAnimationEnd}) {
    

    return (
        <div className="progress-bar">
            <div
                className="progress-container"
                style={{ width: `${progress}%`}}
            >
                <div onAnimationEnd={handleAnimationEnd} className="progress">{progress}</div>
                
            </div>
        </div>
    )
}

export default ProgressBars
