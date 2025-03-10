const calculateWinner = (squares) => {
    if (squares[0][0] === squares[1][1] && squares[0][0] === squares[2][2]) {
        return squares[0][0]
    }

    if (squares[0][2] === squares[1][1] && squares[0][2] === squares[2][0]) {
        return squares[0][2]
    }
    for (let i = 0; i < squares.length; i++) {
        const row = squares[i]
        if (row[0] === row[1] && row[0] === row[2]) {
            return row[0]
        }
    }

    for (let i = 0; i < squares[0].length; i++) {
        if (
            squares[0][i] === squares[1][i] &&
            squares[0][i] === squares[2][i]
        ) {
            return squares[0][i]
        }
    }
    return null
}

export default calculateWinner
