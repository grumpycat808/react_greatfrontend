import React from 'react';

const style = { 
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
    width: '50px',
    height: '50px'
}


function Square({onClick, value}) {
    return (
        <button style={style} onClick={onClick}>
            {value}
            
        </button>
    );
}

export default Square;