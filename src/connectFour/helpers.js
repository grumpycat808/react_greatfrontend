export const getAvailableRow = (colNumber, board) => {
    for (let index = board.length - 1; index >= 0; index--) {
        if (board[index][colNumber] === null) return index
    }
    return null
}

export const checkWinner = (row, col, board, currentPlayer) => {
    const directions = [
        //row, col
        [0, 1], // right
        [1, 0], // down
        [1, 1], //diagnoal right
        [1, -1], //diagonal left
    ]

    const getNumber = (dRow, dCol) => {
        let [count, currentRow, currentCol] = [0, row, col]
        // debugger;
        while (
            currentCol >= 0 &&
            currentCol < board[0].length &&
            currentRow >= 0 &&
            currentRow < board.length &&
            board[currentRow][currentCol] == currentPlayer
        ) {
            currentRow += dRow
            currentCol += dCol
            count++
        }

        currentRow = row - dRow
        currentCol = col - dCol
        while (
            currentCol >= 0 &&
            currentCol < board[0].length &&
            currentRow >= 0 &&
            currentRow < board.length &&
            board[currentRow][currentCol] == currentPlayer
        ) {
            currentRow -= dRow
            currentCol -= dCol

            count++
        }
        return count
    }
    for (let index = 0; index < directions.length; index++) {
        const dir = directions[index]
        if (getNumber(dir[0], dir[1]) >= 4) {
            return currentPlayer
        }
    }

    return null
}
