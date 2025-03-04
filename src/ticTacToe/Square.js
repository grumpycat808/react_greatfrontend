import React from 'react';

function Square({onClick, value}) {
    return (
        <button onClick={onClick}>
            {value}
        </button>
    );
}

export default Square;