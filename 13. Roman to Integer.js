var romanToInt = function (s) {
    let values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let total = 0;
    let i = 0;
    while (i < s.length) {
        if (i + 1 < s.length && values[s[i]] < values[s[i + 1]]) {
            total += values[s[i + 1]] - values[s[i]];
            i += 2;
        }
        else {
            total += values[s[i]];
            i += 1;
        }
    }
    return total;
};
