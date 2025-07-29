var findWords = function(words) {
    const rowMap = {};
    for (const c of 'qwertyuiop') rowMap[c] = 1;
    for (const c of 'asdfghjkl') rowMap[c] = 2;
    for (const c of 'zxcvbnm') rowMap[c] = 3;

    const res = [];
    for (const word of words) {
        const lw = word.toLowerCase();
        const row = rowMap[lw[0]];
        if ([...lw].every(c => rowMap[c] === row)) {
            res.push(word);
        }
    }
    return res;
};
