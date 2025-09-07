var exist = function (board, word) {
    const ROWS = board.length;
    const COLS = board[0].length;
    const backtrack = function (row, col, suffix) {
       
        if (suffix.length == 0) return true;
        
        if (
            row < 0 ||
            row == ROWS ||
            col < 0 ||
            col == COLS ||
            board[row][col] != suffix.charAt(0)
        )
            return false;
        
        let ret = false;
       
        board[row][col] = "#";
        const directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];
        for (let [rowOffset, colOffset] of directions) {
            ret = backtrack(row + rowOffset, col + colOffset, suffix.slice(1));
            if (ret) break;
        }
        
        board[row][col] = suffix.charAt(0);
        return ret;
    };

    for (let row = 0; row < ROWS; ++row) {
        for (let col = 0; col < COLS; ++col) {
            if (backtrack(row, col, word)) return true;
        }
    }
    return false;
};
