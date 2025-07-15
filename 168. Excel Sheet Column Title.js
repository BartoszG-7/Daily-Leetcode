var convertToTitle = function (columnNumber) {
    let ans = "";

    while (columnNumber > 0) {
        columnNumber--;
        ans =
            String.fromCharCode((columnNumber % 26) + "A".charCodeAt(0)) + ans;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return ans;
};
