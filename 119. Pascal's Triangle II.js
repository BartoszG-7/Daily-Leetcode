var getNum = function (row, col) {
    if (row === 0 || col === 0 || row === col) {
        return 1;
    }
    return getNum(row - 1, col - 1) + getNum(row - 1, col);
};
var getRow = function (rowIndex) {
    let ans = [];
    for (let i = 0; i <= rowIndex; i++) {
        ans.push(getNum(rowIndex, i));
    }
    return ans;
};
