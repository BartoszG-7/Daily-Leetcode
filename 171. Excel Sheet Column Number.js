var titleToNumber = function (s) {
    let result = 0;

    const alpha_map = {};
    for (let i = 0; i < 26; i++) {
        alpha_map[String.fromCharCode(i + 65)] = i + 1;
    }

    const n = s.length;
    for (let i = 0; i < n; i++) {
        let cur_char = s[n - 1 - i];
        result += alpha_map[cur_char] * Math.pow(26, i);
    }
    return result;
};
