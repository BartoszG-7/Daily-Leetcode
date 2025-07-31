var lengthOfLongestSubstring = function (s) {
    let charToNextIndex = new Map();
    let maxLen = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        if (charToNextIndex.has(s[right])) {
            left = Math.max(charToNextIndex.get(s[right]), left);
        }
        maxLen = Math.max(maxLen, right - left + 1);
        charToNextIndex.set(s[right], right + 1);
    }
    return maxLen;
};
