var strStr = function (haystack, needle) {
    let m = needle.length;
    let n = haystack.length;

    for (let windowStart = 0; windowStart <= n - m; windowStart++) {
        for (let i = 0; i < m; i++) {
            if (needle[i] != haystack[windowStart + i]) {
                break;
            }
            if (i == m - 1) {
                return windowStart;
            }
        }
    }

    return -1;
};
