var getLongestSubsequence = function (words, groups) {
    const n = words.length;
    const dp = new Array(n).fill(1);
    const prev = new Array(n).fill(-1);
    let maxLen = 1,
        endIndex = 0;

    for (let i = 1; i < n; i++) {
        let bestLen = 1;
        let bestPrev = -1;
        for (let j = i - 1; j >= 0; j--) {
            if (groups[i] !== groups[j] && dp[j] + 1 > bestLen) {
                bestLen = dp[j] + 1;
                bestPrev = j;
            }
        }
        dp[i] = bestLen;
        prev[i] = bestPrev;
        if (dp[i] > maxLen) {
            maxLen = dp[i];
            endIndex = i;
        }
    }

    const res = [];
    for (let i = endIndex; i !== -1; i = prev[i]) {
        res.push(words[i]);
    }
    return res.reverse();
};
