var isPalindrome = function (s) {
    let filteredChars = "";
    for (let ch of s) {
        if (ch.match(/[a-z0-9]/i)) {
            filteredChars += ch.toLowerCase();
        }
    }
    const reversedChars = filteredChars.split("").reverse().join("");
    return filteredChars === reversedChars;
};
